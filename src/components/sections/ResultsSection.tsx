'use client'

import { motion } from 'framer-motion'
import { Trophy, TrendingUp, Award, Users } from 'lucide-react'

const achievements = [
  {
    icon: TrendingUp,
    title: 'Marks Improvement',
    stats: '55% → 85%',
    description: 'Average marks improvement in Mathematics for students who complete our program.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Trophy,
    title: 'Exam Selections',
    stats: '50+',
    description: 'Students selected in various competitive exams including SSC, NDA, and CUET.',
    color: 'text-deepred',
    bg: 'bg-red-50',
  },
  {
    icon: Award,
    title: 'Board Toppers',
    stats: '90%+',
    description: 'Students scoring above 90% in board exams under our guidance.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Users,
    title: 'Parent Satisfaction',
    stats: '95%',
    description: 'Parents recommend A.K. Maurya Classes to other families.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
]

const results = [
  { name: 'Rahul S.', exam: 'SSC CGL 2023', result: 'Selected', score: 'AIR 1245' },
  { name: 'Priya K.', exam: 'CUET UG 2023', result: 'Qualified', score: '95.2 Percentile' },
  { name: 'Vikram P.', exam: 'NDA 2023', result: 'Recommended', score: 'Merit List' },
  { name: 'Anjali M.', exam: 'Class 12 Boards', result: 'Distinction', score: '92%' },
  { name: 'Amit V.', exam: 'SSC CHSL 2023', result: 'Selected', score: 'Tier-II Cleared' },
  { name: 'Sneha G.', exam: 'CUET PG 2023', result: 'Qualified', score: '97.8 Percentile' },
]

export default function ResultsSection() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50" id="results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-deepred font-semibold text-sm uppercase tracking-wider font-[family-name:var(--font-poppins)]"
          >
            Our Track Record
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-navy mt-3 font-[family-name:var(--font-poppins)]"
          >
            Results & Achievements
          </motion.h2>
          <div className="section-divider mx-auto mt-4" />
        </div>

        {/* Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center"
              >
                <div
                  className={`w-14 h-14 ${achievement.bg} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`w-7 h-7 ${achievement.color}`} />
                </div>
                <h3 className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)]">
                  {achievement.title}
                </h3>
                <p
                  className={`text-2xl font-bold ${achievement.color} mt-2 font-[family-name:var(--font-poppins)]`}
                >
                  {achievement.stats}
                </p>
                <p className="text-gray-500 text-sm mt-2 font-[family-name:var(--font-inter)]">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Results Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
        >
          <div className="bg-navy text-white px-6 py-4">
            <h3 className="font-bold text-lg font-[family-name:var(--font-poppins)]">
              Recent Student Results
            </h3>
            <p className="text-gray-300 text-sm font-[family-name:var(--font-inter)]">
              Our students consistently achieve outstanding results
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left py-3 px-6 text-sm font-semibold text-gray-600 font-[family-name:var(--font-poppins)]">
                    Student
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-gray-600 font-[family-name:var(--font-poppins)]">
                    Exam
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-gray-600 font-[family-name:var(--font-poppins)]">
                    Result
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-semibold text-gray-600 font-[family-name:var(--font-poppins)]">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="py-3 px-6 text-sm font-medium text-navy font-[family-name:var(--font-inter)]">
                      {result.name}
                    </td>
                    <td className="py-3 px-6 text-sm text-gray-600 font-[family-name:var(--font-inter)]">
                      {result.exam}
                    </td>
                    <td className="py-3 px-6">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 font-[family-name:var(--font-poppins)]">
                        {result.result}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-sm font-semibold text-deepred font-[family-name:var(--font-poppins)]">
                      {result.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
