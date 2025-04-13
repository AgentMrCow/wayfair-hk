import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Interior Designer",
      content:
        "The AI furniture generator has revolutionized how I present concepts to clients. Being able to quickly generate and visualize custom pieces in their actual space has dramatically improved client satisfaction.",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Homeowner",
      content:
        "I was struggling to find the perfect dining table for my awkwardly shaped room. With the AI generator, I described exactly what I needed and could see how it fit in my space using AR. Absolutely game-changing!",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Apartment Dweller",
      content:
        "Living in a small apartment, I need furniture that maximizes space. Being able to design custom pieces and see them in my apartment before buying has saved me from so many purchasing mistakes.",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">What Our Users Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
