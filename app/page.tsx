import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductShowcase } from "@/components/product-showcase"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
