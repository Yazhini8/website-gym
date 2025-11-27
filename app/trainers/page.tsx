import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { TrainersHero } from "@/components/trainers/trainers-hero"
import { TrainersGrid } from "@/components/trainers/trainers-grid"

export default function TrainersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <TrainersHero />
      <TrainersGrid />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
