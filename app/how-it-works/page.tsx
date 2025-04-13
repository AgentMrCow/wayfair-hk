import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Sparkles, Smartphone, Sliders, CheckCircle2, ArrowRight, MessageSquare, Lightbulb, Zap } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export default function HowItWorksPage() {
    return (
        <main className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">How Wayfair AR & AI Works</h1>
                <p className="text-xl text-gray-600">
                    Discover how our cutting-edge technology transforms the way you design and visualize furniture for your home.
                </p>
            </div>

            {/* Process Overview */}
            <div className="relative mb-24">
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 -translate-x-1/2 hidden md:block" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {/* Step 1 */}
                    <div className="md:text-right md:pr-16 relative">
                        <div className="hidden md:block absolute top-0 right-0 w-8 h-8 rounded-full bg-rose-600 -translate-y-1/2 translate-x-1/2 z-10" />
                        <span className="inline-block text-sm font-bold text-rose-600 mb-2">STEP 1</span>
                        <h2 className="text-2xl font-bold mb-3">Describe Your Vision</h2>
                        <p className="text-gray-600">
                            Use natural language to describe your ideal furniture piece. Include details about style, materials,
                            colors, and functionality to help our AI understand your vision.
                        </p>
                    </div>
                    <div className="md:hidden" /> {/* Empty div for mobile layout */}
                    {/* Step 2 */}
                    <div className="md:hidden" /> {/* Empty div for mobile layout */}
                    <div className="md:pl-16 relative">
                        <div className="hidden md:block absolute top-0 left-0 w-8 h-8 rounded-full bg-rose-600 -translate-y-1/2 -translate-x-1/2 z-10" />
                        <span className="inline-block text-sm font-bold text-rose-600 mb-2">STEP 2</span>
                        <h2 className="text-2xl font-bold mb-3">AI Generates Designs</h2>
                        <p className="text-gray-600">
                            Our advanced AI analyzes your description and generates multiple furniture design options that match your
                            requirements, drawing from thousands of design principles and trends.
                        </p>
                    </div>
                    {/* Step 3 */}
                    <div className="md:text-right md:pr-16 relative">
                        <div className="hidden md:block absolute top-0 right-0 w-8 h-8 rounded-full bg-rose-600 -translate-y-1/2 translate-x-1/2 z-10" />
                        <span className="inline-block text-sm font-bold text-rose-600 mb-2">STEP 3</span>
                        <h2 className="text-2xl font-bold mb-3">Refine Your Design</h2>
                        <p className="text-gray-600">
                            Customize your favorite design by adjusting colors, materials, dimensions, and other details until it
                            perfectly matches your vision and space requirements.
                        </p>
                    </div>
                    <div className="md:hidden" /> {/* Empty div for mobile layout */}
                    {/* Step 4 */}
                    <div className="md:hidden" /> {/* Empty div for mobile layout */}
                    <div className="md:pl-16 relative">
                        <div className="hidden md:block absolute top-0 left-0 w-8 h-8 rounded-full bg-rose-600 -translate-y-1/2 -translate-x-1/2 z-10" />
                        <span className="inline-block text-sm font-bold text-rose-600 mb-2">STEP 4</span>
                        <h2 className="text-2xl font-bold mb-3">Visualize in AR</h2>
                        <p className="text-gray-600">
                            Use our AR technology to see exactly how your new furniture will look in your actual space. Walk around
                            it, view it from different angles, and ensure it fits perfectly.
                        </p>
                    </div>
                    {/* Step 5 */}
                    <div className="md:text-right md:pr-16 relative">
                        <div className="hidden md:block absolute top-0 right-0 w-8 h-8 rounded-full bg-rose-600 -translate-y-1/2 translate-x-1/2 z-10" />
                        <span className="inline-block text-sm font-bold text-rose-600 mb-2">STEP 5</span>
                        <h2 className="text-2xl font-bold mb-3">Save & Share</h2>
                        <p className="text-gray-600">
                            Save your designs to your account, share them with friends and family for feedback, or export them for
                            future reference or professional manufacturing.
                        </p>
                    </div>
                    <div className="md:hidden" /> {/* Empty div for mobile layout */}
                </div>
            </div>

            {/* Technology Tabs */}
            <div className="mb-24">
                <h2 className="text-3xl font-bold text-center mb-12">Our Technology</h2>

                <Tabs defaultValue="ai" className="max-w-4xl mx-auto">
                    <TabsList className="w-full grid grid-cols-2 mb-8">
                        <TabsTrigger value="ai" className="text-lg py-3">
                            <Sparkles className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                            AI Design Technology
                        </TabsTrigger>
                        <TabsTrigger value="ar" className="text-lg py-3">
                            <Smartphone className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                            AR Visualization
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="ai" className="p-6 bg-gray-50 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">How Our AI Works</h3>
                                <p className="text-gray-600 mb-6">
                                    Our AI furniture generator uses advanced machine learning models trained on millions of furniture
                                    designs, interior design principles, and material science data.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex">
                                        <Lightbulb className="h-6 w-6 text-rose-600 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium">Natural Language Processing</h4>
                                            <p className="text-sm text-gray-600">
                                                Understands your detailed descriptions and converts them into design parameters
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <Sparkles className="h-6 w-6 text-rose-600 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium">Generative Design</h4>
                                            <p className="text-sm text-gray-600">
                                                Creates multiple unique designs based on your specifications
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <Sliders className="h-6 w-6 text-rose-600 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium">Parametric Customization</h4>
                                            <p className="text-sm text-gray-600">Allows precise adjustments to every aspect of the design</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                                <Image

                                    src="/placeholder.svg?height=400&width=600"

                                    alt="AI Design Technology"

                                    width={600}

                                    height={400}

                                    className="w-full h-64 object-cover"

                                />
                                <div className="p-6">
                                    <h4 className="font-medium mb-2">AI-Generated Designs</h4>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Our AI can generate thousands of unique furniture designs based on your specifications, ensuring you
                                        find exactly what you&apos;re looking for.
                                    </p>
                                    <Button asChild size="sm" className="bg-rose-600 hover:bg-rose-700">
                                        <Link href="/design">
                                            Try AI Designer
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="ar" className="p-6 bg-gray-50 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4">AR Visualization Technology</h3>
                                <p className="text-gray-600 mb-6">
                                    Our augmented reality technology allows you to see virtual furniture in your real space, helping you
                                    make confident decisions about size, style, and placement.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex">
                                        <Smartphone className="h-6 w-6 text-rose-600 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium">Spatial Mapping</h4>
                                            <p className="text-sm text-gray-600">
                                                Creates a digital map of your space for accurate furniture placement
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <Zap className="h-6 w-6 text-rose-600 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium">Real-time Rendering</h4>
                                            <p className="text-sm text-gray-600">
                                                Displays high-quality 3D models with realistic lighting and shadows
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <MessageSquare className="h-6 w-6 text-rose-600 mr-3 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-medium">Interactive Experience</h4>
                                            <p className="text-sm text-gray-600">
                                                Allows you to move, rotate, and resize furniture in your space
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                                <Image

                                    src="/placeholder.svg?height=400&width=600"

                                    alt="AR Visualization Technology"

                                    width={600}

                                    height={400}

                                    className="w-full h-64 object-cover"

                                />
                                <div className="p-6">
                                    <h4 className="font-medium mb-2">See It In Your Space</h4>
                                    <p className="text-sm text-gray-600 mb-4">
                                        Our AR technology works on most modern smartphones and tablets, with no special equipment required.
                                    </p>
                                    <Button asChild size="sm" className="bg-rose-600 hover:bg-rose-700">
                                        <Link href="/ar-experience">
                                            Try AR Experience
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>

            {/* Use Cases */}
            <div className="mb-24">
                <h2 className="text-3xl font-bold text-center mb-12">Perfect For</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card>
                        <CardContent className="p-8">
                            <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                                <Sparkles className="h-8 w-8 text-rose-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Homeowners</h3>
                            <p className="text-gray-600">
                                Find the perfect furniture for your space without the guesswork. See exactly how pieces will look and
                                fit before you buy.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-8">
                            <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                                <Smartphone className="h-8 w-8 text-rose-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Interior Designers</h3>
                            <p className="text-gray-600">
                                Present concepts to clients with stunning visualizations. Generate custom furniture designs that
                                perfectly match your vision.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-8">
                            <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                                <CheckCircle2 className="h-8 w-8 text-rose-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Small Space Dwellers</h3>
                            <p className="text-gray-600">
                                Design custom furniture that maximizes your limited space. Ensure perfect fit with AR visualization
                                before purchasing.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-24">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        <AccordionItem value="item-1" className="border rounded-lg px-6">
                            <AccordionTrigger className="text-lg font-medium py-4">
                                What devices support the AR experience?
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 text-gray-600">
                                Our AR experience works on most modern smartphones and tablets. For iOS, you&apos;ll need an iPhone 6s or
                                later running iOS 12+. For Android, you&apos;ll need a device that supports ARCore (Android 7.0+). For the
                                best experience, we recommend using a device with a good camera and processor.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border rounded-lg px-6">
                            <AccordionTrigger className="text-lg font-medium py-4">
                                How accurate are the AI-generated designs?
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 text-gray-600">
                                Our AI has been trained on millions of furniture designs and interior design principles, allowing it to
                                generate highly accurate and realistic designs. The more specific your description, the more accurate
                                the results will be. You can also refine any design to match your exact specifications.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border rounded-lg px-6">
                            <AccordionTrigger className="text-lg font-medium py-4">Can I save and share my designs?</AccordionTrigger>
                            <AccordionContent className="pb-4 text-gray-600">
                                Yes! You can save all your designs to your account and access them anytime. You can also share them via
                                email, social media, or generate a unique link. This is perfect for getting feedback from friends,
                                family, or your interior designer.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="border rounded-lg px-6">
                            <AccordionTrigger className="text-lg font-medium py-4">
                                How do I ensure the furniture will fit in my space?
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 text-gray-600">
                                Our AR technology accurately maps your space and displays furniture at its actual size. You can also
                                adjust dimensions in the customization panel to ensure a perfect fit. The AR view allows you to walk
                                around the virtual furniture and see it from all angles, giving you a clear idea of how it will fit.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="border rounded-lg px-6">
                            <AccordionTrigger className="text-lg font-medium py-4">
                                Can I customize the materials and colors?
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 text-gray-600">
                                After generating a design, you can customize virtually every aspect, including materials, colors,
                                dimensions, and finishes. Our system offers a wide range of options to ensure your furniture matches
                                your existing decor and personal style preferences.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-50 rounded-lg p-8 md:p-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                    Start designing your perfect furniture with AI and visualize it in your space with AR.
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
        </main>
    )
}
