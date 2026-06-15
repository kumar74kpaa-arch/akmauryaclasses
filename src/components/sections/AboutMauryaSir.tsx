'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function AboutMauryaSir() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-deepred font-semibold text-sm uppercase tracking-wider font-[family-name:var(--font-poppins)]"
          >
            Meet Your Teacher
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-navy mt-3 font-[family-name:var(--font-poppins)]"
          >
            About Maurya Sir
          </motion.h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Decorative border */}
              <div className="absolute -inset-4 bg-gradient-to-br from-deepred/20 to-navy/20 rounded-2xl rotate-2" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/teacher-portrait.png"
                  alt="Maurya Sir - Expert Mathematics Teacher"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 -right-4 bg-deepred text-white px-4 py-2 rounded-xl shadow-lg">
                <p className="font-bold text-lg font-[family-name:var(--font-poppins)]">
                  10+ Years
                </p>
                <p className="text-xs opacity-90 font-[family-name:var(--font-inter)]">
                  Teaching Experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <Quote className="absolute -top-2 -left-2 w-12 h-12 text-deepred/10" />
              <h3 className="text-2xl sm:text-3xl font-bold text-navy mb-2 font-[family-name:var(--font-poppins)]">
                Maurya Sir
              </h3>
              <p className="text-deepred font-semibold mb-6 font-[family-name:var(--font-poppins)]">
                B.Ed | Mathematics Expert
              </p>

              <div className="space-y-4 text-gray-600 leading-relaxed font-[family-name:var(--font-inter)]">
                <p>
                  Maurya Sir (B.Ed) has over 10 years of teaching experience
                  helping students from convent, public and government schools
                  improve their academic performance and achieve competitive exam
                  success.
                </p>
                <p>
                  With a deep understanding of mathematics and a passion for
                  teaching, Maurya Sir has guided hundreds of students to
                  achieve remarkable results — from improving their board exam
                  scores to cracking competitive exams like SSC, NDA, and CUET.
                </p>
                <p>
                  His unique teaching methodology combines concept-based
                  learning with practical problem-solving, ensuring students
                  not only memorize formulas but truly understand the logic
                  behind them.
                </p>
              </div>

              {/* Key highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'Qualification', value: 'B.Ed' },
                  { label: 'Specialization', value: 'Mathematics' },
                  { label: 'Experience', value: '10+ Years' },
                  { label: 'Students Taught', value: '1000+' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                  >
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-[family-name:var(--font-inter)]">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold text-navy font-[family-name:var(--font-poppins)]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
