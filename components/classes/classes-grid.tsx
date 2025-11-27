"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, User, Calendar } from "lucide-react"
import { classes } from "@/lib/data"
import { useState } from "react"

const categories = ["all", "yoga", "zumba", "strength", "cardio", "hiit", "boxing"]

export function ClassesGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredClasses = activeCategory === "all" ? classes : classes.filter((c) => c.category === activeCategory)

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
              }
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map((classItem) => (
            <Card
              key={classItem.id}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={classItem.image || "/placeholder.svg"}
                  alt={classItem.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {classItem.category.toUpperCase()}
                </span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{classItem.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{classItem.description}</p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    <span>Trainer: {classItem.trainer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{classItem.timing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Duration: {classItem.duration}</span>
                  </div>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Book Class</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
