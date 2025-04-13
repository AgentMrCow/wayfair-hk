// app/api/generate-design/route.ts

import { NextResponse } from "next/server";

// Define the type for our expected request body
interface RequestBody {
  prompt: string;
  model: string;
  width?: number;
  height?: number;
}

// Define the expected structure of the xAI API response
interface XAIResponse {
  imageUrls: string[];
}

// Adjust the API endpoint URL as per xAI's documentation.
// For example: https://api.x.ai/v1/images/generations
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
      model: body.model, // should be "grok-2-image-1212"
      width: body.width || 800,
      height: body.height || 600,
      num_images: 4, // Example: Requesting 4 images. Adjust as needed.
    };

    const apiResponse = await fetch(XAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error("xAI API error:", errorText);
      return NextResponse.json(
        { error: "Failed to generate designs from xAI" },
        { status: 500 }
      );
    }

    // Explicitly declare the expected type instead of implicitly using any.
    const data: XAIResponse = await apiResponse.json();

    return NextResponse.json({ imageUrls: data.imageUrls });
  } catch (error) {
    console.error("Error in /api/generate-design:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
