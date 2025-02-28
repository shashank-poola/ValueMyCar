"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Share2, Download } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface PredictionResultProps {
  result: {
    predictedPrice: number
    confidence: number
    carDetails: {
      make: string
      model: string
      year: string
      mileage: string
      condition: string
    }
  }
}

export function PredictionResult({ result }: PredictionResultProps) {
  const [showFeedback, setShowFeedback] = useState(false)
  const [feedback, setFeedback] = useState("")

  const handleShare = (platform: string) => {
    // Implement sharing logic here
    console.log(`Sharing to ${platform}`)
  }

  const handleDownload = () => {
    // Implement download logic here
    console.log("Downloading report")
  }

  const handleFeedbackSubmit = () => {
    // Implement feedback submission logic here
    console.log("Feedback submitted:", feedback)
    setShowFeedback(false)
  }

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Prediction Result</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-3xl font-bold">${result.predictedPrice.toLocaleString()}</p>
            <p className="text-sm text-gray-400">Confidence: {result.confidence}%</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">Make</p>
                <p>{result.carDetails.make}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Model</p>
                <p>{result.carDetails.model}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Year</p>
                <p>{result.carDetails.year}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Mileage</p>
                <p>{result.carDetails.mileage}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Condition</p>
                <p>{result.carDetails.condition}</p>
              </div>
            </div>
            <div className="flex justify-between">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => handleShare("twitter")}>Twitter</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleShare("whatsapp")}>WhatsApp</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleShare("email")}>Email</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" onClick={handleDownload}>
                <Download className="mr-2 h-4 w-4" />
                Download Report
              </Button>
            </div>
            {!showFeedback ? (
              <Button variant="link" onClick={() => setShowFeedback(true)}>
                Provide Feedback
              </Button>
            ) : (
              <div className="space-y-2">
                <textarea
                  className="w-full p-2 bg-gray-700 rounded"
                  rows={3}
                  placeholder="Your feedback..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                ></textarea>
                <Button onClick={handleFeedbackSubmit}>Submit Feedback</Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

