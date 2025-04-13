import { CheckCircle2, Sparkles, Smartphone, Sliders } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      icon: <Sparkles className="h-8 w-8 text-rose-600" />,
      title: "Describe Your Vision",
      description:
        "Use natural language to describe your ideal furniture piece, including style, materials, and purpose.",
    },
    {
      icon: <Sliders className="h-8 w-8 text-rose-600" />,
      title: "Refine Your Design",
      description:
        "Adjust colors, dimensions, and materials to perfectly match your preferences and space requirements.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-rose-600" />,
      title: "Visualize in Your Space",
      description:
        "Use our AR technology to see exactly how your new furniture will look in your home before purchasing.",
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-rose-600" />,
      title: "Save & Share",
      description: "Save your favorite designs to your account and share them with friends and family for feedback.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-rose-100 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-rose-200 -z-10" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
