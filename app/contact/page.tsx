// app/contact/page.tsx
export default function ContactUs() {
    return (
      <section className="container mx-auto text-center py-10">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="mt-4 text-lg">
          Reach out to us for any inquiries or to discuss your project needs. We&apos;re here to help!
        </p>
        <form className="mt-6 flex flex-col items-center">
          <input
            type="text"
            placeholder="Your Name"
            className="w-1/2 px-4 py-2 mb-4 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-1/2 px-4 py-2 mb-4 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-1/2 px-4 py-2 mb-4 border rounded-lg"
            rows={5}
          />
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">
            Send Message
          </button>
        </form>
      </section>
    );
  }
  