"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/lib/auth-context"
import { Crown, CheckCircle, AlertCircle } from "lucide-react"

const membershipDetails: Record<string, { name: string; color: string; features: string[] }> = {
  none: {
    name: "No Active Membership",
    color: "bg-muted text-muted-foreground",
    features: [],
  },
  monthly: {
    name: "Monthly Plan",
    color: "bg-primary/20 text-primary",
    features: ["Full gym access", "Locker room access", "2 group classes per week"],
  },
  quarterly: {
    name: "Quarterly Plan",
    color: "bg-primary text-primary-foreground",
    features: ["Full gym access", "Unlimited group classes", "1 personal training session"],
  },
  yearly: {
    name: "Yearly Plan",
    color: "bg-gradient-to-r from-primary to-accent text-primary-foreground",
    features: ["Full gym access", "Unlimited group classes", "4 personal training sessions", "Priority booking"],
  },
}

export function MembershipCard() {
  const { userData } = useAuth()
  const membership = userData?.membership || "none"
  const details = membershipDetails[membership] || membershipDetails.none

  return (
    <Card className="bg-card border-border">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-foreground flex items-center gap-2">
          <Crown className="w-5 h-5 text-primary" />
          Membership Status
        </CardTitle>
        <Badge className={details.color}>{details.name}</Badge>
      </CardHeader>
      <CardContent>
        {membership === "none" ? (
          <div className="text-center py-6">
            <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              You don't have an active membership. Join now to access all our facilities and classes.
            </p>
            <Link href="/pricing">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">View Membership Plans</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {details.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-3 pt-4 border-t border-border">
              <Link href="/pricing" className="flex-1">
                <Button variant="outline" className="w-full border-border text-foreground bg-transparent">
                  Upgrade Plan
                </Button>
              </Link>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Manage Billing
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
