'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap,
  Trophy,
  MessageSquare,
  Monitor,
  BookOpen,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const courses = [
  {
    icon: GraduationCap,
    title: 'Academic Coaching',
    color: 'from-blue-600 to-blue-800',
    subjects: [
      'Mathematics',
      'Science',
      'Economics',
      'Accounting',
      'Business Studies',
      'Physics',
      'Chemistry',
      'Political Science',
      'Geography',
      'English',
    ],
    description: 'Class 1–12 all subjects coaching with expert faculty',
  },
  {
    icon: Trophy,
    title: 'Competitive Exams',
    color: 'from-deepred to-deepred-dark',
    subjects: [
      'SSC CHSL',
      'SSC CGL',
      'SSC CPO',
      'Delhi Police',
      'Army',
      'Navy',
      'Air Force',
      'Railway',
      'Metro',
      'NDA',
      'CDS',
      'CUET UG',
      'CUET PG',
    ],
    description: 'Comprehensive preparation for government & competitive exams',
  },
  {
    icon: MessageSquare,
    title: 'English Speaking',
    color: 'from-emerald-600 to-emerald-800',
    subjects: [
      'Grammar',
      'Vocabulary',
      'Group Discussion',
      'Interview Preparation',
      'Translation (Hindi ↔ English)',
      'IELTS',
      'PTE',
    ],
    description: 'Fluency, confidence & professional communication skills',
  },
  {
    icon: Monitor,
    title: 'Computer Courses',
    color: 'from-purple-600 to-purple-800',
    subjects: [
      'Basic Computer',
      'Advanced Computer',
      'MS Office',
      'Internet Skills',
    ],
    description: 'Practical computer training from basics to advanced',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function CoursesOverview() {
  const handleViewCourses = () => {
    const el = document.querySelector('#courses')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 sm:py-24 bg-gray-50" id="courses-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-deepred font-semibold text-sm uppercase tracking-wider font-[family-name:var(--font-poppins)]"
          >
            Our Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-navy mt-3 font-[family-name:var(--font-poppins)]"
          >
            Courses Overview
          </motion.h2>
          <div className="section-divider mx-auto mt-4" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto font-[family-name:var(--font-inter)]"
          >
            From academic coaching to competitive exam preparation, we offer
            comprehensive programs tailored to every student&apos;s needs.
          </motion.p>
        </div>

        {/* Course Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <motion.div
                key={course.title}
                variants={itemVariants}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top colored bar */}
                <div
                  className={`h-2 bg-gradient-to-r ${course.color}`}
                />

                <div className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-navy mb-2 font-[family-name:var(--font-poppins)]">
                    {course.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4 font-[family-name:var(--font-inter)]">
                    {course.description}
                  </p>

                  {/* Subjects list */}
                  <div className="space-y-1.5 max-h-48 overflow-y-auto custom-scrollbar">
                    {course.subjects.map((subject) => (
                      <div
                        key={subject}
                        className="flex items-center gap-2 text-sm text-gray-700 font-[family-name:var(--font-inter)]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-deepred flex-shrink-0" />
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button
            onClick={handleViewCourses}
            size="lg"
            className="bg-deepred hover:bg-deepred-dark text-white font-[family-name:var(--font-poppins)]"
          >
            View Detailed Courses
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
