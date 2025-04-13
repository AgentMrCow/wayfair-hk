// app/api/generate-design/route.ts

import { NextResponse } from "next/server";

// Define the type of our expected request body
interface RequestBody {
  prompt: string;
  model: string;
  width?: number;
  height?: number;
}

// Update the URL below with the actual xAI API endpoint for image generation.
// The docs reference that you can set "model": "grok-2-image-1212", so adjust accordingly.
const XAI_API_URL = "https://api.x.ai/v1/images/generate";

export async function POST(request: Request) {
  try {
    // Parse the incoming request JSON
    const body: RequestBody = await request.json();

    // Basic validation to ensure required fields are provided
    if (!body.prompt || !body.model) {
      return NextResponse.json(
        { error: "Missing required parameters: prompt or model" },
        { status: 400 }
      );
    }

    // Retrieve the xAI API key from environment variables
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "xAI API key is not configured" },
        { status: 500 }
      );
    }

    // Construct the payload. You can include additional parameters as per your requirements.
    const payload = {
      prompt: body.prompt,
      model: body.model, // should be "grok-2-image-1212"
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

    // Here we assume that the response contains an "imageUrls" field that is an array of URL strings.
    // Adjust this if the actual response structure is different.
    return NextResponse.json({ imageUrls: data.imageUrls });
  } catch (error) {
    console.error("Error in /api/generate-design:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
