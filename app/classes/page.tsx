import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ClassesGrid } from "@/components/classes/classes-grid"
import { ClassesHero } from "@/components/classes/classes-hero"

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ClassesHero />
      <ClassesGrid />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
