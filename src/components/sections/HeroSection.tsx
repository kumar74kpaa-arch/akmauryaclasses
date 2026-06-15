'use client'

import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, BookOpen, ChevronDown } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface HeroProps {
  onOpenDemo: () => void
}

const FloatingSymbol = ({ symbol, top, left, delay }: { symbol: string, top: string, left: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    animate={{ 
      opacity: [0, 0.3, 0],
      y: [-20, -100],
      rotate: [0, 45, 90]
    }}
    transition={{ 
      duration: 10,
      repeat: Infinity,
      delay: delay,
      ease: "linear"
    }}
    className="absolute text-white/10 text-4xl font-bold select-none pointer-events-none z-0"
    style={{ top, left }}
  >
    {symbol}
  </motion.div>
)

export default function HeroSection({ onOpenDemo }: HeroProps) {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img
          src="/images/hero-classroom.png"
          alt="A.K. Maurya Classes - Expert Coaching"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </motion.div>

      {/* Floating Math Symbols */}
      <FloatingSymbol symbol="∑" top="20%" left="15%" delay={0} />
      <FloatingSymbol symbol="π" top="60%" left="10%" delay={2} />
      <FloatingSymbol symbol="√" top="30%" left="80%" delay={4} />
      <FloatingSymbol symbol="∫" top="70%" left="75%" delay={1} />
      <FloatingSymbol symbol="∞" top="15%" left="60%" delay={3} />
      <FloatingSymbol symbol="∆" top="80%" left="40%" delay={5} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 bg-deepred/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-deepred/30 backdrop-blur-md font-[family-name:var(--font-poppins)]">
              <BookOpen className="w-4 h-4 text-gold" />
              Admissions Open 2024-25
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 font-[family-name:var(--font-poppins)]"
          >
            Expert Mathematics &{' '}
            <span className="text-shimmer bg-clip-text text-transparent bg-gradient-to-r from-gold via-white to-gold">
              Coaching Classes
            </span>{' '}
            for Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed font-[family-name:var(--font-inter)] max-w-2xl"
          >
            Empowering students with <span className="text-gold font-semibold text-2xl drop-shadow-sm">10+ Years</span> of expertise in 
            competitive exam preparation and academic excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            <a href="tel:+919810312593" className="group">
              <Button
                size="lg"
                className="shimmer-btn bg-deepred hover:bg-deepred-dark text-white px-8 py-7 text-lg font-bold shadow-2xl shadow-deepred/40 rounded-xl transition-all duration-300 transform group-hover:scale-105"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call Now
              </Button>
            </a>

            <a
              href="https://wa.me/919810312593"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-7 text-lg font-bold shadow-2xl shadow-green-500/30 rounded-xl transition-all duration-300 transform group-hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                WhatsApp
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              onClick={onOpenDemo}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-7 text-lg font-bold backdrop-blur-sm rounded-xl transition-all duration-300"
            >
              <BookOpen className="w-6 h-6 mr-2" />
              Free Demo
            </Button>
          </motion.div>

          {/* Quick stats in Glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              { label: "10+ Years", sub: "Expertise" },
              { label: "1000+", sub: "Success Stories" },
              { label: "95%", sub: "Selection Rate" }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl flex flex-col items-center sm:items-start">
                <span className="text-gold text-2xl font-bold font-[family-name:var(--font-poppins)]">{stat.label}</span>
                <span className="text-white/70 text-sm font-[family-name:var(--font-inter)]">{stat.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with pulse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
      >
        <motion.div
          animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-white/40 text-xs mb-2 uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-10 h-10 text-gold/80" />
        </motion.div>
      </motion.div>
    </section>
  )
}
