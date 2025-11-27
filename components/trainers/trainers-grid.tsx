import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Twitter, Linkedin, Award } from "lucide-react"
import { trainers } from "@/lib/data"

export function TrainersGrid() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <Card
              key={trainer.id}
              className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-3">
                    <a
                      href={trainer.social.instagram}
                      className="w-10 h-10 bg-background/80 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href={trainer.social.twitter}
                      className="w-10 h-10 bg-background/80 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={trainer.social.linkedin}
                      className="w-10 h-10 bg-background/80 rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-primary text-sm font-medium">{trainer.experience} Experience</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{trainer.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{trainer.role}</p>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{trainer.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {trainer.certifications.slice(0, 3).map((cert) => (
                    <Badge key={cert} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
