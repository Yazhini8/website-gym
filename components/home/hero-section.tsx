import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/dark-gym-interior-with-dramatic-lighting-weights.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
            #1 Rated Fitness Center
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Transform Your
            <span className="text-primary block">Body & Mind</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            Join PowerFit and experience world-class training, expert coaches, and a supportive community dedicated to
            your fitness success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/10 text-lg px-8 bg-transparent"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Video
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/50">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">10K+</p>
              <p className="text-muted-foreground text-sm">Active Members</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">50+</p>
              <p className="text-muted-foreground text-sm">Expert Trainers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary">100+</p>
              <p className="text-muted-foreground text-sm">Weekly Classes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
