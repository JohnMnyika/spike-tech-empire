// app/api/contact/route.ts
import { NextResponse } from "next/server";
import emailjs from "@emailjs/nodejs"; // Correct import

export async function POST(request: Request) {
  try {
    // Parse and validate the incoming JSON
    const formData = await request.json();

    // Validate form data (example: check for name and email fields)
    if (!formData.name || !formData.email) {
      return NextResponse.json(
          { message: "Name and email are required" },
          { status: 400 }
      );
    }

    // Log the form data for debugging
    console.log("Form Data:", formData);

    // Send the form data using EmailJS
    const emailjsResponse = await emailjs.send(
        "service_dtwmqbo", // Your EmailJS service ID
        "template_z1dwlkh", // Your EmailJS template ID
        formData,
        {
          publicKey: "obWSOrvkulvNI08W0", // Your EmailJS user ID (public key)
        }
    );

    // Log the EmailJS response for debugging
    console.log("EmailJS Response:", emailjsResponse);

    // Return success response
    return NextResponse.json(
        { message: "Form submitted successfully" },
        { status: 200 }
    );
  } catch (error) {
    // Handle unexpected errors
    console.error("Error handling form submission:", error);

    // Return error response
    return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
    );
  }
}