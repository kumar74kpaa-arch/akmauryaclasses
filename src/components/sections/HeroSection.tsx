'use client'

import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, BookOpen, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

interface HeroProps {
  onOpenDemo: () => void
}

export default function HeroSection({ onOpenDemo }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-classroom.png"
          alt="A.K. Maurya Classes - Expert Coaching"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 bg-deepred/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-deepred/30 font-[family-name:var(--font-poppins)]">
              <BookOpen className="w-4 h-4" />
              Admissions Open 2024-25
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-[family-name:var(--font-poppins)]"
          >
            Expert Mathematics &{' '}
            <span className="text-[#D4A843]">Coaching Classes</span> for School
            & Competitive Exams
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed font-[family-name:var(--font-inter)]"
          >
            10+ Years of Teaching Experience | Group & Home Tuitions | Academic
            & Competitive Exam Preparation
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <a href="tel:+919810312593">
              <Button
                size="lg"
                className="bg-deepred hover:bg-deepred-dark text-white px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold shadow-xl shadow-deepred/25 font-[family-name:var(--font-poppins)]"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </a>

            <a
              href="https://wa.me/919810312593"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold shadow-xl font-[family-name:var(--font-poppins)]"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </Button>
            </a>

            <Button
              size="lg"
              variant="outline"
              onClick={onOpenDemo}
              className="border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-6 text-base sm:text-lg font-semibold font-[family-name:var(--font-poppins)]"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Book Free Demo
            </Button>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-12 flex flex-wrap gap-6 sm:gap-10 text-white/90"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D4A843] rounded-full" />
              <span className="text-sm sm:text-base font-[family-name:var(--font-inter)]">
                10+ Years Experience
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D4A843] rounded-full" />
              <span className="text-sm sm:text-base font-[family-name:var(--font-inter)]">
                1000+ Students Taught
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#D4A843] rounded-full" />
              <span className="text-sm sm:text-base font-[family-name:var(--font-inter)]">
                95% Satisfaction
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
