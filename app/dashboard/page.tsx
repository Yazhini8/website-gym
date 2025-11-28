'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DashboardHero } from "@/components/dashboard/dashboard-hero"
import { ProfileCard } from "@/components/dashboard/profile-card"
import { MembershipCard } from "@/components/dashboard/membership-card"
import { BookedClasses } from "@/components/dashboard/booked-classes"
import { Loader2 } from "lucide-react"

export default function DashboardPage() {
  const { user, userData, loading } = useAuth()
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/auth/login")
      } else if (userData) {
        if (userData.role === "admin") {
          router.push("/admin")
        } else {
          setIsChecking(false)
        }
      }
    }
  }, [user, userData, loading, router])

  if (loading || isChecking) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <DashboardHero />
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ProfileCard />
          </div>
          <div className="lg:col-span-2 space-y-8">
            <MembershipCard />
            <BookedClasses />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
