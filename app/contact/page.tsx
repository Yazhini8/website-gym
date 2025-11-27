import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactSection } from "@/components/contact/contact-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ContactHero />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
