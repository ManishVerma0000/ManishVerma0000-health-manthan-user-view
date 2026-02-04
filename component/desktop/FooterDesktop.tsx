"use client";
import { Activity } from "lucide-react";

export default function FooterDesktop() {
  return (
    <>
      <footer className="bg-[#0A0F3F] hidden md:block text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            
            <span className="text-xl sm:text-2xl font-bold">
              Health Vandanam
            </span>
          </div>
          <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8 flex-wrap">
            <a
              href="https://www.facebook.com/share/16are2GEZ3/?mibextid=wwXIfr"
              className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
            >
              f
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
            >
              in
            </a>
            <a
              href="https://www.instagram.com/health_vandanam?igsh=MTgybjJscHdnZ3A3eg=="
              className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
            >
              📷
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center hover:bg-teal-500 transition"
            >
              ▶
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Type of Surgery
              </h3>
              <ul className="space-y-2 text-sm text-white">
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
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Patient
              </h3>
              <ul className="space-y-2 text-sm text-white">
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
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Health Manthan
              </h3>
              <ul className="space-y-2 text-sm text-white">
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
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                For Hospitals
              </h3>
              <ul className="space-y-2 text-sm text-white">
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
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Contact Us
              </h3>
              <ul className="space-y-2 text-sm text-white">
                <li>+91 9797097975</li>
                <li>1234567890</li>
                <li>91 Contact Email</li>
              </ul>
            </div>
          </div>

          <div className=" pt-4 sm:pt-6 text-center text-xs sm:text-sm text-white">
            Copyright © 2025 All rights reserved. Terms & Condition
          </div>
        </div>
      </footer>
    </>
  );
}
