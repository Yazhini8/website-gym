import { Trophy, Users, Clock, Dumbbell, Heart, Shield } from "lucide-react"

const reasons = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description: "Access to the latest fitness machines and free weights from top brands.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified professionals dedicated to helping you achieve your goals.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Work out on your schedule with round-the-clock gym access.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Join thousands who've transformed their lives with PowerFit.",
  },
  {
    icon: Heart,
    title: "Wellness Focus",
    description: "Holistic approach including nutrition, recovery, and mental health.",
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Clean, sanitized facilities with professional supervision.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Why PowerFit</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're not just a gym—we're your partner in transformation. Here's what sets us apart.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-muted-foreground text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
