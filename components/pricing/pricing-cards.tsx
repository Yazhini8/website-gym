import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
import { pricingPlans } from "@/lib/data"

export function PricingCards() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? "bg-primary border-primary scale-105 shadow-xl"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-foreground text-primary px-4 py-1 text-sm font-medium rounded-bl-lg flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}
              <CardHeader className="pb-0 pt-8">
                <h3 className={`text-xl font-bold ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold ${plan.popular ? "text-primary-foreground" : "text-foreground"}`}
                    >
                      ${plan.price}
                    </span>
                    <span
                      className={`text-sm ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                    >
                      /{plan.period}
                    </span>
                  </div>
                  {plan.originalPrice && (
                    <p
                      className={`text-sm mt-1 ${
                        plan.popular ? "text-primary-foreground/60" : "text-muted-foreground"
                      }`}
                    >
                      <span className="line-through">${plan.originalPrice}</span>
                      <span className="ml-2 text-green-400">Save ${plan.originalPrice - plan.price}</span>
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.popular ? "text-primary-foreground" : "text-primary"
                        }`}
                      />
                      <span
                        className={`text-sm ${plan.popular ? "text-primary-foreground/90" : "text-muted-foreground"}`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link href="/auth/signup">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    Join Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
