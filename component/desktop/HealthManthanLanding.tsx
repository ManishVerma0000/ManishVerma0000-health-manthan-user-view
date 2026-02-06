"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Globe,
  Clock,
  Wallet,
  Check,
  ChevronRight,
} from "lucide-react";
import OurMissionSection from "@/component/desktop/DoctorMission";
import { getSurgeryList } from "@/api/services/surgery.service";
import { useRouter } from "next/navigation";
import { bookAppointment } from "@/api/services/appointment.service";
import { ToastContainer, toast } from "react-toastify";
import BookingModal from "../common/Bookingmodal";
import FooterDesktop from "./FooterDesktop";

// import { bookAppointment } from "../services/appointment.service";

const features = [
  {
    icon: Shield,
    title: "Get Free Consulations ",
  },
  {
    icon: Globe,
    title: "Verified Doctor",
  },
  {
    icon: Clock,
    title: "24/7 Support",
  },
  {
    icon: Wallet,
    title: "Cashless Treatment Facility",
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
    date: "",
  });
  const [surgeries, setSurgeries] = useState<any[]>();
  const [loading, setLoading] = useState(true);
  const handleSurgeryPageDetails = () => {
    router.push(`surgery`);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        service: formData.service,
        branch: formData.branch,
        date: formData.date,
      };
      const res = await bookAppointment(payload);
      console.log("Success:", res);
      toast("Form Submitted Successfully!");

      // Reset form
      setFormData({
        name: "",
        phone: "",
        service: "",
        branch: "",
        date: "",
      });
    } catch (error) {
      alert("Something went wrong ❌");
      toast("Form not Submitted!");
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gray-500 text-sm font-medium mb-2">
              Your trusted healthcare partner
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
              Connecting patients with{" "}
              <span className="bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                hospitals & doctors
              </span>
            </h1>
            <p className="text-gray-600 mb-6 lg:mb-8 max-w-xl leading-relaxed text-sm sm:text-base">
              Every day, we bring patient care to everyone&apos;s reach. Let us
              connect you with a healthcare provider today!
            </p>
            <Link
              href="/find-doctor"
              className="inline-flex items-center gap-2 border-2 border-teal-500 text-teal-600 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-teal-50 transition font-medium text-sm sm:text-base"
            >
              Find a Doctor
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-5 sm:p-6 md:p-8 order-1 lg:order-2">
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

              <div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition font-medium"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-16 pt-8 sm:pt-12 border-t border-gray-200">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-2 sm:gap-3 text-[#00008B]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-500" />
              </div>
              <span className="font-medium text-sm sm:text-base">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Specialized Care Areas */}
      <section id="specialties" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              Specialized Care Areas.
            </h2>
            <p className="text-gray-600 sm:text-gray-800">
              Your health, our priority.
            </p>
          </div>
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {surgeries?.map((item) => (
                <div
                  key={item?._id}
                  className="bg-white rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition group cursor-pointer transform hover:scale-[1.02] active:scale-[0.98]"
                  onClick={() => {
                    handleSurgeryPageDetails();
                  }}
                >
                  {/* Icon Wrapper */}
                  <div className="flex justify-center  mb-4">
                    <div className="w-14 h-14 bg-teal-50 rounded-lg flex items-center justify-center group-hover:bg-teal-100 transition overflow-hidden">
                      <img
                        src={item?.icon}
                        alt={item?.surgeryName}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  </div>

                  {/* Title (Hide on Mobile) */}
                  <h3 className=" lg:block text-gray-500 text-center  font-semibold  mb-2">
                    {item?.surgeryName}
                  </h3>

                  {/* Description (Optional: Hide on Mobile if needed) */}
                  <p className="hidden lg:block text-gray-500 text-sm line-clamp-3">
                    {item?.paragraph}
                  </p>

                  {/* Category (Hide on Mobile) */}
                  <p className="hidden lg:block text-xs mt-2 text-gray-700 font-medium">
                    {item?.surgeryCategory?.categoryName}
                  </p>
                </div>
              ))}
            </div>
          )}
          {!loading && surgeries && surgeries.length > 0 && (
            <div className="flex justify-center items-center mt-6 sm:mt-8">
              <button
                onClick={() => {
                  handleSurgeryPageDetails();
                }}
                className="px-6 py-3 sm:px-8 sm:py-4 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg transition duration-300 text-sm sm:text-base"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Healthcare Simplified */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 lg:mb-8">
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
            <div className="relative rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2 mb-8 lg:mb-0">
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
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-14">
            Get care in three easy steps.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition"
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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-14">
            Proven Records We Delivered
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 sm:p-8 text-center text-white"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
              What our patients say
            </h2>
            <p className="text-gray-500">Hear from our patients</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
              Ready to take control of your health?
            </h2>
            <p className="text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Join thousands of satisfied patients who trust us for their
              healthcare needs. Get started today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-appointment"
                className="inline-block bg-white text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition font-medium"
              >
                Get Consultations
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className=" text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition font-medium  mainpagebookappintment"
              >
                Book Your Appointment
              </button>
            </div>
          </div>
        </div>
      </section>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <FooterDesktop />
    </div>
  );
}
