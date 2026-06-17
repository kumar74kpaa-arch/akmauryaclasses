'use client'

import {
  GraduationCap,
  Phone,
  MapPin,
  Mail,
  ArrowUp,
  MessageCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Courses', href: '#courses' },
  { label: 'About Us', href: '#about' },
  { label: 'Results', href: '#results' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const courses = [
  'Academic Coaching',
  'Competitive Exams',
  'English Speaking',
  'Computer Courses',
  'NIOS Programs',
  'Home Tuition',
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 overflow-hidden">
                <img src="/logoakk.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-[family-name:var(--font-poppins)]">
                  A.K. Maurya
                </h3>
                <p className="text-xs text-[#D4A843] font-[family-name:var(--font-poppins)]">
                  Classes
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 font-[family-name:var(--font-inter)]">
              Expert Mathematics & Coaching Classes for School & Competitive
              Exams. 10+ Years of Teaching Excellence.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+919810312593"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-deepred transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919810312593"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#25D366] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@akmauryaclasses.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-deepred transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[#D4A843] mb-4 font-[family-name:var(--font-poppins)]">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="text-gray-300 hover:text-white text-sm transition-colors font-[family-name:var(--font-inter)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-[#D4A843] mb-4 font-[family-name:var(--font-poppins)]">
              Our Courses
            </h4>
            <ul className="space-y-2.5">
              {courses.map((course) => (
                <li key={course}>
                  <a
                    href="#courses"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick('#courses')
                    }}
                    className="text-gray-300 hover:text-white text-sm transition-colors font-[family-name:var(--font-inter)]"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-[#D4A843] mb-4 font-[family-name:var(--font-poppins)]">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4A843] mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+919810312593"
                    className="text-gray-300 text-sm hover:text-white transition-colors font-[family-name:var(--font-inter)]"
                  >
                    +91 98103 12593
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#D4A843] mt-0.5 flex-shrink-0" />
                <a
                  href="https://wa.me/919810312593"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 text-sm hover:text-white transition-colors font-[family-name:var(--font-inter)]"
                >
                  WhatsApp: +91 98103 12593
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A843] mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm font-[family-name:var(--font-inter)]">
                  Delhi NCR, India
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4A843] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@akmauryaclasses.com"
                  className="text-gray-300 text-sm hover:text-white transition-colors font-[family-name:var(--font-inter)]"
                >
                  info@akmauryaclasses.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-sm font-[family-name:var(--font-inter)]">
            © {new Date().getFullYear()} A.K. Maurya Classes. All rights
            reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white hover:bg-white/10 font-[family-name:var(--font-poppins)]"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
