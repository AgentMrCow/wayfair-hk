"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Sparkles, Smartphone, User } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeSheet = () => {
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-rose-600">Wayfair</span>
            <span className="ml-1 text-sm font-medium text-gray-600">AR & AI</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/design" className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center">
            <Sparkles className="mr-1 h-4 w-4" />
            Design with AI
          </Link>
          <Link
            href="/ar-experience"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 flex items-center"
          >
            <Smartphone className="mr-1 h-4 w-4" />
            Experience in AR
          </Link>
          <Link href="/gallery" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Gallery
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            How It Works
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/account" className="hidden md:flex">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          <Link href="/design" className="hidden md:flex">
            <Button className="bg-rose-600 hover:bg-rose-700">Get Started</Button>
          </Link>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b py-4">
                  <Link href="/" className="flex items-center" onClick={closeSheet}>
                    <span className="text-2xl font-bold text-rose-600">Wayfair</span>
                    <span className="ml-1 text-sm font-medium text-gray-600">AR & AI</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={closeSheet}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>

                <nav className="flex flex-col gap-4 py-6">
                  <Link
                    href="/design"
                    className="flex items-center px-2 py-3 text-lg font-medium hover:bg-gray-100 rounded-md"
                    onClick={closeSheet}
                  >
                    <Sparkles className="mr-3 h-5 w-5 text-rose-600" />
                    Design with AI
                  </Link>
                  <Link
                    href="/ar-experience"
                    className="flex items-center px-2 py-3 text-lg font-medium hover:bg-gray-100 rounded-md"
                    onClick={closeSheet}
                  >
                    <Smartphone className="mr-3 h-5 w-5 text-rose-600" />
                    Experience in AR
                  </Link>
                  <Link
                    href="/gallery"
                    className="flex items-center px-2 py-3 text-lg font-medium hover:bg-gray-100 rounded-md"
                    onClick={closeSheet}
                  >
                    Gallery
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="flex items-center px-2 py-3 text-lg font-medium hover:bg-gray-100 rounded-md"
                    onClick={closeSheet}
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/account"
                    className="flex items-center px-2 py-3 text-lg font-medium hover:bg-gray-100 rounded-md"
                    onClick={closeSheet}
                  >
                    <User className="mr-3 h-5 w-5 text-rose-600" />
                    Account
                  </Link>
                </nav>

                <div className="mt-auto border-t py-6">
                  <Button className="w-full bg-rose-600 hover:bg-rose-700" onClick={closeSheet} asChild>
                    <Link href="/design">Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
