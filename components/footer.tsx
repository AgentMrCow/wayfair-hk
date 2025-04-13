import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-rose-500">Wayfair</span>
              <span className="ml-1 text-sm font-medium text-gray-400">AR & AI</span>
            </Link>
            <p className="mt-4 text-gray-400">
              Reimagine your space with AI-generated furniture designs and AR visualization.
            </p>
            <div className="flex mt-6 space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/design" className="text-gray-400 hover:text-white">
                    AI Furniture Generator
                  </Link>
                </li>
                <li>
                  <Link href="/ar-experience" className="text-gray-400 hover:text-white">
                    AR Visualization
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-white">
                    Design Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="text-gray-400 hover:text-white">
                    How It Works
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and features.</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700 text-white" />
              <Button size="icon" className="bg-rose-600 hover:bg-rose-700">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Wayfair AR & AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="text-gray-400 hover:text-white text-sm">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
