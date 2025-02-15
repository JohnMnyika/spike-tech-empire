"use client";

import { useState } from "react";
import QuoteForm from "../../components/QuoteForm"; // Correct import path

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleFormSubmit = (success: boolean) => {
    if (success) {
      setSubmitted(true);
      setStatusMessage(
          "Your message has been successfully sent. We will get back to you soon."
      );
    } else {
      setStatusMessage("Oops! Something went wrong. Please try again.");
    }
  };

  return (
      <section className="container mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white p-8 shadow-lg rounded-lg">
            {!submitted ? (
                <>
                  <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
                  <QuoteForm onSubmitSuccess={handleFormSubmit} /> {/* Use the QuoteForm component */}
                  {statusMessage && (
                      <p
                          className={`mt-4 text-center ${
                              statusMessage.includes("success")
                                  ? "text-green-600"
                                  : "text-red-600"
                          }`}
                      >
                        {statusMessage}
                      </p>
                  )}
                </>
            ) : (
                <div className="text-center">
                  <h2 className="text-2xl font-semibold mb-6">Thank You!</h2>
                  <p className="text-lg">{statusMessage}</p>
                </div>
            )}
          </div>

          <div className="bg-blue-600 text-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="text-lg">
              Feel free to reach out to us using the information below:
            </p>
            <div className="mt-8">
              <p className="mb-4">
                <span className="font-medium">Email:</span>
                <a href="mailto:hellospiketech@gmail.com" className="underline">
                  hellospiketech@gmail.com
                </a>
              </p>
              <p className="mb-4">
                <span className="font-medium">Phone:</span>
                <a href="tel:+254700878430" className="underline">
                  +254 700 878 430
                </a>
              </p>
              <p className="mb-4">
                <span className="font-medium">Location:</span> Moi Avenue Nairobi
              </p>
              <p className="mb-4">
                <span className="font-medium">Office Hours:</span> Mon - Fri, 8 AM
                - 5 PM
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Follow Us:</h3>
              <div className="flex space-x-4 mt-4">
                <a href="https://facebook.com" className="hover:underline">
                  Facebook
                </a>
                <a href="https://twitter.com" className="hover:underline">
                  Twitter
                </a>
                <a href="https://linkedin.com" className="hover:underline">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Our Location</h3>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8173395297!2d36.820987074098!3d-1.283462035621215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6678064cf%3A0x956bb6f5e0ab2aac!2sMoi%20Ave%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1739654239084!5m2!1sen!2ske"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}