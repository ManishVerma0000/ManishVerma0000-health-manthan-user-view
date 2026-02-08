"use client";

import { useState } from "react";
import Footer from "./FooterMobile";
import SideBarMobile from "./SidebarMobile";
import { Menu } from "lucide-react";

export default function AboutUsMobile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SideBarMobile
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
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

      {/* HERO */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-10">
        <h1 className="text-3xl font-bold mb-3">About Us</h1>
        <p className="text-sm opacity-90">
          Making quality healthcare accessible for everyone
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="px-4 py-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Who We Are</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Health Vandnam is a digital healthcare platform that connects patients
          with trusted hospitals, doctors, and medical services. Our goal is to
          simplify healthcare access and decision-making for everyone.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="px-4 py-6 bg-white">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">What We Do</h2>

        <div className="space-y-4">
          {[
            "Doctor & Hospital Discovery",
            "Appointment Booking",
            "Expert Medical Consultation",
            "Trusted Healthcare Network",
          ].map((item) => (
            <div key={item} className="border border-cyan-200 rounded-lg p-4">
              <p className="text-cyan-700 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section className="px-4 py-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          Our Mission
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          To empower patients with transparent, reliable, and fast access to
          healthcare services through technology and trusted partnerships.
        </p>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
