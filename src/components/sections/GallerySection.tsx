'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

const galleryImages = [
  {
    src: '/images/gallery-interior.png',
    alt: 'Classroom Interior - A.K. Maurya Classes',
    category: 'Interior',
  },
  {
    src: '/images/gallery-exterior.png',
    alt: 'Institute Exterior - A.K. Maurya Classes',
    category: 'Exterior',
  },
  {
    src: '/images/hero-classroom.png',
    alt: 'Teaching Session at A.K. Maurya Classes',
    category: 'Classroom',
  },
  {
    src: '/images/teacher-portrait.png',
    alt: 'Maurya Sir Teaching',
    category: 'Teacher',
  },
  {
    src: '/images/gallery-interior.png',
    alt: 'Students Learning at A.K. Maurya Classes',
    category: 'Students',
  },
  {
    src: '/images/gallery-exterior.png',
    alt: 'Institute Building - A.K. Maurya Classes',
    category: 'Exterior',
  },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-24 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-deepred font-semibold text-sm uppercase tracking-wider font-[family-name:var(--font-poppins)]"
          >
            Our Institute
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-navy mt-3 font-[family-name:var(--font-poppins)]"
          >
            Gallery
          </motion.h2>
          <div className="section-divider mx-auto mt-4" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto font-[family-name:var(--font-inter)]"
          >
            Take a look at our learning environment and facilities.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-sm font-[family-name:var(--font-poppins)]">
                  {image.category}
                </p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Dialog */}
        <Dialog
          open={selectedImage !== null}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl p-0 bg-black/95 border-none">
            <DialogTitle className="sr-only">Gallery Image</DialogTitle>
            {selectedImage !== null && (
              <div className="relative">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-medium font-[family-name:var(--font-poppins)]">
                    {galleryImages[selectedImage].category} - A.K. Maurya
                    Classes
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
