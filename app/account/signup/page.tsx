"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Smartphone, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function SignupPage() {
    const [activeTab, setActiveTab] = useState("signup")

    return (
        <main className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Left Column - Form */}
                <div className="w-full lg:w-1/2 max-w-md mx-auto">
                    <Card className="border-none shadow-lg">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl">Create Your Account</CardTitle>
                            <CardDescription>
                                Join thousands of designers and homeowners using AI & AR to transform their spaces
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                                <TabsList className="grid grid-cols-2 mb-6">
                                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                                    <TabsTrigger value="login">Log In</TabsTrigger>
                                </TabsList>

                                <TabsContent value="signup">
                                    <form className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">First Name</Label>
                                                <Input id="firstName" placeholder="John" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">Last Name</Label>
                                                <Input id="lastName" placeholder="Doe" />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" placeholder="john.doe@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="password">Password</Label>
                                            <Input id="password" type="password" placeholder="••••••••" />
                                            <p className="text-xs text-gray-500">
                                                Password must be at least 8 characters long with a number and special character
                                            </p>
                                        </div>
                                        <div className="flex items-center space-x-2 pt-2">
                                            <Checkbox id="terms" />
                                            <Label htmlFor="terms" className="text-sm">
                                                I agree to the{" "}
                                                <Link href="/terms" className="text-rose-600 hover:underline">
                                                    Terms of Service
                                                </Link>{" "}
                                                and{" "}
                                                <Link href="/privacy" className="text-rose-600 hover:underline">
                                                    Privacy Policy
                                                </Link>
                                            </Label>
                                        </div>
                                        <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700">
                                            Create Account
                                        </Button>
                                    </form>

                                    <div className="relative my-6">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-200" />
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <Button variant="outline" className="w-full">
                                            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                            Facebook
                                        </Button>
                                        <Button variant="outline" className="w-full">
                                            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                    fill="#4285F4"
                                                />
                                                <path
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                    fill="#34A853"
                                                />
                                                <path
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                    fill="#FBBC05"
                                                />
                                                <path
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                    fill="#EA4335"
                                                />
                                                <path d="M1 1h22v22H1z" fill="none" />
                                            </svg>
                                            Google
                                        </Button>
                                    </div>
                                </TabsContent>

                                <TabsContent value="login">
                                    <form className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="login-email">Email</Label>
                                            <Input id="login-email" type="email" placeholder="john.doe@example.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="login-password">Password</Label>
                                                <Link href="/account/reset-password" className="text-xs text-rose-600 hover:underline">
                                                    Forgot password?
                                                </Link>
                                            </div>
                                            <Input id="login-password" type="password" placeholder="••••••••" />
                                        </div>
                                        <div className="flex items-center space-x-2 pt-2">
                                            <Checkbox id="remember" />
                                            <Label htmlFor="remember" className="text-sm">
                                                Remember me
                                            </Label>
                                        </div>
                                        <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700">
                                            Log In
                                        </Button>
                                    </form>

                                    <div className="relative my-6">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-200" />
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <Button variant="outline" className="w-full">
                                            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                            Facebook
                                        </Button>
                                        <Button variant="outline" className="w-full">
                                            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                <path
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                                    fill="#4285F4"
                                                />
                                                <path
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                                    fill="#34A853"
                                                />
                                                <path
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                                    fill="#FBBC05"
                                                />
                                                <path
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                                    fill="#EA4335"
                                                />
                                                <path d="M1 1h22v22H1z" fill="none" />
                                            </svg>
                                            Google
                                        </Button>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>
                </div>

                {/* Right Column - Benefits */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-3xl font-bold mb-8">Transform Your Space with AI & AR</h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="h-6 w-6 text-rose-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">AI-Powered Design</h3>
                                <p className="text-gray-600">
                                    Describe your dream furniture and watch as our AI brings your vision to life with stunning,
                                    customizable designs tailored to your preferences.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                                <Smartphone className="h-6 w-6 text-rose-600" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">AR Visualization</h3>
                                <p className="text-gray-600">
                                    See exactly how your new furniture will look in your space before you buy, using our advanced AR
                                    technology on your smartphone or tablet.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                                <svg className="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Custom Adjustments</h3>
                                <p className="text-gray-600">
                                    Tweak colors, materials, and dimensions to perfectly match your style and space requirements, ensuring
                                    a perfect fit for your home.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                        <div className="flex items-start">
                            <div className="mr-4">
                                <Image
                                    src="/placeholder.svg?height=60&width=60"
                                    alt="User testimonial"
                                    width={60}
                                    height={60}
                                    objectFit="cover"
                                />
                            </div>
                            <div>
                                <p className="italic text-gray-600 mb-2">
                                    &quot;I was struggling to find the perfect dining table for my awkwardly shaped room. With the AI
                                    generator, I described exactly what I needed and could see how it fit in my space using AR. Absolutely
                                    game-changing!&quot;
                                </p>
                                <p className="font-medium">Michael Chen</p>
                                <p className="text-sm text-gray-500">Homeowner</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Button asChild size="lg" className="bg-rose-600 hover:bg-rose-700">
                            <Link href="/design">
                                Try Without Account
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    )
}
