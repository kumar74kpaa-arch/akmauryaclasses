import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { studentName, parentName, phone, class: studentClass, course, message } = body

    if (!studentName || !phone || !course) {
      return NextResponse.json(
        { error: 'Student name, phone number, and course are required' },
        { status: 400 }
      )
    }

    const enquiry = await db.contactEnquiry.create({
      data: {
        studentName,
        parentName: parentName || null,
        phone,
        class: studentClass || null,
        course,
        message: message || null,
      },
    })

    return NextResponse.json(
      { success: true, id: enquiry.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit enquiry' },
      { status: 500 }
    )
  }
}
