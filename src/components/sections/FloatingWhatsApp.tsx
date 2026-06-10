'use client'

import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/919810312593?text=Hi%20Maurya%20Sir%2C%20I%20am%20interested%20in%20joining%20your%20classes"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />

      {/* Button */}
      <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300">
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap font-[family-name:var(--font-poppins)]">
          Chat on WhatsApp
        </div>
        <div className="w-3 h-3 bg-gray-900 rotate-45 absolute -bottom-1.5 right-5" />
      </div>
    </motion.a>
  )
}
