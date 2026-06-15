'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  MapPin,
  MessageCircle,
  Mail,
  Clock,
  Send,
  Loader2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

const courseOptions = [
  'Academic Coaching',
  'Competitive Exam Preparation',
  'English Speaking Course',
  'Computer Course',
  'NIOS Program',
  'Home Tuition',
  'Other',
]

const classOptions = [
  'Class 1-5',
  'Class 6-8',
  'Class 9-10',
  'Class 11-12',
  'Graduation',
  'Competitive Exam',
  'Other',
]

export default function ContactSection() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phone: '',
    class: '',
    course: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      toast({
        title: 'Enquiry Submitted!',
        description:
          'Thank you for your interest. We will contact you shortly.',
      })

      setFormData({
        studentName: '',
        parentName: '',
        phone: '',
        class: '',
        course: '',
        message: '',
      })
    } catch {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again or call us directly.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 sm:py-24 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-deepred font-semibold text-sm uppercase tracking-wider font-[family-name:var(--font-poppins)]"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-navy mt-3 font-[family-name:var(--font-poppins)]"
          >
            Contact Us
          </motion.h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold text-navy mb-6 font-[family-name:var(--font-poppins)]">
                Send Us an Enquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="studentName"
                      className="font-[family-name:var(--font-poppins)]"
                    >
                      Student Name *
                    </Label>
                    <Input
                      id="studentName"
                      placeholder="Enter student name"
                      required
                      value={formData.studentName}
                      onChange={(e) =>
                        setFormData({ ...formData, studentName: e.target.value })
                      }
                      className="font-[family-name:var(--font-inter)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="parentName"
                      className="font-[family-name:var(--font-poppins)]"
                    >
                      Parent Name
                    </Label>
                    <Input
                      id="parentName"
                      placeholder="Enter parent name"
                      value={formData.parentName}
                      onChange={(e) =>
                        setFormData({ ...formData, parentName: e.target.value })
                      }
                      className="font-[family-name:var(--font-inter)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="phone"
                      className="font-[family-name:var(--font-poppins)]"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="font-[family-name:var(--font-inter)]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="class"
                      className="font-[family-name:var(--font-poppins)]"
                    >
                      Class
                    </Label>
                    <Select
                      value={formData.class}
                      onValueChange={(value) =>
                        setFormData({ ...formData, class: value })
                      }
                    >
                      <SelectTrigger className="font-[family-name:var(--font-inter)]">
                        <SelectValue placeholder="Select class" />
                      </SelectTrigger>
                      <SelectContent>
                        {classOptions.map((cls) => (
                          <SelectItem key={cls} value={cls}>
                            {cls}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="course"
                    className="font-[family-name:var(--font-poppins)]"
                  >
                    Course Interested In *
                  </Label>
                  <Select
                    value={formData.course}
                    onValueChange={(value) =>
                      setFormData({ ...formData, course: value })
                    }
                  >
                    <SelectTrigger className="font-[family-name:var(--font-inter)]">
                      <SelectValue placeholder="Select course" />
                    </SelectTrigger>
                    <SelectContent>
                      {courseOptions.map((course) => (
                        <SelectItem key={course} value={course}>
                          {course}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="font-[family-name:var(--font-poppins)]"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Any specific requirements or questions..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="font-[family-name:var(--font-inter)]"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 bg-deepred hover:bg-deepred-dark text-white font-[family-name:var(--font-poppins)]"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Enquiry
                      </>
                    )}
                  </Button>
                  <a
                    href="https://wa.me/919810312593?text=Hi%20Maurya%20Sir%2C%20I%20am%20interested%20in%20joining%20your%20classes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      type="button"
                      className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-[family-name:var(--font-poppins)]"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Direct
                    </Button>
                  </a>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href="tel:+919810312593"
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-deepred/20 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-deepred/10 rounded-xl flex items-center justify-center group-hover:bg-deepred/20 transition-colors">
                  <Phone className="w-6 h-6 text-deepred" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-[family-name:var(--font-inter)]">
                    Call Us
                  </p>
                  <p className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)]">
                    +91 98103 12593
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/919810312593"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-[#25D366]/30 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-xl flex items-center justify-center group-hover:bg-[#25D366]/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-[family-name:var(--font-inter)]">
                    WhatsApp
                  </p>
                  <p className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)]">
                    +91 98103 12593
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-[family-name:var(--font-inter)]">
                    Address
                  </p>
                  <p className="font-semibold text-navy font-[family-name:var(--font-poppins)]">
                    A.K. Maurya Classes
                  </p>
                  <p className="text-gray-600 text-sm font-[family-name:var(--font-inter)]">
                    Delhi NCR, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-[family-name:var(--font-inter)]">
                    Timing
                  </p>
                  <p className="font-semibold text-navy font-[family-name:var(--font-poppins)]">
                    Mon – Sat: 8:00 AM – 8:00 PM
                  </p>
                  <p className="text-gray-600 text-sm font-[family-name:var(--font-inter)]">
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1699900000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="A.K. Maurya Classes Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
