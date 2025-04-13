import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Heart } from "lucide-react"

export default function FeaturedDesigns() {
  const designs = [
    {
      id: 1,
      title: "Modern Minimalist Sofa",
      description: "Clean lines and sustainable materials create this sleek, contemporary sofa.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 243,
      views: 1.2,
    },
    {
      id: 2,
      title: "Vintage-Inspired Coffee Table",
      description: "Mid-century design meets modern functionality with hidden storage compartments.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 187,
      views: 0.9,
    },
    {
      id: 3,
      title: "Scandinavian Dining Set",
      description: "Light wood tones and ergonomic design for comfortable, stylish dining.",
      image: "/placeholder.svg?height=400&width=600",
      likes: 312,
      views: 1.5,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured AI-Generated Designs</h2>
          <Button asChild variant="outline">
            <Link href="/gallery">View All</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <Card key={design.id} className="overflow-hidden group">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={design.image || "/placeholder.svg"}
                  alt={design.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-4">
                    <Button size="sm" variant="secondary" className="gap-1">
                      <Eye className="h-4 w-4" />
                      View in AR
                    </Button>
                    <Button size="sm" variant="secondary" className="gap-1">
                      <Heart className="h-4 w-4" />
                      Save
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{design.title}</h3>
                <p className="text-gray-600 mb-4">{design.description}</p>
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
      </div>
    </section>
  )
}
