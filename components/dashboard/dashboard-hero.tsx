"use client"

import { useAuth } from "@/lib/auth-context"

export function DashboardHero() {
  const { user, userData } = useAuth()
  const displayName = userData?.displayName || user?.displayName || "Member"

  return (
    <section className="pt-24 pb-12 bg-linera-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Welcome back, <span className="text-primary">{displayName}</span>
          </h1>
          <p className="text-muted-foreground text-lg">Track your progress and manage your fitness journey</p>
        </div>
      </div>
    </section>
  )
}
