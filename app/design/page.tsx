"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  Sparkles,
  RefreshCw,
  Save,
  Smartphone,
  Heart,
  Download,
  Share2,
  Loader2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image"; // Use Next.js Image for optimization

export default function DesignPage() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDesigns, setGeneratedDesigns] = useState<string[]>([]);
  const [selectedDesign, setSelectedDesign] = useState<string | null>(null);

  // Function to generate designs by calling our backend API
  const generateDesigns = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);

    try {
      const response = await fetch("/api/generate-design", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
          model: "grok-2-image-1212",
          width: 800,
          height: 600,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate designs");
      }

      const data = await response.json();

      // Extra safeguard: Check that imageUrls exists and is an array
      if (!Array.isArray(data.imageUrls)) {
        throw new Error("Invalid response from the design API");
      }

      setGeneratedDesigns(data.imageUrls);
      setSelectedDesign(data.imageUrls[0]);
    } catch (error) {
      console.error("Error generating designs:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">
        AI Furniture Generator
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Prompt Input */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">
                Describe Your Ideal Furniture
              </h2>
              <p className="text-gray-600 mb-4">
                Be as specific as possible about style, materials, colors, and
                functionality.
              </p>

              <div className="mb-6">
                <Textarea
                  placeholder="E.g., A sleek, modern sofa with eco-friendly materials, in a dark blue color with wooden legs..."
                  className="min-h-[150px] mb-2"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
                <p className="text-sm text-gray-500">
                  Try to include style, materials, colors, and functionality in
                  your description.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Button
                  onClick={generateDesigns}
                  disabled={isGenerating || !prompt.trim()}
                  className="w-full bg-rose-600 hover:bg-rose-700"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Generate Designs
                    </>
                  )}
                </Button>

                {generatedDesigns.length > 0 && (
                  <Button
                    variant="outline"
                    onClick={generateDesigns}
                    disabled={isGenerating}
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Regenerate
                  </Button>
                )}
              </div>

              {generatedDesigns.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-medium mb-3">Example Prompts:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
                      Vintage-inspired coffee table with hidden storage and brass
                      accents
                    </li>
                    <li className="p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
                      Minimalist dining chair with ergonomic design in light oak
                      wood
                    </li>
                    <li className="p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200">
                      Industrial bookshelf with metal frame and reclaimed wood
                      shelves
                    </li>
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Middle & Right Columns - Generated Designs & Customization */}
        <div className="lg:col-span-2">
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] bg-gray-50 rounded-lg">
              <Loader2 className="h-12 w-12 text-rose-600 animate-spin mb-4" />
              <h3 className="text-xl font-medium">Generating Your Designs...</h3>
              <p className="text-gray-600 mt-2">
                This may take a few moments
              </p>
            </div>
          ) : generatedDesigns.length > 0 ? (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {generatedDesigns.map((design, index) => (
                  <div
                    key={index}
                    className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${selectedDesign === design
                        ? "border-rose-600 shadow-md"
                        : "border-transparent"
                      }`}
                    onClick={() => setSelectedDesign(design)}
                  >
                    <div className="relative w-full h-32">
                      <Image
                        src={design || "/placeholder.svg"}
                        alt={`Generated design ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {selectedDesign && (
                <div>
                  <div className="relative mb-6 bg-gray-100 rounded-lg overflow-hidden h-[400px]">
                    <Image
                      src={selectedDesign || "/placeholder.svg"}
                      alt="Selected furniture design"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full w-10 h-10 p-0"
                      >
                        <Heart className="h-5 w-5" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="rounded-full w-10 h-10 p-0"
                      >
                        <Share2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  {/* Customization Tabs */}
                  <Tabs defaultValue="customize">
                    <TabsList className="w-full mb-6">
                      <TabsTrigger value="customize" className="flex-1">
                        Customize
                      </TabsTrigger>
                      <TabsTrigger value="ar" className="flex-1">
                        View in AR
                      </TabsTrigger>
                      <TabsTrigger value="details" className="flex-1">
                        Details
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="customize">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-sm font-medium mb-2">
                            Material
                          </h3>
                          <Select defaultValue="fabric">
                            <SelectTrigger>
                              <SelectValue placeholder="Select material" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fabric">Fabric</SelectItem>
                              <SelectItem value="leather">Leather</SelectItem>
                              <SelectItem value="wood">Wood</SelectItem>
                              <SelectItem value="metal">Metal</SelectItem>
                              <SelectItem value="glass">Glass</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium mb-2">
                            Color
                          </h3>
                          <div className="flex gap-2 flex-wrap">
                            {[
                              "bg-slate-800",
                              "bg-rose-600",
                              "bg-emerald-600",
                              "bg-amber-600",
                              "bg-sky-600",
                              "bg-gray-300",
                            ].map((color) => (
                              <div
                                key={color}
                                className={`w-8 h-8 rounded-full cursor-pointer border-2 border-white ${color}`}
                              />
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between mb-2">
                            <h3 className="text-sm font-medium">Size</h3>
                            <span className="text-sm text-gray-500">Medium</span>
                          </div>
                          <Slider defaultValue={[50]} max={100} step={1} />
                        </div>

                        <div className="flex gap-4 pt-4">
                          <Button className="flex-1 bg-rose-600 hover:bg-rose-700">
                            <Save className="mr-2 h-4 w-4" />
                            Save Design
                          </Button>
                          <Button variant="outline" className="flex-1">
                            <Download className="mr-2 h-4 w-4" />
                            Export
                          </Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="ar">
                      <div className="bg-gray-100 rounded-lg p-8 text-center">
                        <Smartphone className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                        <h3 className="text-xl font-medium mb-2">
                          View in Your Space
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Use your smartphone camera to see how this furniture
                          will look in your room.
                        </p>
                        <div className="flex flex-col gap-4 max-w-xs mx-auto">
                          <Button className="bg-rose-600 hover:bg-rose-700">
                            <Smartphone className="mr-2 h-4 w-4" />
                            Launch AR Experience
                          </Button>
                          <Button variant="outline">Get QR Code</Button>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="details">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium">Dimensions</h3>
                          <p className="text-gray-600">
                            Width: 78&quot;, Depth: 36&quot;, Height: 32&quot;
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Materials</h3>
                          <p className="text-gray-600">
                            Frame: Kiln-dried hardwood, Upholstery: 100% polyester,
                            Legs: Solid oak
                          </p>
                        </div>
                        <div>
                          <h3 className="font-medium">Features</h3>
                          <ul className="list-disc list-inside text-gray-600">
                            <li>Stain-resistant fabric</li>
                            <li>Removable cushion covers</li>
                            <li>Eco-friendly materials</li>
                            <li>Modular design</li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full min-h-[400px] bg-gray-50 rounded-lg p-8 text-center">
              <Sparkles className="h-12 w-12 text-gray-300 mb-4" />
              <h3 className="text-xl font-medium mb-2">
                Your AI-Generated Designs Will Appear Here
              </h3>
              <p className="text-gray-600 max-w-md">
                Describe your ideal furniture piece in detail, and our AI will
                generate custom designs based on your description.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
