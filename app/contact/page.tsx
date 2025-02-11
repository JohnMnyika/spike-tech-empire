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
          </div>
        </div>
      </section>
  );
}