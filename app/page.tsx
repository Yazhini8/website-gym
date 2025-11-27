import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { FeaturedClasses } from "@/components/home/featured-classes"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedClasses />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
