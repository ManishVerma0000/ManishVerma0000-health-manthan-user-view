"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  User,
  Smartphone,
  MapPinned,
  MessageSquare,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { createContactUs } from "@/api/services/contact-us.service";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    remark: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const payload = {
        name: formData.name,
        mobileNumber: formData.mobile,
        email: formData.email,
        city: formData.city,
        remark: formData.remark,
      };
      const res = await createContactUs(payload);
      console.log(res, "res");
      toast("Message sent successfully ✅");
      setFormData({
        name: "",
        mobile: "",
        email: "",
        city: "",
        remark: "",
      });
    } catch (error) {
      toast("Failed to send message ❌");
    }
  };

  return (
    <div className="min-h-screen  from-blue-50 to-cyan-50 flex items-center justify-center p-4">
      <ToastContainer />
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-[350px_1fr] gap-0">
          {/* Left Panel - Contact Info */}
          <div className=" from-blue-100 to-cyan-100 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Get in touch
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              Reach our care team for any questions about surgeries, hospitals
              or appointments.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Address</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    HealthConnect Care Desk
                    <br />
                    Mumbai, Maharashtra
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Phone</p>
                  <p className="text-gray-600 text-sm">+91 98765 43210</p>
                  <p className="text-gray-500 text-xs mt-1">
                    Mon–Sat, 9 AM – 8 PM
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800 mb-1">Email</p>
                  <p className="text-gray-600 text-sm">
                    support@healthconnect.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Send us a message
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              Share your details and our care coordinator will call you back to
              guide you on doctors, hospitals and surgery options.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Mobile and Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    required
                  />
                </div>
              </div>

              {/* City */}
              <div className="relative">
                <MapPinned className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  required
                />
              </div>

              {/* Remark */}
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                <textarea
                  name="remark"
                  placeholder="Remark"
                  value={formData.remark}
                  onChange={handleChange}
                  rows={4}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-4">
                <p className="text-gray-500 text-sm">
                  We typically respond within 15–30 minutes during working
                  hours.
                </p>
                <button
                  type="submit"
                  className="bg-[#0E8ECF] text-white font-medium px-8 py-3 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
