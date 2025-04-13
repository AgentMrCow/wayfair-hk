"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  Filter,
  Heart,
  Eye,
  Smartphone,
  Download,
  Share2,
  ChevronDown,
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Image from "next/image"

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [selectedDesign, setSelectedDesign] = useState<number | null>(null)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const designs = [
    {
      id: 1,
      title: "Modern Minimalist Sofa",
      category: "sofa",
      style: "modern",
      description:
        "Clean lines and sustainable materials create this sleek, contemporary sofa.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 243,
      views: 1.2,
    },
    {
      id: 2,
      title: "Vintage-Inspired Coffee Table",
      category: "table",
      style: "vintage",
      description:
        "Mid-century design meets modern functionality with hidden storage compartments.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 187,
      views: 0.9,
    },
    {
      id: 3,
      title: "Scandinavian Dining Set",
      category: "dining",
      style: "scandinavian",
      description:
        "Light wood tones and ergonomic design for comfortable, stylish dining.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 312,
      views: 1.5,
    },
    {
      id: 4,
      title: "Industrial Bookshelf",
      category: "storage",
      style: "industrial",
      description:
        "Metal frame with reclaimed wood shelves for a rugged, functional storage solution.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 156,
      views: 0.8,
    },
    {
      id: 5,
      title: "Bohemian Accent Chair",
      category: "chair",
      style: "bohemian",
      description:
        "Textured fabrics and organic shapes create a cozy, eclectic seating option.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 278,
      views: 1.3,
    },
    {
      id: 6,
      title: "Contemporary Bed Frame",
      category: "bedroom",
      style: "contemporary",
      description:
        "Sleek platform bed with integrated lighting and storage solutions.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 201,
      views: 1.0,
    },
    {
      id: 7,
      title: "Rustic Dining Table",
      category: "dining",
      style: "rustic",
      description:
        "Solid wood construction with natural edge detailing for a warm, inviting dining space.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 189,
      views: 0.9,
    },
    {
      id: 8,
      title: "Minimalist Desk",
      category: "office",
      style: "minimalist",
      description:
        "Clean, functional workspace with hidden cable management and storage.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 224,
      views: 1.1,
    },
    {
      id: 9,
      title: "Art Deco Bar Cart",
      category: "accent",
      style: "art deco",
      description:
        "Glamorous gold-toned metal with glass shelves for sophisticated entertaining.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 167,
      views: 0.8,
    },
  ]

  const filteredDesigns = designs.filter((design) => {
    if (activeTab !== "all" && design.category !== activeTab) return false
    if (
      searchQuery &&
      !design.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false
    return true
  })

  const openDesignDetail = (id: number) => {
    setSelectedDesign(id)
  }

  const closeDesignDetail = () => {
    setSelectedDesign(null)
  }

  const selectedDesignData = designs.find((design) => design.id === selectedDesign)

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Design Gallery</h1>
          <p className="text-gray-600 mt-2">
            Explore AI-generated furniture designs for inspiration
          </p>
        </div>
        <Button className="bg-rose-600 hover:bg-rose-700">
          Create Your Own Design
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm border p-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search designs..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex gap-2"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <Filter className="h-4 w-4" />
              Filters
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  filtersOpen ? "rotate-180" : ""
                }`}
              />
            </Button>
            <Select defaultValue="newest">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Expandable Filters */}
        {filtersOpen && (
          <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h3 className="font-medium mb-2">Style</h3>
              <div className="space-y-2">
                {[
                  "Modern",
                  "Vintage",
                  "Scandinavian",
                  "Industrial",
                  "Bohemian",
                  "Rustic",
                ].map((style) => (
                  <div key={style} className="flex items-center">
                    <Checkbox id={`style-${style}`} />
                    <Label htmlFor={`style-${style}`} className="ml-2 text-sm">
                      {style}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Room</h3>
              <div className="space-y-2">
                {[
                  "Living Room",
                  "Bedroom",
                  "Dining Room",
                  "Office",
                  "Kitchen",
                  "Outdoor",
                ].map((room) => (
                  <div key={room} className="flex items-center">
                    <Checkbox id={`room-${room}`} />
                    <Label htmlFor={`room-${room}`} className="ml-2 text-sm">
                      {room}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Material</h3>
              <div className="space-y-2">
                {[
                  "Wood",
                  "Metal",
                  "Glass",
                  "Fabric",
                  "Leather",
                  "Plastic",
                ].map((material) => (
                  <div key={material} className="flex items-center">
                    <Checkbox id={`material-${material}`} />
                    <Label htmlFor={`material-${material}`} className="ml-2 text-sm">
                      {material}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "bg-black",
                  "bg-white border",
                  "bg-gray-500",
                  "bg-rose-600",
                  "bg-blue-600",
                  "bg-green-600",
                  "bg-yellow-500",
                  "bg-purple-600",
                  "bg-orange-500",
                ].map((color) => (
                  <div
                    key={color}
                    className={`w-8 h-8 rounded-full cursor-pointer ${color}`}
                  />
                ))}
              </div>
            </div>
            <div className="md:col-span-4 flex justify-end gap-2">
              <Button variant="outline" size="sm">
                Clear All
              </Button>
              <Button size="sm" className="bg-rose-600 hover:bg-rose-700">
                Apply Filters
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Category Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="all" className="flex-shrink-0">
            All Designs
          </TabsTrigger>
          <TabsTrigger value="sofa" className="flex-shrink-0">
            Sofas
          </TabsTrigger>
          <TabsTrigger value="table" className="flex-shrink-0">
            Tables
          </TabsTrigger>
          <TabsTrigger value="chair" className="flex-shrink-0">
            Chairs
          </TabsTrigger>
          <TabsTrigger value="storage" className="flex-shrink-0">
            Storage
          </TabsTrigger>
          <TabsTrigger value="bedroom" className="flex-shrink-0">
            Bedroom
          </TabsTrigger>
          <TabsTrigger value="dining" className="flex-shrink-0">
            Dining
          </TabsTrigger>
          <TabsTrigger value="office" className="flex-shrink-0">
            Office
          </TabsTrigger>
          <TabsTrigger value="accent" className="flex-shrink-0">
            Accent
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Design Grid */}
      {filteredDesigns.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design) => (
            <Card
              key={design.id}
              className="overflow-hidden group cursor-pointer"
              onClick={() => openDesignDetail(design.id)}
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={design.image || "/placeholder.svg"}
                  alt={design.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-4">
                    <Button size="sm" variant="secondary" className="gap-1">
                      <Eye className="h-4 w-4" />
                      View
                    </Button>
                    <Button size="sm" variant="secondary" className="gap-1">
                      <Heart className="h-4 w-4" />
                      Save
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-3 right-3 bg-white text-black font-normal">
                  {design.style}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{design.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {design.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Heart className="h-4 w-4 mr-1" />
                  <span className="mr-4">{design.likes}</span>
                  <Eye className="h-4 w-4 mr-1" />
                  <span>{design.views}k</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <Search className="h-12 w-12 mx-auto text-gray-300 mb-4" />
          <h3 className="text-xl font-medium mb-2">No designs found</h3>
          <p className="text-gray-600 mb-6">
            Try adjusting your search or filters to find what you&apos;re looking for.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery("")
              setActiveTab("all")
            }}
          >
            Clear Filters
          </Button>
        </div>
      )}

      {/* Design Detail Dialog */}
      <Dialog
        open={selectedDesign !== null}
        onOpenChange={(open) => !open && closeDesignDetail()}
      >
        {selectedDesignData && (
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedDesignData.title}</DialogTitle>
              <DialogDescription>
                {selectedDesignData.category} &bull; {selectedDesignData.style}
              </DialogDescription>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-100 rounded-lg overflow-hidden relative h-full">
                <Image
                  src={selectedDesignData.image || "/placeholder.svg"}
                  alt={selectedDesignData.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-6">
                  {selectedDesignData.description}
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Style</h4>
                    <p className="text-gray-600 capitalize">
                      {selectedDesignData.style}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Materials</h4>
                    <p className="text-gray-600">Wood, Fabric, Metal</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Dimensions</h4>
                    <p className="text-gray-600">
                      W: 78&quot; × D: 36&quot; × H: 32&quot;
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700">
                    <Smartphone className="mr-2 h-4 w-4" />
                    View in AR
                  </Button>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline">
                      <Heart className="mr-2 h-4 w-4" />
                      Save Design
                    </Button>
                    <Button variant="outline">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </div>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Load More Button */}
      {filteredDesigns.length > 0 && (
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Designs
          </Button>
        </div>
      )}
    </main>
  )
}
