'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Phone, Menu, X, GraduationCap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#courses', label: 'Courses' },
  { href: '#about', label: 'About' },
  { href: '#results', label: 'Results' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 overflow-hidden group-hover:scale-105 transition-transform">
              <img 
                src="/images/logoakk.png" 
                alt="A.K. Maurya Classes Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-navy leading-tight font-[family-name:var(--font-poppins)]">
                A.K. Maurya
              </h1>
              <p className="text-sm text-deepred font-semibold font-[family-name:var(--font-poppins)] uppercase tracking-wider">
                Classes
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="px-3 py-2 text-sm font-medium text-navy hover:text-deepred transition-colors rounded-md hover:bg-deepred/5 font-[family-name:var(--font-poppins)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="tel:+919810312593">
              <Button
                size="sm"
                className="bg-navy hover:bg-navy/90 text-white hidden sm:flex items-center gap-2 font-[family-name:var(--font-poppins)]"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
              <Button
                size="icon"
                className="bg-navy hover:bg-navy/90 text-white sm:hidden"
              >
                <Phone className="w-4 h-4" />
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center gap-2">
                    <img src="/images/logoakk.png" alt="Logo" className="w-8 h-8 object-contain" />
                    <span className="font-bold text-navy font-[family-name:var(--font-poppins)]">
                      A.K. Maurya Classes
                    </span>
                  </div>
                </div>
                <nav className="p-4 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(link.href)
                      }}
                      className="block px-4 py-3 text-navy hover:text-deepred hover:bg-deepred/5 rounded-lg transition-colors font-medium font-[family-name:var(--font-poppins)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="p-4 border-t space-y-3">
                  <a
                    href="tel:+919810312593"
                    className="flex items-center gap-2 w-full bg-navy text-white py-3 px-4 rounded-lg justify-center font-medium font-[family-name:var(--font-poppins)]"
                  >
                    <Phone className="w-4 h-4" />
                    Call: +91 98103 12593
                  </a>
                  <a
                    href="https://wa.me/919810312593"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 w-full bg-[#25D366] text-white py-3 px-4 rounded-lg justify-center font-medium font-[family-name:var(--font-poppins)]"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
