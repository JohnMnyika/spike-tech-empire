// app/about/page.tsx

export default function About() {
  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">About Us</h1>

      {/* Company Overview */}
      <section className="mb-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
        <p className="text-lg leading-8 text-gray-700 max-w-3xl mx-auto">
          Spike Tech Empire is a pioneering tech solutions provider committed to transforming businesses with
          innovative technology solutions. Specializing in software development, networking, and technical support,
          our experienced team combines technical expertise with a passion for progress to help you excel in a 
          digital-first world.
        </p>
      </section>

      {/* Mission, Vision, Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
        {/* Mission */}
        <div className="bg-gray-100 p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h3>
          <p className="text-lg text-gray-700">
            To empower businesses with cutting-edge technology, driving growth, efficiency, and resilience in 
            today&apos;s competitive landscape.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-gray-100 p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h3>
          <p className="text-lg text-gray-700">
            To become a global leader in tech solutions, known for our commitment to quality, innovation, 
            and unparalleled client satisfaction.
          </p>
        </div>

        {/* Core Values */}
        <div className="bg-gray-100 p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-blue-600">Our Core Values</h3>
          <ul className="list-disc list-inside text-left text-lg text-gray-700 space-y-2">
            <li><strong>Innovation:</strong> Pioneering new ideas and solutions to stay ahead in tech.</li>
            <li><strong>Customer Focus:</strong> Delivering tailored solutions that meet our clients&apos; unique needs.</li>
            <li><strong>Integrity:</strong> Building trust through honesty and transparency in all we do.</li>
            <li><strong>Quality Excellence:</strong> Striving for excellence in every project, big or small.</li>
            <li><strong>Collaboration:</strong> Working together to achieve common goals.</li>
          </ul>
        </div>
      </section>

      {/* Team Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">Meet Our Team</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Our team of experts is the backbone of Spike Tech Empire, committed to providing outstanding service and 
          creating transformative solutions. Get to know the dedicated individuals who make it all possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="/images/team/john-doe.jpg" alt="John Doe" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-bold mb-2">John Doe</h4>
            <p className="text-blue-600 font-semibold">CEO & Founder</p>
            <p className="text-sm text-gray-600 mt-4">
              John brings over 15 years of experience in tech leadership, guiding Spike Tech Empire to new heights 
              with his strategic vision and passion for innovation.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="/images/team/jane-smith.jpg" alt="Jane Smith" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-bold mb-2">Jane Smith</h4>
            <p className="text-blue-600 font-semibold">Head of Development</p>
            <p className="text-sm text-gray-600 mt-4">
              Jane is an experienced software engineer, leading our development team with a focus on innovation, 
              quality, and collaboration.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 shadow-lg rounded-lg text-center">
            <img src="/images/team/mark-jones.jpg" alt="Mark Jones" className="w-32 h-32 mx-auto rounded-full mb-4" />
            <h4 className="text-xl font-bold mb-2">Mark Jones</h4>
            <p className="text-blue-600 font-semibold">Head of Technical Support</p>
            <p className="text-sm text-gray-600 mt-4">
              Mark ensures our clients receive top-notch support and maintenance, keeping systems efficient and secure.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
