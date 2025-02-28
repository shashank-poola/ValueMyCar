"use client"

import { GradientButton } from "./gradient-button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import type React from "react" // Added import for React

export function HeroSection() {
  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchTerm = new FormData(e.currentTarget).get("search")
    window.open(`https://www.google.com/search?q=${searchTerm}+cars`, "_blank")
  }

  return (
    <section className="relative bg-black py-12 md:py-16">
      <div className="container px-4">
        <div className="grid gap-8 lg:grid-cols-12 items-center">
          <motion.div
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Fair Prices
                <br />
                Smart Choices
              </h1>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg">
                No hassle. It's fast, simple and totally transparent. Choose from 5,000 thoroughly inspected cars in
                stock.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-base sm:text-lg text-white">I want to</span>
                <GradientButton
                  onClick={() => window.open("https://kzmq32usk026vhfh8k0o.lite.vusercontent.net/", "_blank")}
                >
                  Predict
                </GradientButton>
              </div>

              <form onSubmit={handleSearch} className="relative w-full max-w-md">
                <Input
                  name="search"
                  placeholder="Type make, model, or any keyword"
                  className="pl-10 pr-4 py-2 sm:py-3 md:py-4 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </form>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 relative h-[300px] sm:h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="https://www.wallpaperflare.com/static/773/559/789/dark-red-red-cars-car-wallpaper.jpg"
              alt="Featured Car"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

