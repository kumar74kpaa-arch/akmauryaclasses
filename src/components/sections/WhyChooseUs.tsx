'use client'

import { motion } from 'framer-motion'
import {
  Award,
  Calculator,
  Home,
  Users,
  Target,
  Heart,
} from 'lucide-react'

const features = [
  {
    icon: Award,
    title: '10+ Years Experience',
    description:
      'Over a decade of proven teaching excellence helping students achieve academic success.',
  },
  {
    icon: Calculator,
    title: 'Expert Mathematics Faculty',
    description:
      'Specialized mathematics coaching with concept-based teaching methodology.',
  },
  {
    icon: Home,
    title: 'Home & Group Tuition',
    description:
      'Flexible learning options — choose home tuitions or group classes as per your convenience.',
  },
  {
    icon: Users,
    title: 'Small Batch Size',
    description:
      'Limited students per batch ensuring personal attention and better learning outcomes.',
  },
  {
    icon: Target,
    title: 'Competitive Exam Prep',
    description:
      'Comprehensive preparation for SSC, CUET, NDA, CDS, Railway and other competitive exams.',
  },
  {
    icon: Heart,
    title: 'Personal Attention',
    description:
      'Individual guidance, regular doubt sessions, and progress tracking for every student.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-deepred font-semibold text-sm uppercase tracking-wider font-[family-name:var(--font-poppins)]"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-navy mt-3 font-[family-name:var(--font-poppins)]"
          >
            What Makes Us Different
          </motion.h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-deepred/20 bg-white hover:bg-gradient-to-br hover:from-white hover:to-deepred/5 transition-all duration-300 hover:shadow-xl hover:shadow-deepred/5 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-deepred/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-deepred/20 transition-colors">
                  <Icon className="w-7 h-7 text-deepred" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3 font-[family-name:var(--font-poppins)]">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-inter)]">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
