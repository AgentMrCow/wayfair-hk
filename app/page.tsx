import Link from "next/link"
import { ArrowRight, Sparkles, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import FeaturedDesigns from "@/components/featured-designs"
import HowItWorks from "@/components/how-it-works"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Generate Your Dream Furniture with AI & AR
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Customize, Create, and Visualize Your Perfect Home Pieces in Augmented Reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
                <Link href="/design">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Design with AI
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white bg-white/10">
                <Link href="/ar-experience">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Experience in AR
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Reimagine Your Space with AI & AR Technology
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Design</h3>
              <p className="text-gray-600">
                Describe your dream furniture and watch as our AI brings your vision to life with stunning, customizable
                designs.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AR Visualization</h3>
              <p className="text-gray-600">
                See exactly how your new furniture will look in your space before you buy, using our advanced AR
                technology.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Adjustments</h3>
              <p className="text-gray-600">
                Tweak colors, materials, and dimensions to perfectly match your style and space requirements.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
              <Link href="/design">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Designs */}
      <FeaturedDesigns />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of homeowners who have discovered the perfect furniture for their homes using our AI and AR
            technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
              <Link href="/design">
                <Sparkles className="mr-2 h-5 w-5" />
                Start Designing
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/account/signup">Create Free Account</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
