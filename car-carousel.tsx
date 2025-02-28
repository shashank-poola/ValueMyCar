"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GradientButton } from "./gradient-button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import "tailwind-scrollbar-hide"

const carData = [
  {
    id: 1,
    name: "Used Maruti Suzuki Celerio",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/df/2017_Suzuki_Celerio_SZ4_Automatic_1.0_Front.jpg",
    mileage: "60,572 km",
    fuel: "Petrol",
    location: "Mumbai",
    price: 599000,
    comparisonPrice: 620000,
  },
  {
    id: 2,
    name: "Used BMW 5 Series 520d Sedan",
    image:
      "https://vehicle-images.dealerinspire.com/5d0f-11002413/thumbnails/large/WBA13FK01SCT84638/4f58bdb1817f89fe966ccf7b5862c6af.jpg",
    mileage: "1,26,000 km",
    fuel: "Diesel",
    location: "Hyderabad",
    price: 950000,
    comparisonPrice: 980000,
  },
  {
    id: 3,
    name: "Used Porsche Macan Base [2021-2023]",
    image: "https://media.zigcdn.com/media/model/2023/Feb/911.jpg",
    mileage: "3,500 km",
    fuel: "Petrol",
    location: "Delhi",
    price: 800000,
    comparisonPrice: 920000,
  },
]

export function CarCarousel() {
  const router = useRouter()
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="bg-black py-16">
      <div className="container px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-0">Popular Used Cars for Sale</h2>
          <GradientButton onClick={() => router.push("/cars")}>View More</GradientButton>
        </div>

        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {carData.map((car) => (
              <Card key={car.id} className="flex-none w-[280px] sm:w-[300px] md:w-[320px] bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <div className="relative h-48 mb-4">
                    <Image
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">{car.name}</h3>
                  <div className="mt-2 text-xs sm:text-sm text-gray-400">
                    <p>
                      {car.mileage} | {car.fuel} | {car.location}
                    </p>
                  </div>
                  <p className="mt-2 text-lg sm:text-xl font-bold text-white">₹{car.price.toLocaleString()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

