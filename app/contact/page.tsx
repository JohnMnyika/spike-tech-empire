// app/contact/page.tsx

'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setStatusMessage('Your message has been successfully sent. We will get back to you soon.');
      } else {
        setStatusMessage('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatusMessage('Error submitting form. Please try again later.');
    }
  };

  return (
    <section className="container mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-lg">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-lg font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-lg font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-lg font-medium mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="Write your message here..."
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
              {statusMessage && <p className="mt-4 text-center text-red-600">{statusMessage}</p>}
            </>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-6">Thank You!</h2>
              <p className="text-lg">{statusMessage}</p>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="bg-blue-600 text-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <p className="text-lg">Feel free to reach out to us using the information below:</p>
          <div className="mt-8">
            <p className="mb-4">
              <span className="font-medium">Email:</span> 
              <a href="mailto:hellospiketech@gmail.com" className="underline"> hellospiketech@gmail.com </a>
            </p>
            <p className="mb-4">
              <span className="font-medium">Phone:</span> 
              <a href="tel:+254700878430" className="underline"> +254 700 878 430 </a>
            </p>
            <p className="mb-4">
              <span className="font-medium">Location:</span> Moi Avenue Nairobi
            </p>
            <p className="mb-4">
              <span className="font-medium">Office Hours:</span> Mon - Fri, 8 AM - 5 PM
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold">Follow Us:</h3>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" className="hover:underline"> Facebook </a>
              <a href="https://twitter.com" className="hover:underline"> Twitter </a>
              <a href="https://linkedin.com" className="hover:underline"> LinkedIn </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
