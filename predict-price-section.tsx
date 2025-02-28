import { Card, CardContent } from "@/components/ui/card"
import { GradientButton } from "./gradient-button"
import { motion } from "framer-motion"

const steps = [
  {
    number: 1,
    title: "EASY FORM",
    description: "Fill it out, and get a realistic price estimate immediately.",
    gradient: "from-yellow-400 to-orange-400",
  },
  {
    number: 2,
    title: "LOCAL MARKET INSIGHTS",
    description:
      "Our system analyzes multiple factors, including market trends, vehicle history, and comparable listings, to provide you with a realistic price range.",
    gradient: "from-green-400 to-teal-400",
  },
  {
    number: 3,
    title: "TRANSPARENT PROCESS",
    description: "You get the price range estimation after we collect all the car's data.",
    gradient: "from-blue-400 to-indigo-400",
  },
  {
    number: 4,
    title: "COMPETITIVE PRICES",
    description:
      "We benchmark your car's estimated price against current market trends to ensure you receive the best possible offer.",
    gradient: "from-purple-400 to-pink-400",
  },
  {
    number: 5,
    title: "HASSLE-FREE TRANSACTION",
    description:
      "Once you decide to sell, connect with trusted buyers. Skip the hassle of negotiations and enjoy a smooth selling experience.",
    gradient: "from-red-400 to-rose-400",
  },
]

export function PredictPriceSection() {
  return (
    <section className="bg-black py-16">
      <div className="container px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-medium uppercase tracking-wider text-red-500">WHAT TO EXPECT</span>
          <h2 className="text-3xl font-bold mt-2 text-white">Ready to price your car?</h2>
        </motion.div>

        <div className="flex flex-nowrap gap-6 overflow-x-auto pb-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="flex-none w-72 bg-gray-800 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
                style={{
                  borderImage: `linear-gradient(to right, ${step.gradient}) 1`,
                  borderWidth: "2px",
                  borderStyle: "solid",
                }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-orange-400">
                    <span className="text-white text-xl font-bold">{step.number}</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm text-white">{step.title}</h3>
                    <p className="text-sm text-gray-400">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <GradientButton
            onClick={() => (window.location.href = "https://kzmq32usk026vhfh8k0o.lite.vusercontent.net/")}
          >
            Predict Your Car Price
          </GradientButton>
        </motion.div>
      </div>
    </section>
  )
}

