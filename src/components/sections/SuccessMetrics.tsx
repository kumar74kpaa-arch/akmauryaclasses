'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, Users, ThumbsUp, Star } from 'lucide-react'

const stats = [
  {
    icon: Award,
    value: 10,
    suffix: '+',
    label: 'Years Experience',
    description: 'Of dedicated teaching excellence',
  },
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Students Taught',
    description: 'Across all programs',
  },
  {
    icon: ThumbsUp,
    value: 95,
    suffix: '%',
    label: 'Student Satisfaction',
    description: 'Happy students & parents',
  },
  {
    icon: Star,
    value: 100,
    suffix: '+',
    label: 'Success Stories',
    description: 'Proven track record',
  },
]

function AnimatedCounter({
  value,
  suffix,
  duration = 2000,
}: {
  value: number
  suffix: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.floor(eased * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-poppins)]">
      {count}
      {suffix}
    </span>
  )
}

export default function SuccessMetrics() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-deepred/80" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A843] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-deepred rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#D4A843] font-semibold text-sm uppercase tracking-wider font-[family-name:var(--font-poppins)]"
          >
            Our Achievements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mt-3 font-[family-name:var(--font-poppins)]"
          >
            Success Metrics
          </motion.h2>
          <div className="w-20 h-1 bg-[#D4A843] mx-auto mt-4 rounded-full" />
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="text-center p-6 sm:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 bg-[#D4A843]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-[#D4A843]" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-white font-semibold mt-2 text-lg font-[family-name:var(--font-poppins)]">
                  {stat.label}
                </p>
                <p className="text-gray-300 text-sm mt-1 font-[family-name:var(--font-inter)]">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
