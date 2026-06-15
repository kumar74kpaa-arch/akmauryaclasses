'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { BookOpen, Loader2, CheckCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface FreeDemoModalProps {
  isOpen: boolean
  onClose: () => void
}

const subjectOptions = [
  'Mathematics',
  'Science',
  'English',
  'Social Studies',
  'Economics',
  'Accounting',
  'Business Studies',
  'Physics',
  'Chemistry',
  'Competitive Exam Prep',
  'English Speaking',
  'Computer Course',
  'Other',
]

export default function FreeDemoModal({ isOpen, onClose }: FreeDemoModalProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    class: '',
    subject: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      setIsSuccess(true)
      toast({
        title: 'Demo Class Booked!',
        description: 'We will contact you to schedule your free demo class.',
      })

      setTimeout(() => {
        setIsSuccess(false)
        setFormData({ name: '', mobile: '', class: '', subject: '' })
        onClose()
      }, 2000)
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

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-deepred rounded-xl flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <DialogTitle className="text-navy font-[family-name:var(--font-poppins)]">
                Book Free Demo Class
              </DialogTitle>
              <DialogDescription className="font-[family-name:var(--font-inter)]">
                Experience our teaching methodology firsthand
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {isSuccess ? (
          <div className="flex flex-col items-center py-8 gap-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-center">
              <h3 className="font-bold text-navy text-lg font-[family-name:var(--font-poppins)]">
                Demo Class Booked!
              </h3>
              <p className="text-gray-500 text-sm mt-1 font-[family-name:var(--font-inter)]">
                We will contact you shortly to schedule your class.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="demo-name"
                className="font-[family-name:var(--font-poppins)]"
              >
                Name *
              </Label>
              <Input
                id="demo-name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="font-[family-name:var(--font-inter)]"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="demo-mobile"
                className="font-[family-name:var(--font-poppins)]"
              >
                Mobile Number *
              </Label>
              <Input
                id="demo-mobile"
                type="tel"
                placeholder="Enter mobile number"
                required
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="font-[family-name:var(--font-inter)]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label
                  htmlFor="demo-class"
                  className="font-[family-name:var(--font-poppins)]"
                >
                  Class
                </Label>
                <Input
                  id="demo-class"
                  placeholder="e.g., 10th"
                  value={formData.class}
                  onChange={(e) =>
                    setFormData({ ...formData, class: e.target.value })
                  }
                  className="font-[family-name:var(--font-inter)]"
                />
              </div>
              <div className="space-y-2">
                <Label className="font-[family-name:var(--font-poppins)]">
                  Subject *
                </Label>
                <Select
                  value={formData.subject}
                  onValueChange={(value) =>
                    setFormData({ ...formData, subject: value })
                  }
                >
                  <SelectTrigger className="font-[family-name:var(--font-inter)]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjectOptions.map((subject) => (
                      <SelectItem key={subject} value={subject}>
                        {subject}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-deepred hover:bg-deepred-dark text-white font-[family-name:var(--font-poppins)]"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Booking...
                </>
              ) : (
                'Book Free Demo Class'
              )}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
