"use client";

import { useState } from "react";
import { User, Phone, MapPin } from "lucide-react";

const cities = ["Delhi", "Gurugram", "Noida", "Faridabad"];

export default function ContactUsFormCommon() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 mt-10 mb-10">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Content (Desktop Visual Section) */}
          <div className="hidden md:flex flex-col justify-center bg-teal-600 text-white p-10">
            <h2 className="text-3xl font-semibold mb-3">Contact Us</h2>
            <p className="text-teal-100 mb-6">
              Share your details and our team will reach out to you within 24
              hours.
            </p>

            <ul className="space-y-3 text-sm">
              <li>✔ Free consultation</li>
              <li>✔ Expert guidance</li>
              <li>✔ Quick response</li>
            </ul>
          </div>

          {/* Right Form Section */}
          <div className="p-6 md:p-10">
            {/* Mobile Header */}
            <div className="text-center md:text-left mb-6 md:hidden">
              <h2 className="text-xl font-semibold">
                Contact <span className="text-teal-600">Us</span>
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                We’ll get back to you shortly
              </p>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-600 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                </div>
              </div>

              {/* Mobile */}
              <div>
                <label className="text-sm text-gray-600">Mobile Number</label>
                <div className="relative mt-1">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-600 w-4 h-4" />
                  <input
                    type="tel"
                    placeholder="10 digit number"
                    className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-teal-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* City */}
            <div className="mt-6">
              <label className="text-sm text-gray-600 mb-2 block">
                Select City
              </label>

              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <button
                    key={city}
                    type="button"
                    onClick={() => setSelectedCity(city)}
                    className={`px-4 py-2 rounded-full text-sm border transition ${
                      selectedCity === city
                        ? "bg-teal-600 text-white border-teal-600"
                        : "border-teal-300 text-teal-600 hover:bg-teal-50"
                    }`}
                  >
                    <MapPin className="inline w-4 h-4 mr-1" />
                    {city}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="mt-8 w-full bg-teal-600 text-white py-3 rounded-md text-lg font-medium shadow-md hover:bg-teal-700 transition">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
