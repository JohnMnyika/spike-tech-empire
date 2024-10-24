// app/home/page.tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to Spike Tech Empire</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Your partner for cutting-edge tech solutions in computer science and programming.
        </p>
        <Link href="/services">
          <a className="mt-6 inline-block px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition duration-200">
            Explore Our Services
          </a>
        </Link>
      </header>

      {/* Services Overview Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="mt-4 text-lg">
          We offer a variety of solutions to meet your tech needs.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Custom Software Development</h3>
            <p className="mt-2">
              Tailored solutions to streamline your business processes and enhance productivity.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="mt-2">
              High-quality websites designed to engage users and drive conversions.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Mobile App Development</h3>
            <p className="mt-2">
              Innovative mobile applications that deliver exceptional user experiences.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">IT Consulting</h3>
            <p className="mt-2">
              Expert advice to help you navigate the ever-evolving tech landscape.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Cloud Computing Solutions</h3>
            <p className="mt-2">
              Scalable and secure cloud services tailored to your business needs.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold">Technical Support</h3>
            <p className="mt-2">
              Reliable support to ensure your systems run smoothly and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-10 text-center">
        <h2 className="text-3xl font-bold">Ready to Transform Your Business?</h2>
        <p className="mt-4">Get in touch with us to discuss your project.</p>
        <Link href="/contact">
          <a className="mt-6 inline-block px-8 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition duration-200">
            Contact Us
          </a>
        </Link>
      </section>
    </div>
  );
};

export default Home;
