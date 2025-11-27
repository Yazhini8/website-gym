import Image from "next/image"
import { CheckCircle } from "lucide-react"

const features = [
  "State-of-the-art equipment",
  "24/7 gym access",
  "Expert personal trainers",
  "Nutrition guidance",
  "Recovery & spa facilities",
  "Supportive community",
]

export function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/modern-gym-equipment-fitness-center.jpg" alt="PowerFit Gym Interior" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl hidden md:block">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          <div>
            <span className="text-primary font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Your Fitness Journey Starts Here
            </h2>
            <p className="text-muted-foreground mb-6">
              At PowerFit, we believe fitness is more than just exercise—it's a lifestyle transformation. Our mission is
              to provide an inclusive environment where everyone can achieve their health and fitness goals, regardless
              of their starting point.
            </p>
            <p className="text-muted-foreground mb-8">
              With cutting-edge facilities, world-class trainers, and a vibrant community, we're committed to supporting
              your journey every step of the way.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
