"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import NavigationDesktop from "./NavigationDesktop";
import FooterDesktop from "./FooterDesktop";
import { useRouter } from "next/navigation";

interface StatCardProps {
  number: string;
  label: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
}

const HealthcareJourney: React.FC = () => {
  const router = useRouter();

  const handleSurgeryPageDetails = () => {
    router.push(`surgery`);
  };

  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("http://localhost:3000/categories/list");
        const data = await res.json();
        setCategories(data?.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const testimonials = [
    {
      quote:
        "Amazing healthcare experience! The doctors were professional and the staff was very caring. Highly recommend!",
      name: "Priya Sharma",
      image: "/happypatient.jpg",
    },
    {
      quote:
        "I had my treatment here and the results were excellent. Affordable and quality service.",
      name: "Rahul Verma",
      image: "/409738d1d049c4e6740e9c948392ed85.jpg",
    },
    {
      quote:
        "The best medical facility I have visited. Clean, modern, and the team is exceptional.",
      name: "Anita Patel",
      image: "/42ba50f4e76062ab6a6b1b43f0aabfb130f05a62.png",
    },
  ];

  const whyExist: ServiceCardProps[] = [
    {
      title: "We Listen",
      description:
        "We take the time to understand your unique health journey, concerns, and goals with genuine care.",
    },
    {
      title: "We Care",
      description:
        "Your wellbeing matters to us. We provide compassionate support at every step of your healthcare journey.",
    },
    {
      title: "We Solve",
      description:
        "We navigate the complexities of healthcare for you, finding solutions that truly work for your situation.",
    },
  ];

  const stats: StatCardProps[] = [
    { number: "250+", label: "Healthcare Partners" },
    { number: "150+", label: "Specialists Available" },
    { number: "12k+", label: "Patients Helped" },
    { number: "4.8/5", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen  from-sky-50 via-white to-sky-50">
      {/* Navigation */}

      <NavigationDesktop />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Bringing clarity and compassion to your{" "}
            <span className="text-transparent bg-clip-text bg-black">
              healthcare journey
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed ">
            Navigate complex healthcare decisions with confidence. Our expert
            care coordinators guide you to the right specialists, simplify
            insurance complexities, and ensure you receive personalized,
            compassionate care every step of the way.
          </p>
          <button className="px-8 py-4 bg-[#0F8F8F] text-white rounded-full hover:shadow-xl  font-semibold text-lg">
            Start Your Journey
          </button>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="aspect-video from-sky-100 to-blue-100 relative overflow-hidden rounded-xl">
            <img
              src="2e5bdc1fe432e9d67a9fc079c01a377983e6191c.jpg" // replace with your image path
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20" id="services">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-gray-500">Loading services...</p>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories?.map((item) => (
            <div
              onClick={() => {
                handleSurgeryPageDetails();
              }}
              key={item?._id}
              className="bg-[#E6F7FA] p-8 rounded-2xl border border-sky-100 hover:border-sky-300 transition-all hover:shadow-xl group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl mb-6 overflow-hidden bg-sky-100 group-hover:scale-110 transition-transform flex items-center justify-center">
                <img
                  src={item?.iconImage}
                  alt={item?.categoryName}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item?.categoryName}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item?.description || "No description available"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What drives us forward
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {whyExist.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all group border border-sky-100/50"
            >
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 shadow-md group-hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <div className="px-8">
        <section className="bg-[#1C5699]  py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Making a real impact in healthcare
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sky-200 text-lg font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Why We Exist (Text + Image) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why we exist
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Healthcare shouldn't feel overwhelming. We've seen too many
                people struggle to find the right care, navigate confusing
                systems, and feel lost in their own health journey.
              </p>
              <p>
                That's why we created a better way - one that puts you first,
                simplifies complexity, and connects you with the right care at
                the right time.
              </p>
              <p>
                Our team of experienced care coordinators and medical
                professionals work together to ensure you never have to face
                healthcare challenges alone.
              </p>
            </div>
            <button className="mt-8 px-8 py-3 bg-[#0F8F8F] text-white rounded-full hover:bg-sky-600 transition-all hover:shadow-lg font-medium">
              Learn More About Us
            </button>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              src="812e84849114d9a679ca5b6a192462073c216818.jpg" // replace with your image path / API image
              alt="Preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className=" from-sky-50 to-white py-20 px-15" id="team">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h3>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </section>

      <FooterDesktop />
    </div>
  );
};

export default HealthcareJourney;
