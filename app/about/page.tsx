// app/about/page.tsx

export default function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">About Us</h1>

      {/* Company Overview */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
        <p className="text-lg leading-8 text-gray-700 max-w-3xl mx-auto">
          At Spike Tech Empire, we’re dedicated to driving progress through technology. From robust software solutions to comprehensive networking and technical support, our team of experts leverages deep technical knowledge and industry insights to empower your business. We believe in aligning technology with your vision to help you excel in a fast-paced digital world.
        </p>
      </section>

      {/* Mission, Vision, Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
        {/* Mission */}
        <div className="bg-gray-100 p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
          <p className="text-lg text-gray-700">
            To empower businesses by integrating innovative technology solutions that drive growth, streamline processes, and foster resilience in an evolving marketplace.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-100 p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h3>
          <p className="text-lg text-gray-700">
            To establish a global reputation as a trusted leader in tech solutions, celebrated for our dedication to quality, creativity, and customer satisfaction.
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-gray-100 p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Core Values</h3>
          <ul className="list-disc list-inside text-left text-lg text-gray-700 space-y-2">
            <li><strong>Innovation:</strong> Continuously pursuing new ideas to stay ahead in tech advancements.</li>
            <li><strong>Customer-Centricity:</strong> Designing solutions that cater to the unique needs of our clients.</li>
            <li><strong>Integrity:</strong> Building strong relationships through transparency and trustworthiness.</li>
            <li><strong>Excellence:</strong> Maintaining high standards in every aspect of our work.</li>
            <li><strong>Collaboration:</strong> Fostering teamwork to achieve shared goals effectively.</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          The Spike Tech Empire team brings together skilled professionals who are passionate about delivering impactful tech solutions. Discover the leaders guiding our journey of excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="/profile.png" alt="Jane Doe" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-bold mb-2">John Mnyika</h4>
            <p className="text-blue-600 font-semibold">CEO & Founder</p>
            <p className="text-sm text-gray-600 mt-4">
              With over 15 years of experience in tech leadership, Jane is the visionary behind Spike Tech Empire, setting strategic direction and fostering innovation to drive company growth.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="/profile.png" alt="Alex Smith" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-bold mb-2">John Mnyika</h4>
            <p className="text-blue-600 font-semibold">Head of Development</p>
            <p className="text-sm text-gray-600 mt-4">
              An accomplished software engineer, Alex leads our development team with a focus on high-quality, client-centered solutions that leverage the latest technological advances.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="/profile.png" alt="Taylor Brown" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-bold mb-2">John Mnyika</h4>
            <p className="text-blue-600 font-semibold">Head of Technical Support</p>
            <p className="text-sm text-gray-600 mt-4">
              Taylor ensures our clients receive unparalleled support and maintenance, managing systems with precision to keep them secure and fully operational.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
