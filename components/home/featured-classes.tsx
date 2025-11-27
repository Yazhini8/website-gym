import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, User, ArrowRight } from "lucide-react"
import { classes } from "@/lib/data"

export function FeaturedClasses() {
  const featuredClasses = classes.slice(0, 3)

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Our Classes</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Featured Training Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our diverse range of classes designed to help you reach your fitness goals, whether you're a
            beginner or an experienced athlete.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredClasses.map((classItem) => (
            <Card
              key={classItem.id}
              className="bg-background border-border overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={classItem.image || "/placeholder.svg"}
                  alt={classItem.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                  {classItem.category.toUpperCase()}
                </span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{classItem.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{classItem.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4 text-primary" />
                    {classItem.trainer}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    {classItem.duration}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/classes">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              View All Classes
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
