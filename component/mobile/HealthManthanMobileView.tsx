"use client";

import React, { useState } from "react";
import {
  Menu,
  Users,
  Building2,
  Award,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import SideBarMobile from "./SidebarMobile";
import Footer from "./FooterMobile";

const HealthVandnam: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const specialties = [
    { id: 1, title: "Eye Laser Surgery", isKidney: true },
    { id: 2, title: "Eye Laser Surgery", isKidney: true },
    { id: 3, title: "Eye Laser Surgery", isKidney: true },
    { id: 4, title: "Eye Laser Surgery", isKidney: false },
    { id: 5, title: "Eye Laser Surgery", isKidney: true },
    { id: 6, title: "Eye Laser Surgery", isKidney: true },
    { id: 7, title: "Eye Laser Surgery", isKidney: true },
    { id: 8, title: "Eye Laser Surgery", isKidney: false },
  ];

  const stats = [
    { icon: Users, value: "10000+", label: "Happy Patients" },
    { icon: Building2, value: "10000+", label: "Hospitals" },
    { icon: Award, value: "10000+", label: "Experienced Doctors" },
    { icon: ThumbsUp, value: "10000+", label: "Success Rate" },
  ];

  const promiseStats = [
    { value: "500+", label: "Happy Customers" },
    { value: "500+", label: "Happy Customers" },
    { value: "500+", label: "Happy Delivery" },
    { value: "500+", label: "Happy Customers" },
  ];

  const testimonials = [
    {
      name: "John Doe",
      text: "Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery",
      image: "JD",
    },
    {
      name: "Jane Smith",
      text: "Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery",
      image: "JS",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar Component */}

      <SideBarMobile
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      {/* Header */}

      <header className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-gray-700 hover:text-gray-900"
        >
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#1e3a8a]">Health</span>
          <span className="text-2xl font-bold text-[#0ea5e9]">Vandnam</span>
        </div>
        <div className="w-6"></div>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 py-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="relative z-10">
          <h1 className="text-2xl font-bold text-[#1e3a8a] mb-3">
            Find Right Doctors Here
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
            MBBS, DGO, DNB - Obstetrics & Gynecology, Fellowship in Reproductive
          </p>
        </div>

        {/* Decorative Medical Icons */}
        <div className="absolute right-0 top-0 w-48 h-full opacity-40">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Medical Icons Pattern */}
            <circle cx="150" cy="40" r="15" fill="#93c5fd" opacity="0.6" />
            <circle cx="170" cy="70" r="12" fill="#60a5fa" opacity="0.6" />
            <circle cx="140" cy="80" r="10" fill="#3b82f6" opacity="0.6" />
            <circle cx="160" cy="110" r="14" fill="#2563eb" opacity="0.6" />
            <circle cx="180" cy="140" r="11" fill="#93c5fd" opacity="0.6" />
            <circle cx="150" cy="150" r="13" fill="#60a5fa" opacity="0.6" />

            {/* Hexagons */}
            <polygon
              points="120,30 130,35 130,45 120,50 110,45 110,35"
              fill="#3b82f6"
              opacity="0.4"
            />
            <polygon
              points="140,120 150,125 150,135 140,140 130,135 130,125"
              fill="#2563eb"
              opacity="0.4"
            />
            <polygon
              points="170,100 180,105 180,115 170,120 160,115 160,105"
              fill="#60a5fa"
              opacity="0.4"
            />
          </svg>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="px-4 py-8">
        <h2 className="text-xl font-bold text-[#1e3a8a] mb-6">
          Our Specialties
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {specialties.map((specialty) => (
            <div
              key={specialty.id}
              className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg mb-3 flex items-center justify-center overflow-hidden">
                {specialty.isKidney ? (
                  <svg viewBox="0 0 100 120" className="w-16 h-20">
                    {/* Kidney illustration */}
                    <ellipse cx="50" cy="60" rx="30" ry="45" fill="#dc2626" />
                    <ellipse cx="50" cy="60" rx="20" ry="35" fill="#ef4444" />
                    <path
                      d="M 40 40 Q 50 50 60 40"
                      stroke="#b91c1c"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 38 60 Q 50 65 62 60"
                      stroke="#b91c1c"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      d="M 40 80 Q 50 75 60 80"
                      stroke="#b91c1c"
                      strokeWidth="2"
                      fill="none"
                    />

                    {/* Tubes */}
                    <rect
                      x="48"
                      y="100"
                      width="4"
                      height="15"
                      fill="#fca5a5"
                      rx="2"
                    />
                    <path
                      d="M 50 105 Q 60 110 65 120"
                      stroke="#dc2626"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 100 100" className="w-16 h-16">
                    {/* Eye laser surgery illustration */}
                    <circle
                      cx="50"
                      cy="50"
                      r="25"
                      fill="#0ea5e9"
                      opacity="0.3"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="15"
                      fill="#0284c7"
                      opacity="0.5"
                    />
                    <circle cx="50" cy="50" r="8" fill="#0c4a6e" />

                    {/* Laser beam */}
                    <line
                      x1="20"
                      y1="20"
                      x2="45"
                      y2="45"
                      stroke="#ef4444"
                      strokeWidth="2"
                    />
                    <line
                      x1="18"
                      y1="22"
                      x2="43"
                      y2="47"
                      stroke="#fca5a5"
                      strokeWidth="1"
                    />
                    <circle cx="20" cy="20" r="3" fill="#ef4444" />
                  </svg>
                )}
              </div>

              <h3
                className={`text-sm font-semibold ${
                  specialty.isKidney ? "text-gray-800" : "text-[#0ea5e9]"
                }`}
              >
                {specialty.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-8 bg-gradient-to-br from-[#0c4a6e] to-[#075985]">
        <h2 className="text-xl font-bold text-white mb-6">Why Choose Us</h2>

        <p className="text-white text-sm leading-relaxed mb-6 opacity-90">
          Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser
          Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery
        </p>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20"
            >
              <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                <stat.icon className="text-white" size={24} />
              </div>
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-white/80 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Plan Your Surgery Section */}
      <section className="px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-[4/3] bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e0f2fe' width='400' height='300'/%3E%3Ccircle cx='150' cy='150' r='80' fill='%2393c5fd' opacity='0.3'/%3E%3Ccircle cx='250' cy='120' r='60' fill='%2360a5fa' opacity='0.3'/%3E%3Cpath d='M100,150 Q150,100 200,150 T300,150' stroke='%230ea5e9' stroke-width='3' fill='none'/%3E%3C/svg%3E"
              alt="Doctor consultation"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 text-center">
            <h3 className="text-xl font-bold text-[#1e3a8a] mb-3">
              Plan Your Surgery
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser
              Surgery Eye Laser Surgery
            </p>
            <button className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg">
              Know More
            </button>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="px-4 py-8 bg-[#0c4a6e] mb-8">
        <div className="border-2 border-white/30 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Our Mission</h2>
          <div className="space-y-3">
            <p className="text-white/90 text-sm leading-relaxed">
              Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser
              Surgery Eye Laser Surgery Eye Laser Surgery
            </p>
            <p className="text-white/90 text-sm leading-relaxed">
              Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser
              Surgery Eye Laser Surgery Eye Laser Surgery
            </p>
            <p className="text-white/90 text-sm leading-relaxed">
              Eye Laser Surgery - Eye Laser Surgery Eye Laser Surgery Eye Laser
              Surgery
            </p>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="px-4 pb-8">
        <h2 className="text-xl font-bold text-[#1e3a8a] text-center mb-6">
          Promise Result We Delivered
        </h2>

        <div className="bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-2xl p-6">
          <div className="space-y-4">
            {promiseStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center"
              >
                <p className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-white/90 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-4 pb-8">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl">
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">Happy Patient</h3>
            <h4 className="text-lg font-semibold text-white/90 mb-4">
              Gives Us Confidence
            </h4>

            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0 text-sm">
                {testimonials[currentTestimonial].image}
              </div>
              <div className="flex-1">
                <p className="text-white/90 text-sm leading-relaxed">
                  {testimonials[currentTestimonial].text}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-white font-semibold">
                {testimonials[currentTestimonial].name}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="text-white" size={18} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="text-white" size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Testimonial Image */}
          <div className="h-40 bg-gradient-to-br from-blue-900 to-cyan-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 160'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%230c4a6e;stop-opacity:1'/%3E%3Cstop offset='100%25' style='stop-color:%23164e63;stop-opacity:1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='400' height='160' fill='url(%23grad)'/%3E%3Ccircle cx='100' cy='80' r='40' fill='white' opacity='0.1'/%3E%3Ccircle cx='300' cy='100' r='50' fill='white' opacity='0.08'/%3E%3C/svg%3E"
              alt="Testimonial background"
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default HealthVandnam;
