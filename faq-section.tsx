'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I find the estimated price of my car?",
    answer: "You can get an instant price estimate by filling out our simple online form with your car's details. Our advanced algorithm will provide you with a realistic market value based on current market conditions."
  },
  {
    question: "How do I understand what's happening during the car inspection?",
    answer: "Our professional inspectors will thoroughly examine your car's condition, including mechanical, electrical, and cosmetic aspects. They'll explain each step of the process and share their findings with you transparently."
  },
  {
    question: "Who's going to take care of the paperwork and de-registration?",
    answer: "Value My Car handles all the paperwork, including de-registration from the Motor Vehicle Department. We take care of the entire process to make it hassle-free for you."
  },
  {
    question: "What factors drive the car purchase price?",
    answer: "The purchase price is determined by various factors including the car's age, mileage, condition, market demand, and regional pricing variations. We ensure you get the best possible price based on current market conditions."
  },
  {
    question: "Do I pay anything to get the price estimate?",
    answer: "No, getting a price estimate is completely free. You can use our online tool or visit any of our branches for a free car valuation."
  }
]

export function FAQSection() {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container px-4 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-gray-400">
            If you can't find the answer to your question, don't hesitate to contact us.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

