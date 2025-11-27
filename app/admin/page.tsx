"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AdminTabs } from "@/components/admin/admin-tabs"
import { Loader2, ShieldCheck } from "lucide-react"

export default function AdminPage() {
  const { user, userData, loading } = useAuth()
  const router = useRouter()
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/auth/login")
      } else if (userData?.role !== "admin") {
        router.push("/dashboard")
      } else {
        setIsChecking(false)
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
      <section className="pt-24 pb-12 bg-linear-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <ShieldCheck className="w-8 h-8 text-primary" />
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">Admin Dashboard</h1>
          </div>
          <p className="text-muted-foreground text-lg text-center">Manage trainers, classes, and pricing plans</p>
        </div>
      </section>
      <section className="container mx-auto px-4 py-12">
        <AdminTabs />
      </section>
      <Footer />
    </main>
  )
}