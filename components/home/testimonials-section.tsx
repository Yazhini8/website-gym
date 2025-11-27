"use client"

import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { testimonials } from "@/lib/data"
import { useState } from "react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">What Our Members Say</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background rounded-2xl p-8 md:p-12 border border-border">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-foreground mb-6 italic">"{testimonials[currentIndex].content}"</p>
              <p className="font-bold text-foreground">{testimonials[currentIndex].name}</p>
              <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-border hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
