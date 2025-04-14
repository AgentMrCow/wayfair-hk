// app/api/generate-design/route.ts

import { NextResponse } from "next/server";

interface RequestBody {
  prompt: string;
  model: string;
  width?: number;
  height?: number;
}

// Define an interface for items in the response "data" array
interface XAIDataItem {
  url: string;
  revised_prompt: string;
}

// Adjust the API endpoint URL according to xAI documentation.
const XAI_API_URL = "https://api.x.ai/v1/images/generations";

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();

    if (!body.prompt || !body.model) {
      return NextResponse.json(
        { error: "Missing required parameters: prompt or model" },
        { status: 400 }
      );
    }

    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "xAI API key is not configured" },
        { status: 500 }
      );
    }

    const payload = {
      prompt: body.prompt,
      model: body.model, // e.g. "grok-2-image-1212"
      width: body.width || 800,
      height: body.height || 600,
      num_images: 4, // Adjust as needed
    };

    console.log("Payload sent to xAI:", payload);

    const apiResponse = await fetch(XAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    console.log("Status code from xAI:", apiResponse.status);
    const responseJson = await apiResponse.json();
    console.log("Response from xAI:", responseJson);

    // Extract image URLs. Use XAIDataItem to type the items in the data array.
    let imageUrls: string[] = [];
    if (Array.isArray(responseJson.imageUrls)) {
      imageUrls = responseJson.imageUrls;
    } else if (Array.isArray(responseJson.data)) {
      imageUrls = responseJson.data
        .map((item: XAIDataItem) => item.url)
        .filter((url: string) => typeof url === "string");
    }

    if (imageUrls.length === 0) {
      console.error("No image URLs returned. Full response:", responseJson);
      imageUrls = [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ];
    }

    return NextResponse.json({ imageUrls });
  } catch (error) {
    console.error("Error in /api/generate-design:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
