// app/api/contact/route.ts

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse and validate the incoming JSON
    const formData = await request.json();

    // Validate form data (example: check for name and email fields)
    if (!formData.name || !formData.email) {
      return NextResponse.json(
          { message: 'Name and email are required' },
          { status: 400 }
      );
    }

    // Placeholder for actual database handling
    // You might want to use a database or email service here
    console.log('Form Data:', formData);

    // Simulate saving data
    // await saveFormData(formData);  // Replace with actual implementation

    return NextResponse.json(
        { message: 'Form submitted successfully' },
        { status: 200 }
    );
  } catch (error) {
    // Handle unexpected errors
    console.error('Error handling form submission:', error);
    return NextResponse.json(
        { message: 'Internal Server Error' },
        { status: 500 }
    );
  }
}
