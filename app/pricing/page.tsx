import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { PricingHero } from "@/components/pricing/pricing-hero"
import { PricingCards } from "@/components/pricing/pricing-cards"
import { FAQSection } from "@/components/pricing/faq-section"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PricingHero />
      <PricingCards />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
