"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

interface PredictionFormProps {
  onPrediction: (result: any) => void
}

export function PredictionForm({ onPrediction }: PredictionFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    condition: "",
    vin: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate API call
    setTimeout(() => {
      onPrediction({
        predictedPrice: Math.floor(Math.random() * 50000) + 10000,
        confidence: Math.floor(Math.random() * 20) + 80,
        carDetails: formData,
        category: formData.make === "BMW" ? "luxury" : "mid-range",
      })
    }, 1500)
  }

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Progress value={(step / 3) * 100} className="w-full" />

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="make">Make</Label>
              <Select value={formData.make} onValueChange={(value) => handleChange("make", value)}>
                <SelectTrigger id="make">
                  <SelectValue placeholder="Select make" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Toyota">Toyota</SelectItem>
                  <SelectItem value="Honda">Honda</SelectItem>
                  <SelectItem value="BMW">BMW</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="model">Model</Label>
              <Select value={formData.model} onValueChange={(value) => handleChange("model", value)}>
                <SelectTrigger id="model">
                  <SelectValue placeholder="Select model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Camry">Camry</SelectItem>
                  <SelectItem value="Civic">Civic</SelectItem>
                  <SelectItem value="3 Series">3 Series</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                type="number"
                placeholder="Enter year"
                value={formData.year}
                onChange={(e) => handleChange("year", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="mileage">Mileage</Label>
              <Input
                id="mileage"
                type="number"
                placeholder="Enter mileage"
                value={formData.mileage}
                onChange={(e) => handleChange("mileage", e.target.value)}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="condition">Condition</Label>
              <Select value={formData.condition} onValueChange={(value) => handleChange("condition", value)}>
                <SelectTrigger id="condition">
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Excellent">Excellent</SelectItem>
                  <SelectItem value="Good">Good</SelectItem>
                  <SelectItem value="Fair">Fair</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="vin">VIN (Optional)</Label>
              <Input
                id="vin"
                placeholder="Enter VIN"
                value={formData.vin}
                onChange={(e) => handleChange("vin", e.target.value)}
              />
            </div>
          </div>
        )}

        <div className="flex justify-between">
          {step > 1 && (
            <Button type="button" onClick={prevStep} variant="outline">
              Previous
            </Button>
          )}
          {step < 3 ? (
            <Button type="button" onClick={nextStep}>
              Next
            </Button>
          ) : (
            <Button type="submit">Predict Price</Button>
          )}
        </div>
      </form>
    </motion.div>
  )
}

