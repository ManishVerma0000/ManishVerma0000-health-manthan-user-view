"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Shield,
  Globe,
  Clock,
  Wallet,
  Heart,
  Stethoscope,
  Eye,
  Brain,
  Bone,
  Droplets,
  Pill,
  Baby,
  Check,
  ChevronRight,
} from "lucide-react";
import OurMissionSection from "@/component/desktop/DoctorMission";
import FooterDesktop from "@/component/desktop/FooterDesktop";
import NavigationDesktop from "@/component/desktop/NavigationDesktop";
import { getSurgeryList } from "@/api/services/surgery.service";
import { useRouter } from "next/navigation";

const specialties = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Specializing in heart-related conditions",
  },
  {
    icon: Stethoscope,
    title: "Dentistry",
    description: "Complete dental care and oral health",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Expert eye care and vision correction",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Treatment for brain and nervous system",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Bone, joint, and muscle specialists",
  },
  {
    icon: Droplets,
    title: "Nephrology",
    description: "Kidney and urinary system care",
  },
  {
    icon: Pill,
    title: "Oncology",
    description: "Cancer treatment and care",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Healthcare for children",
  },
];

const features = [
  {
    icon: Shield,
    title: "Expert Specialists",
  },
  {
    icon: Globe,
    title: "Trusted Technology",
  },
  {
    icon: Clock,
    title: "24/7 Support",
  },
  {
    icon: Wallet,
    title: "Affordable Price",
  },
];

const healthcareBenefits = [
  {
    title: "Expert Diagnose",
    description:
      "Our experienced doctors provide accurate diagnosis using advanced medical knowledge and technology.",
  },
  {
    title: "Latest Technology",
    description:
      "We use state-of-the-art equipment and modern techniques for better treatment outcomes.",
  },
  {
    title: "Affordable Cost",
    description:
      "Quality healthcare at reasonable prices with transparent pricing and various payment options.",
  },
  {
    title: "24/7 Available",
    description:
      "Round-the-clock support and emergency services whenever you need us.",
  },
];

const steps = [
  {
    color: "bg-teal-500",
    title: "1. Consult Online",
    description:
      "Book an online consultation with our expert doctors from the comfort of your home.",
  },
  {
    color: "bg-blue-500",
    title: "2. Connect with Doctor",
    description:
      "Connect with the right specialist who understands your health needs.",
  },
  {
    color: "bg-emerald-500",
    title: "3. Get Solution",
    description:
      "Receive personalized treatment plans and follow-up care for your recovery.",
  },
];

const stats = [
  { value: "500+", label: "Happy Patients" },
  { value: "100+", label: "Total Doctors" },
  { value: "50+", label: "Hospital Rooms" },
  { value: "200+", label: "Total Staff" },
];

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

export default function NewDesignPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    branch: "",
  });
  const [surgeries, setSurgeries] = useState<any[]>();
  const [loading, setLoading] = useState(true);
  const handleSurgeryPageDetails = () => {
    router.push(`surgery`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };
  useEffect(() => {
    const fetchSurgeries = async () => {
      try {
        const data = await getSurgeryList();
        setSurgeries(data.data || data);
      } catch (error) {
        console.error("Error fetching surgeries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSurgeries();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header / Navigation */}
      <NavigationDesktop />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-2">
              Your trusted healthcare partner
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Connecting patients with{" "}
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                hospitals & doctors
              </span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-xl leading-relaxed">
              Every day, we bring patient care to everyone&apos;s reach. Let us
              connect you with a healthcare provider today!
            </p>
            <Link
              href="/find-doctor"
              className="inline-flex items-center gap-2 border-2 border-teal-500 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition font-medium"
            >
              Find a Doctor
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Book Your Appointment!
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
              />
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white"
              >
                <option value="">Select Service</option>
                <option value="consultation">General Consultation</option>
                <option value="surgery">Surgery</option>
                <option value="checkup">Health Checkup</option>
              </select>
              <select
                value={formData.branch}
                onChange={(e) =>
                  setFormData({ ...formData, branch: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none bg-white"
              >
                <option value="">Select Branch</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="bangalore">Bangalore</option>
              </select>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition font-medium"
              >
                Find a Doctor
              </button>
            </form>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-3 text-gray-600"
            >
              <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-teal-500" />
              </div>
              <span className="font-medium">{feature.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Specialized Care Areas */}
      <section id="specialties" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Specialized Care Areas.
            </h2>
            <p className="text-black">Your health, our priority.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {surgeries?.map((item) => (
              <div
                key={item?._id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group   
  transform
  hover:scale-105
  active:scale-95"
                onClick={() => {
                  handleSurgeryPageDetails();
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-100 transition overflow-hidden">
                  <img
                    src={item?.icon}
                    alt={item?.surgeryName}
                    className="w-8 h-8 object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item?.surgeryName}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm line-clamp-3">
                  {item?.paragraph}
                </p>

                {/* Category */}
                <p className="text-xs mt-2 text-blACK-600 font-medium">
                  {item?.surgeryCategory?.categoryName}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={() => {
                handleSurgeryPageDetails();
              }}
              className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg transition duration-300"
            >
              View All
            </button>
          </div>
        </div>
      </section>

      {/* Healthcare Simplified */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Healthcare Simplified, Just For You!
              </h2>
              <ul className="space-y-6">
                {healthcareBenefits.map((benefit) => (
                  <li key={benefit.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/hospital.jpg"
                alt="Modern hospital"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <OurMissionSection />
      {/* Get Care in Three Easy Steps */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-14">
            Get care in three easy steps.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
              >
                <div
                  className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mb-6`}
                >
                  <span className="text-3xl font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/about-us"
              className="inline-block bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Proven Records */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-14">
            Proven Records We Delivered
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 text-center text-white"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              What our patients say
            </h2>
            <p className="text-gray-500">Hear from our patients</p>
          </div>
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
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to take control of your health?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied patients who trust us for their
              healthcare needs. Get started today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-appointment"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-medium"
              >
                Get Started
              </Link>
              <Link
                href="/about-us"
                className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FooterDesktop />
    </div>
  );
}
