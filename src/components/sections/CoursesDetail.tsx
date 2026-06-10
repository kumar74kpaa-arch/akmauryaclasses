'use client'

import { motion } from 'framer-motion'
import {
  GraduationCap,
  Trophy,
  MessageSquare,
  Monitor,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const courseDetails = [
  {
    icon: GraduationCap,
    title: 'Academic Coaching',
    subtitle: 'Class 1–12 All Subjects',
    gradient: 'from-blue-600 to-blue-800',
    description:
      'Comprehensive academic coaching for students from Class 1 to 12 covering all major subjects with experienced faculty and proven teaching methodology.',
    subjects: [
      'Mathematics',
      'Science (Physics, Chemistry, Biology)',
      'Economics',
      'Accounting',
      'Business Studies',
      'Political Science',
      'Geography',
      'English',
      'Hindi',
    ],
    features: [
      'Concept-based learning',
      'Regular tests & assessments',
      'Doubt clearing sessions',
      'Board exam preparation',
    ],
  },
  {
    icon: Trophy,
    title: 'Competitive Exams',
    subtitle: 'SSC, CUET, NDA, CDS & More',
    gradient: 'from-deepred to-deepred-dark',
    description:
      'Expert preparation for all major competitive exams with structured curriculum, practice tests, and proven strategies for success.',
    subjects: [
      'SSC CHSL',
      'SSC CGL',
      'SSC CPO',
      'Delhi Police',
      'Army / Navy / Air Force',
      'Railway',
      'Metro',
      'NDA',
      'CDS',
      'CUET UG',
      'CUET PG',
    ],
    features: [
      'Exam-oriented coaching',
      'Previous year paper practice',
      'Time management techniques',
      'Regular mock tests',
    ],
  },
  {
    icon: MessageSquare,
    title: 'English Speaking',
    subtitle: 'Fluency & Communication Skills',
    gradient: 'from-emerald-600 to-emerald-800',
    description:
      'Build confidence in English communication with our comprehensive English Speaking course designed for all levels of learners.',
    subjects: [
      'Grammar & Vocabulary',
      'Group Discussion Practice',
      'Interview Preparation',
      'Translation (Hindi ↔ English)',
      'IELTS Preparation',
      'PTE Preparation',
    ],
    features: [
      'Fluency building',
      'Grammar mastery',
      'Interview skills',
      'Confidence building',
    ],
  },
  {
    icon: Monitor,
    title: 'Computer Courses',
    subtitle: 'Basic to Advanced',
    gradient: 'from-purple-600 to-purple-800',
    description:
      'Practical computer training from basic operations to advanced applications, designed to make you digitally proficient.',
    subjects: [
      'Basic Computer Operations',
      'Advanced Computer Skills',
      'MS Office (Word, Excel, PowerPoint)',
      'Internet & Email Skills',
    ],
    features: [
      'Hands-on training',
      'Practical exercises',
      'Industry-relevant skills',
      'Certificate provided',
    ],
  },
]

const niosPrograms = {
  title: 'NIOS Programs',
  subtitle: 'National Institute of Open Schooling',
  description:
    'Get certified through NIOS — a recognized board that provides opportunities for students who want to complete their education.',
  highlights: [
    {
      from: '9th Fail',
      to: '10th Certification',
      description: 'Complete your 10th through NIOS and open doors to further education and career opportunities.',
    },
    {
      from: '11th Fail',
      to: '12th Certification',
      description: 'Get your 12th certification through NIOS and become eligible for higher education and competitive exams.',
    },
  ],
  eligibility: [
    'No upper age limit',
    'Flexible study schedule',
    'Recognized by all universities',
    'Exam center across India',
  ],
}

export default function CoursesDetail() {
  const handleEnquire = () => {
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 sm:py-24 bg-white" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-deepred font-semibold text-sm uppercase tracking-wider font-[family-name:var(--font-poppins)]"
          >
            Detailed Programs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-navy mt-3 font-[family-name:var(--font-poppins)]"
          >
            Our Courses
          </motion.h2>
          <div className="section-divider mx-auto mt-4" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto font-[family-name:var(--font-inter)]"
          >
            Choose from our wide range of courses designed to help you achieve
            academic excellence and career success.
          </motion.p>
        </div>

        {/* Course Details */}
        <div className="space-y-12">
          {courseDetails.map((course, index) => {
            const Icon = course.icon
            return (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-8 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Info */}
                <div className="flex-1 space-y-5">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${course.gradient} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-navy font-[family-name:var(--font-poppins)]">
                        {course.title}
                      </h3>
                      <p className="text-deepred font-medium text-sm font-[family-name:var(--font-poppins)]">
                        {course.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed font-[family-name:var(--font-inter)]">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {course.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-700 font-[family-name:var(--font-inter)]"
                      >
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleEnquire}
                    className="bg-deepred hover:bg-deepred-dark text-white font-[family-name:var(--font-poppins)]"
                  >
                    Enquire Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

                {/* Subjects Card */}
                <div className="flex-1 w-full">
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <h4 className="font-semibold text-navy mb-4 flex items-center gap-2 font-[family-name:var(--font-poppins)]">
                      <BookOpen className="w-5 h-5 text-deepred" />
                      Subjects Covered
                    </h4>
                    <div className="space-y-2">
                      {course.subjects.map((subject) => (
                        <div
                          key={subject}
                          className="flex items-center gap-3 p-2.5 bg-white rounded-lg border border-gray-100"
                        >
                          <div className="w-2 h-2 bg-deepred rounded-full flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-[family-name:var(--font-inter)]">
                            {subject}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* NIOS Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-navy to-navy/90 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A843]/10 rounded-full -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-2">
                <BookOpen className="w-8 h-8 text-[#D4A843]" />
                <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-poppins)]">
                  {niosPrograms.title}
                </h3>
              </div>
              <p className="text-[#D4A843] font-medium mb-4 font-[family-name:var(--font-poppins)]">
                {niosPrograms.subtitle}
              </p>
              <p className="text-gray-300 mb-8 max-w-2xl font-[family-name:var(--font-inter)]">
                {niosPrograms.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {niosPrograms.highlights.map((highlight) => (
                  <div
                    key={highlight.from}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-red-500/30 text-white px-3 py-1 rounded-lg text-sm font-semibold font-[family-name:var(--font-poppins)]">
                        {highlight.from}
                      </span>
                      <ArrowRight className="w-5 h-5 text-[#D4A843]" />
                      <span className="bg-green-500/30 text-white px-3 py-1 rounded-lg text-sm font-semibold font-[family-name:var(--font-poppins)]">
                        {highlight.to}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm font-[family-name:var(--font-inter)]">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {niosPrograms.eligibility.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full"
                  >
                    <CheckCircle className="w-4 h-4 text-[#D4A843]" />
                    <span className="text-sm font-[family-name:var(--font-inter)]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
