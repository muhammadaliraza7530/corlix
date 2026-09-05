import { NextRequest, NextResponse } from 'next/server';
import { sendNewsletterEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    await sendNewsletterEmail(email);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Unable to subscribe right now. Please try again.' }, { status: 500 });
  }
}
