"use client"

import { useState } from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Smartphone, 
  Camera, 
  Move3d, 
  RotateCcw, 
  ZoomIn, 
  Check, 
  Share2,
  Info,
} from "lucide-react"
import Image from "next/image"

// Map furniture selections to model URLs
const furnitureModels = {
  sofa1: "/wooden_sofa.glb",
  table1: "/table.glb",
  chair1: "/chair.glb",
  bookshelf1: "/bookshelf.glb",
}

// Create a type from the keys of furnitureModels
type FurnitureKey = keyof typeof furnitureModels;

export default function ARExperiencePage() {
  // Narrowing the type of selectedFurniture
  const [selectedFurniture, setSelectedFurniture] = useState<FurnitureKey | null>(null)
  const [activeTab, setActiveTab] = useState("scan")
  const [isScanning, setIsScanning] = useState(false)
  const [hasScanned, setHasScanned] = useState(false)

  const furnitureOptions = [
    {
      id: "sofa1",
      name: "Modern Minimalist Sofa",
      image: "/sofa.png?height=300&width=500",
    },
    {
      id: "table1",
      name: "Vintage Coffee Table",
      image: "/table.png?height=300&width=500",
    },
    {
      id: "chair1",
      name: "Scandinavian Dining Chair",
      image: "/chair.png?height=300&width=500",
    },
    {
      id: "bookshelf1",
      name: "Industrial Bookshelf",
      image: "/bookshelf.png?height=300&width=500",
    },
  ]

  const startScanning = () => {
    setIsScanning(true)
    // Simulate scanning process
    setTimeout(() => {
      setIsScanning(false)
      setHasScanned(true)
      setActiveTab("place")
    }, 3000)
  }

  const selectFurniture = (id: FurnitureKey) => {
    setSelectedFurniture(id)
  }

  return (
    <>
      {/* Load model-viewer script asynchronously */}
      <Script
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        strategy="afterInteractive"
        type="module"
      />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">AR Experience</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Instructions & Controls */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">AR Visualization</h2>
                <p className="text-gray-600 mb-6">See exactly how furniture will look in your space before you buy.</p>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full mb-6">
                    <TabsTrigger value="select" className="flex-1">
                      1. Select
                    </TabsTrigger>
                    <TabsTrigger value="scan" className="flex-1">
                      2. Scan
                    </TabsTrigger>
                    <TabsTrigger value="place" className="flex-1" disabled={!hasScanned}>
                      3. Place
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="select">
                    <div className="space-y-4">
                      <h3 className="font-medium">Select Furniture</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Choose a piece of furniture to visualize in your space.
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        {furnitureOptions.map((item) => (
                          <div
                            key={item.id}
                            className={`border rounded-lg p-2 cursor-pointer transition-all ${
                              selectedFurniture === item.id
                                ? "border-rose-600 bg-rose-50"
                                : "border-gray-200 hover:border-gray-300"
                            }`}
                            onClick={() => selectFurniture(item.id as FurnitureKey)}
                          >
                            <div className="relative h-24 mb-2">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-contain"
                              />
                            </div>
                            <p className="text-xs text-center font-medium truncate">{item.name}</p>
                          </div>
                        ))}
                      </div>

                      <Button
                        className="w-full mt-4 bg-rose-600 hover:bg-rose-700"
                        disabled={!selectedFurniture}
                        onClick={() => setActiveTab("scan")}
                      >
                        Continue
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="scan">
                    <div className="space-y-4">
                      <h3 className="font-medium">Scan Your Room</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Move your device around to scan your space and create a 3D map.
                      </p>

                      <div className="bg-gray-100 rounded-lg p-4">
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Make sure you have good lighting in your room</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Clear any obstacles from the area where you want to place furniture</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                            <span>Slowly move your device to scan all surfaces</span>
                          </li>
                        </ul>
                      </div>

                      <Button
                        className="w-full mt-4 bg-rose-600 hover:bg-rose-700"
                        onClick={startScanning}
                        disabled={isScanning}
                      >
                        {isScanning ? (
                          <>
                            <Camera className="mr-2 h-4 w-4 animate-pulse" />
                            Scanning...
                          </>
                        ) : (
                          <>
                            <Camera className="mr-2 h-4 w-4" />
                            Start Scanning
                          </>
                        )}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="place">
                    <div className="space-y-4">
                      <h3 className="font-medium">Place & Adjust</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Position and adjust your furniture in the AR view.
                      </p>

                      <div className="space-y-3">
                        <div className="bg-gray-100 rounded-lg p-3">
                          <h4 className="text-sm font-medium mb-2 flex items-center">
                            <Move3d className="h-4 w-4 mr-1" />
                            Move
                          </h4>
                          <p className="text-xs text-gray-600">
                            Drag with one finger to move the furniture around your space.
                          </p>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-3">
                          <h4 className="text-sm font-medium mb-2 flex items-center">
                            <RotateCcw className="h-4 w-4 mr-1" />
                            Rotate
                          </h4>
                          <p className="text-xs text-gray-600">
                            Use two fingers to change the orientation.
                          </p>
                        </div>

                        <div className="bg-gray-100 rounded-lg p-3">
                          <h4 className="text-sm font-medium mb-2 flex items-center">
                            <ZoomIn className="h-4 w-4 mr-1" />
                            Resize
                          </h4>
                          <p className="text-xs text-gray-600">
                            Pinch with two fingers to scale the furniture.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-2 mt-4">
                        <Button className="flex-1 bg-rose-600 hover:bg-rose-700">
                          <Camera className="mr-2 h-4 w-4" />
                          Take Photo
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Share2 className="mr-2 h-4 w-4" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Button variant="outline" className="w-full" size="sm">
                <Info className="mr-2 h-4 w-4" />
                AR Troubleshooting Guide
              </Button>
            </div>
          </div>

          {/* Right Column - AR Preview */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-lg overflow-hidden relative h-[600px]">
              {activeTab === "select" ? (
                <div className="flex items-center justify-center h-full bg-gray-100">
                  <div className="text-center p-8">
                    <Smartphone className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">Select a Furniture Piece</h3>
                    <p className="text-gray-600">Choose from our catalog to visualize in AR.</p>
                  </div>
                </div>
              ) : activeTab === "scan" && isScanning ? (
                <div className="relative h-full">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-70"
                    style={{ backgroundImage: "url('/placeholder.svg?height=600&width=800')" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full border-4 border-rose-600 border-t-transparent animate-spin mx-auto mb-4" />
                      <h3 className="text-xl font-medium text-white mb-2">Scanning Environment</h3>
                      <p className="text-white/80">Move your device slowly to capture the space</p>
                    </div>
                  </div>
                </div>
              ) : activeTab === "place" ? (
                // Use the model-viewer element for real AR experience
                <model-viewer
                  src={
                    selectedFurniture && furnitureModels[selectedFurniture]
                      ? furnitureModels[selectedFurniture]
                      : "/placeholder.glb"
                  }
                  alt="3D Furniture Model"
                  ar
                  ar-modes="scene-viewer webxr quick-look"
                  camera-controls
                  auto-rotate
                  style={{ width: "100%", height: "100%" }}
                ></model-viewer>
              ) : (
                <div className="flex items-center justify-center h-full bg-gray-100">
                  <div className="text-center p-8">
                    <Camera className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">Ready to Scan</h3>
                    <p className="text-gray-600">
                      Click &quot;Start Scanning&quot; to begin the AR experience.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
