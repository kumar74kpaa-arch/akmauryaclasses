import { NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, mobile, class: studentClass, subject } = body

    if (!name || !mobile || !subject) {
      return NextResponse.json(
        { error: 'Name, mobile number, and subject are required' },
        { status: 400 }
      )
    }

    const booking = await db.demoBooking.create({
      data: {
        name,
        mobile,
        class: studentClass || null,
        subject,
      },
    })

    return NextResponse.json(
      { success: true, id: booking.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Demo booking error:', error)
    return NextResponse.json(
      { error: 'Failed to book demo class' },
      { status: 500 }
    )
  }
}
