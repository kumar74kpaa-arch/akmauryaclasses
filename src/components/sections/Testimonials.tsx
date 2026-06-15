'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rahul Sharma',
    class: 'Class 12 - Mathematics',
    text: 'Maurya Sir helped me improve from 55% to 85% in Mathematics. His teaching method is incredible and makes complex topics easy to understand.',
    rating: 5,
  },
  {
    name: 'Priya Singh',
    class: 'SSC CGL Aspirant',
    text: 'I cleared SSC CGL in my first attempt thanks to Maurya Sir\'s guidance. The exam-oriented approach and regular practice sessions were extremely helpful.',
    rating: 5,
  },
  {
    name: 'Amit Verma',
    class: 'Class 10 - Science',
    text: 'The personal attention and doubt-clearing sessions at A.K. Maurya Classes are unmatched. My confidence in Science has grown tremendously.',
    rating: 5,
  },
  {
    name: 'Sneha Gupta',
    class: 'English Speaking Course',
    text: 'I was hesitant to speak English, but after joining the English Speaking course, I can now confidently communicate in professional settings. Thank you Maurya Sir!',
    rating: 5,
  },
  {
    name: 'Vikram Patel',
    class: 'NDA Aspirant',
    text: 'The NDA preparation at A.K. Maurya Classes is comprehensive and well-structured. I recommend it to every defence aspirant.',
    rating: 5,
  },
  {
    name: 'Anjali Mishra',
    class: 'Parent - Class 8 Student',
    text: 'As a parent, I am very happy with my child\'s progress. The small batch size ensures personal attention. Best coaching in the area!',
    rating: 5,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-deepred font-semibold text-sm uppercase tracking-wider font-[family-name:var(--font-poppins)]"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-navy mt-3 font-[family-name:var(--font-poppins)]"
          >
            What Our Students Say
          </motion.h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-deepred/10" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#D4A843] text-[#D4A843]"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-5 font-[family-name:var(--font-inter)]">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-deepred/10 rounded-full flex items-center justify-center">
                  <span className="text-deepred font-bold text-sm font-[family-name:var(--font-poppins)]">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm font-[family-name:var(--font-poppins)]">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-xs font-[family-name:var(--font-inter)]">
                    {testimonial.class}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
