'use client'

import { useState } from 'react'
import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import CoursesOverview from '@/components/sections/CoursesOverview'
import AboutMauryaSir from '@/components/sections/AboutMauryaSir'
import SuccessMetrics from '@/components/sections/SuccessMetrics'
import Testimonials from '@/components/sections/Testimonials'
import CoursesDetail from '@/components/sections/CoursesDetail'
import ResultsSection from '@/components/sections/ResultsSection'
import GallerySection from '@/components/sections/GallerySection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'
import FloatingWhatsApp from '@/components/sections/FloatingWhatsApp'
import FreeDemoModal from '@/components/sections/FreeDemoModal'

export default function Home() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection onOpenDemo={() => setIsDemoOpen(true)} />
        <WhyChooseUs />
        <CoursesOverview />
        <AboutMauryaSir />
        <SuccessMetrics />
        <Testimonials />
        <CoursesDetail />
        <ResultsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <FreeDemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  )
}
