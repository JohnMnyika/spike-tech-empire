import Link from "next/link";
import { Cloud, Shield, Code, Server, Network, Users } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Software Development",
      description:
        "Tailored software solutions that fit your unique business requirements, including mobile and web applications.",
      icon: (
        <Code
          className="text-blue-600 w-12 h-12 mx-auto"
          aria-label="Code Icon"
        />
      ),
      link: "/contact",
    },
    {
      title: "Technical Support & Maintenance",
      description:
        "Reliable technical support and proactive maintenance services to keep your systems secure and efficient.",
      icon: (
        <Server
          className="text-blue-600 w-12 h-12 mx-auto"
          aria-label="Server Icon"
        />
      ),
      link: "/contact",
    },
    {
      title: "Networking Solutions",
      description:
        "Design, implement, and manage networks to support seamless, secure connectivity for your operations.",
      icon: (
        <Network
          className="text-blue-600 w-12 h-12 mx-auto"
          aria-label="Network Icon"
        />
      ),
      link: "/contact",
    },
    {
      title: "Cloud Solutions",
      description:
        "Scalable cloud solutions to optimize your resources and improve collaboration across your teams.",
      icon: (
        <Cloud
          className="text-blue-600 w-12 h-12 mx-auto"
          aria-label="Cloud Icon"
        />
      ),
      link: "/contact",
    },
    {
      title: "IT Consultancy",
      description:
        "Strategic guidance to help your business make the most of modern technology and stay ahead of the competition.",
      icon: (
        <Users
          className="text-blue-600 w-12 h-12 mx-auto"
          aria-label="Users Icon"
        />
      ),
      link: "/contact",
    },
    {
      title: "Cybersecurity",
      description:
        "Comprehensive cybersecurity services to protect your data and maintain trust with your customers.",
      icon: (
        <Shield
          className="text-blue-600 w-12 h-12 mx-auto"
          aria-label="Shield Icon"
        />
      ),
      link: "/contact",
    },
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">Our Services</h1>
      <p className="text-lg text-center mb-10 max-w-2xl mx-auto text-gray-700">
        At Spike Tech Empire, we offer a full spectrum of technology services
        tailored to meet your business needs. Our expertise spans across
        multiple domains to provide you with reliable, high-quality solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-8 shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">
              {service.title}
            </h3>
            <p className="text-lg text-gray-700 mb-6">{service.description}</p>
            <Link
              href={service.link}
              className="text-blue-600 font-bold hover:underline"
              aria-label={`Learn more about ${service.title}`}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
