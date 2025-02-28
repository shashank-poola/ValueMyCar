"use client"

import { BackButton } from "@/components/back-button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const carData = [
  {
    id: 1,
    name: "Used Tata Altroz",
    image: "https://imgd-ct.aeplcdn.com/640X480/vimages/202501/3775504_5218_2_1735904211681.jpg?q=80",
    mileage: "60,572 km",
    fuel: "Petrol",
    location: "Mumbai",
    price: 599000,
    comparisonPrice: 620000,
  },
  {
    id: 2,
    name: "Used BMW 5 Series 520d Sedan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlBltArRwbSdh2Lcj7ydGik2c5gCHdUrk-mg&s",
    mileage: "1,26,000 km",
    fuel: "Diesel",
    location: "Hyderabad",
    price: 950000,
    comparisonPrice: 980000,
  },
  {
    id: 3,
    name: "Used Mahindra",
    image: "https://imgd-ct.aeplcdn.com/300x225/vimages/202501/3775429_78769_1_1735901886939.jpg?q=40",
    mileage: "3,500 km",
    fuel: "Petrol",
    location: "Delhi",
    price: 9500000,
    comparisonPrice: 9800000,
  },
  {
    id: 4,
    name: "Used Maruti Wagon R",
    image: "https://imgd-ct.aeplcdn.com/640X480/vimages/202501/3798713_13836_1737196691742.jpeg?q=80",
    mileage: "60,572 km",
    fuel: "Petrol",
    location: "Mumbai",
    price: 599000,
    comparisonPrice: 620000,
  },
  {
    id: 5,
    name: "Honda Amaze",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsFU9Ze92hNlhFYTC2NGB8JRfbMT_WCLaSoA&s",
    mileage: "1,26,000 km",
    fuel: "Diesel",
    location: "Hyderabad",
    price: 950000,
    comparisonPrice: 980000,
  },
  {
    id: 6,
    name: "Used Porsche Macan Base [2021-2023]",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuwhlv5tnhZ_aGd_p19qfl1Nw6mpwe1BM13g&s",
    mileage: "3,500 km",
    fuel: "Petrol",
    location: "Delhi",
    price: 9500000,
    comparisonPrice: 9800000,
  },
  {
    id: 7,
    name: "Used Hyundai Creta",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5HuaI6zDzxpm5QvJihH8WozuP_guVU3TOoGWzQsydFF-sXOHOIpN-kDKkp0ikKzE5oo&usqp=CAU",
    mileage: "60,572 km",
    fuel: "Petrol",
    location: "Mumbai",
    price: 599000,
    comparisonPrice: 620000,
  },
  {
    id: 8,
    name: "Used BMW 3-Series",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlDPcAZq-ipb47ajzjzeDTxu6aX5_re6uIQ&s",
    mileage: "1,26,000 km",
    fuel: "Diesel",
    location: "Hyderabad",
    price: 950000,
    comparisonPrice: 980000,
  },
  {
    id: 9,
    name: "Used Audi A4",
    image: "https://imgd-ct.aeplcdn.com/640X480/vimages/202501/3792198_11811_1_1736848300319.jpg?q=80",
    mileage: "3,500 km",
    fuel: "Petrol",
    location: "Delhi",
    price: 9500000,
    comparisonPrice: 9800000,
  },
]

export default function CarsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container px-4 py-8">
        <BackButton />
        <h1 className="text-3xl font-bold mb-8">Popular Used Cars</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {carData.map((car) => (
            <Card key={car.id} className="bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-4">
                <div className="relative h-48 mb-4">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="font-semibold text-white">{car.name}</h3>
                <div className="mt-2 text-sm text-gray-400">
                  <p>
                    {car.mileage} | {car.fuel} | {car.location}
                  </p>
                </div>
                <p className="mt-2 text-xl font-bold text-white">Rs. {car.price.toLocaleString()}</p>
                <div className="mt-2 text-sm">
                  <p className="text-green-400">Our price: Rs. {car.price.toLocaleString()}</p>
                  <p className="text-red-400">Competitor price: Rs. {car.comparisonPrice.toLocaleString()}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

