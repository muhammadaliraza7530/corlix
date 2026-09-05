import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, services, budget, timeline, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and project message are required.' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    await sendContactEmail({
      name,
      email,
      service: Array.isArray(services) ? services.join(', ') : services,
      message,
    });

    const inquiryId = 'CRX-' + Math.random().toString(36).substring(2, 8).toUpperCase();

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your project inquiry has been received. A Senior Solutions Architect from Corelix Systems will reach out within 4 business hours.',
      inquiryId,
      receivedAt: new Date().toISOString(),
      details: {
        name,
        email,
        company: company || 'Not specified',
        services: services || [],
        budget: budget || 'Flexible',
        timeline: timeline || 'Standard',
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error processing your request. Please try again.' },
      { status: 500 }
    );
  }
}
