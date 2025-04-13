import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Wayfair AR & AI Furnishings",
    short_name: "Wayfair AR & AI",
    description: "Generate Your Dream Furniture with AI & AR",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#e11d48",
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
