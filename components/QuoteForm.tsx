"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser"; // Use the browser SDK
import { toast } from "react-toastify";

interface QuoteFormProps {
    onSubmitSuccess: (success: boolean) => void; // Callback for form submission
}

export default function QuoteForm({ onSubmitSuccess }: QuoteFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Validate form inputs
    const validateForm = () => {
        const newErrors = { name: "", email: "", phone: "", message: "" };
        let isValid = true;

        // Validate name
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        // Validate phone (optional)
        const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
        if (formData.phone && !phoneRegex.test(formData.phone)) {
            newErrors.phone = "Invalid phone number";
            isValid = false;
        }

        // Validate message
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Validate a single field
    const validateField = (name: string, value: string) => {
        let error = "";

        switch (name) {
            case "name":
                if (!value.trim()) error = "Name is required";
                break;
            case "email":
                if (!value.trim()) {
                    error = "Email is required";
                } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                    error = "Invalid email address";
                }
                break;
            case "phone":
                if (value && !/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(value)) {
                    error = "Invalid phone number";
                }
                break;
            case "message":
                if (!value.trim()) error = "Message is required";
                break;
            default:
                break;
        }

        setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
    };

    // Handle input change
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear the error for the current field when the user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        }
    };

    // Handle input blur (validate on blur)
    const handleBlur = (
        e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validate form inputs
        if (!validateForm()) {
            return; // Stop submission if validation fails
        }

        setIsSubmitting(true);

        try {
            // Send the form data using EmailJS
            const response = await emailjs.send(
                "service_dtwmqbo", // Your EmailJS service ID
                "template_z1dwlkh", // Your EmailJS template ID
                formData,
                "obWSOrvkulvNI08W0" // Your EmailJS user ID (public key)
            );

            // Log the EmailJS response for debugging
            console.log("EmailJS Response:", response);

            // Show success toast
            toast.success("Your message has been sent successfully!", {
                position: "top-center",
                autoClose: 3000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            // Reset form
            setFormData({ name: "", email: "", phone: "", message: "" });
            setErrors({ name: "", email: "", phone: "", message: "" });

            // Notify parent component of success
            onSubmitSuccess(true);
        } catch (error) {
            console.error("Failed to send message:", error);

            // Show error toast
            toast.error("Failed to send message. Please try again.", {
                position: "top-center",
                autoClose: 3000, // Close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            // Notify parent component of failure
            onSubmitSuccess(false);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                {/* Name Field */}
                <div>
                    <label htmlFor="name" className="block text-lg font-medium mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                            errors.name
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-blue-500"
                        }`}
                        aria-invalid={!!errors.name}
                        aria-describedby="name-error"
                    />
                    {errors.name && (
                        <p id="name-error" className="text-red-500 text-sm mt-1">
                            {errors.name}
                        </p>
                    )}
                </div>

                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-lg font-medium mb-2">
                        Your Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                            errors.email
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-blue-500"
                        }`}
                        aria-invalid={!!errors.email}
                        aria-describedby="email-error"
                    />
                    {errors.email && (
                        <p id="email-error" className="text-red-500 text-sm mt-1">
                            {errors.email}
                        </p>
                    )}
                </div>

                {/* Phone Field */}
                <div>
                    <label htmlFor="phone" className="block text-lg font-medium mb-2">
                        Your Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                            errors.phone
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-blue-500"
                        }`}
                        aria-invalid={!!errors.phone}
                        aria-describedby="phone-error"
                    />
                    {errors.phone && (
                        <p id="phone-error" className="text-red-500 text-sm mt-1">
                            {errors.phone}
                        </p>
                    )}
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className="block text-lg font-medium mb-2">
                        Your Message
                    </label>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                            errors.message
                                ? "border-red-500 focus:ring-red-500"
                                : "border-gray-300 focus:ring-blue-500"
                        }`}
                        rows={5}
                        aria-invalid={!!errors.message}
                        aria-describedby="message-error"
                    />
                    {errors.message && (
                        <p id="message-error" className="text-red-500 text-sm mt-1">
                            {errors.message}
                        </p>
                    )}
                </div>
            </div>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
                {isSubmitting ? "Sending..." : "Send Message"}
            </button>
        </form>
    );
}