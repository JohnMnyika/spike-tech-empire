// app/api/contact/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.json();
  console.log('Form Data:', formData); // Placeholder for real database handling
  return NextResponse.json({ message: 'Form submitted successfully' }, { status: 200 });
}
