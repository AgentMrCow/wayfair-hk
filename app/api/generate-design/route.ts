// app/api/generate-design/route.ts

import { NextResponse } from "next/server";

// Define the type for our expected request body
interface RequestBody {
  prompt: string;
  model: string;
  width?: number;
  height?: number;
}

// Update the URL if needed per the official xAI documentation.
// In this example, we're trying "https://api.x.ai/v1/images/generations"
const XAI_API_URL = "https://api.x.ai/v1/images/generations";

export async function POST(request: Request) {
  try {
    // Parse the incoming request JSON
    const body: RequestBody = await request.json();

    // Validate required fields
    if (!body.prompt || !body.model) {
      return NextResponse.json(
        { error: "Missing required parameters: prompt or model" },
        { status: 400 }
      );
    }

    // Retrieve the xAI API key from environment variables (make sure to set XAI_API_KEY)
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "xAI API key is not configured" },
        { status: 500 }
      );
    }

    // Construct the payload. Additional parameters can be added per the xAI API docs.
    const payload = {
      prompt: body.prompt,
      model: body.model, // e.g. "grok-2-image-1212"
      width: body.width || 800,
      height: body.height || 600,
      num_images: 4, // Example: Requesting 4 images. Adjust as needed.
    };

    // Make the fetch call to the xAI API endpoint
    const apiResponse = await fetch(XAI_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`, // Securely using our API key on the server side
      },
      body: JSON.stringify(payload),
    });

    // Check if the API call was successful
    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      console.error("xAI API error:", errorText);
      return NextResponse.json(
        { error: "Failed to generate designs from xAI" },
        { status: 500 }
      );
    }

    // Parse the response from xAI
    const data = await apiResponse.json();

    // Assuming the response contains an "imageUrls" field (an array of URL strings)
    return NextResponse.json({ imageUrls: data.imageUrls });
  } catch (error) {
    console.error("Error in /api/generate-design:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
