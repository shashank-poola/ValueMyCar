'use client'

import { Card, CardContent } from "@/components/ui/card"
import { GradientButton } from "./gradient-button"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useState } from "react"
import { TestimonialForm } from "./testimonial-form"

interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  date: string;
  platform: string;
}

const initialTestimonials: Testimonial[] = [
  {
    name: "Alexander Sievers",
    rating: 5,
    comment: "We were looking for a new car and did not get a good offer from the dealers for our used car. The offer from Value My Car was much higher than from the dealers.",
    date: "Jul 20, 2022",
    platform: "GOOGLE"
  },
  {
    name: "Ulf Moeritz",
    rating: 5,
    comment: "It was a very good conversation and a very pleasant atmosphere in the Hamburg branch. The contact person Anis was very competent and professional.",
    date: "Jun 07, 2023",
    platform: "GOOGLE"
  },
  {
    name: "Josef Böhmer",
    rating: 5,
    comment: "After an appointment, my vehicle was expertly appraised by Mr. Mario Schober and then made me a fair price for my vehicle.",
    date: "Apr 14, 2023",
    platform: "GOOGLE"
  },
]

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showForm, setShowForm] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNewTestimonial = (testimonial: Testimonial) => {
    setTestimonials([testimonial, ...testimonials])
    setShowForm(false)
  }

  return (
    <section className="bg-black py-16">
      <div className="container px-4">
        <div className="mb-12 space-y-4">
          <span className="text-sm font-medium uppercase tracking-wider text-red-500">
            WE HAPPILY SERVED MORE THAN 5000 CUSTOMERS
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Real customers can tell you more than we can.
          </h2>
          <p className="text-gray-400">
            We always strive to deliver the most customer-centric experience possible.
          </p>
        </div>

        {showForm && (
          <div className="mb-12 max-w-md mx-auto">
            <TestimonialForm onSubmit={handleNewTestimonial} />
          </div>
        )}

        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`w-full flex-none transition-opacity duration-300 md:w-1/3 bg-gray-800 border-gray-700 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-300">{testimonial.comment}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.date}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 bg-gray-700 rounded-full"></div>
                      <span className="text-sm font-medium text-white">{testimonial.platform}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <GradientButton
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </GradientButton>
            <GradientButton
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </GradientButton>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <GradientButton onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Close Form' : 'Share Your Experience'}
          </GradientButton>
        </div>
      </div>
    </section>
  )
}

