"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const data = [
  { month: "Jan", price: 15000 },
  { month: "Feb", price: 15200 },
  { month: "Mar", price: 15400 },
  { month: "Apr", price: 15100 },
  { month: "May", price: 15600 },
  { month: "Jun", price: 15800 },
]

interface MarketInsightsProps {
  carDetails: {
    make: string
    model: string
  }
}

export function MarketInsights({ carDetails }: MarketInsightsProps) {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle>Market Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-400">
            Price trend for {carDetails.make} {carDetails.model} over the last 6 months
          </p>
          <div>
            <h4 className="font-medium">Market Analysis</h4>
            <p className="text-sm text-gray-400">
              Based on current market conditions, it's a good time to sell your {carDetails.make} {carDetails.model}.
              Prices have shown a steady increase over the past few months.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

