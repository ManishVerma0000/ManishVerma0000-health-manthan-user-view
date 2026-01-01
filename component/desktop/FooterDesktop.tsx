"use client";
import { Activity } from "lucide-react";

export default function FooterDesktop() {
  return (
    <>
      <footer className="bg-gradient-to-br from-indigo-950 to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 mb-8">
            {[1, 2, 3, 4, 5, 6].map((dot) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  dot === 3 ? "bg-white" : "bg-indigo-700"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <Activity className="w-8 h-8 text-teal-400" />
            <span className="text-2xl font-bold">Health Manthan</span>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="w-10 h-10 bg-indigo-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
            >
              f
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-indigo-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
            >
              in
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-indigo-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
            >
              📷
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-indigo-800 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
            >
              ▶
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Type of Surgery</h3>
              <ul className="space-y-2 text-sm text-indigo-300">
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Eye Surgery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Kidney
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Heart
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Type of Surgery
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Patient</h3>
              <ul className="space-y-2 text-sm text-indigo-300">
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Search Hospitals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Search Doctors
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Book Appointment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Free Consultation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Health Manthan</h3>
              <ul className="space-y-2 text-sm text-indigo-300">
                <li>
                  <a href="#" className="hover:text-teal-400">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    How We Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Why Choose Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Hospitals</h3>
              <ul className="space-y-2 text-sm text-indigo-300">
                <li>
                  <a href="#" className="hover:text-teal-400">
                    Hospital Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400">
                    QR Reader
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm text-indigo-300">
                <li>+91 9797097975</li>
                <li>1234567890</li>
                <li>91 Contact Email</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-indigo-800 pt-6 text-center text-sm text-indigo-400">
            Copyright © 2025 All rights reserved. Terms & Condition
          </div>
        </div>
      </footer>
    </>
  );
}
