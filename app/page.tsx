'use client'
import { useScrollReveal } from '@/components/useScrollReveal'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Training from '@/components/Training'
import { Partners, Industries, Pricing, WhyHireo, About, CtaBanner, Footer } from '@/components/Sections'

export default function Home() {
  useScrollReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Training />
        <Partners />
        <Industries />
        <Pricing />
        <WhyHireo />
        <About />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
