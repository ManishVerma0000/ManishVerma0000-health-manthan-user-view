"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BookingModal from "../common/Bookingmodal";

export default function NavigationDesktop() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo - centered on mobile, left on desktop (no sidebar or Find Doctor on mobile) */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-1 md:flex-initial justify-center md:justify-start"
          >
            <Image
              src={"/logo.svg"}
              alt="Health Vandnam Logo"
              width={300}
              height={300}
              className="object-contain max-h-10 w-auto"
            />
          </Link>

          {/* Desktop navigation - hidden on mobile */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-teal-500 transition"
            >
              Home
            </Link>
            <Link
              href="/surgery"
              className="text-gray-700 hover:text-teal-500 transition"
            >
              Surgery
            </Link>
            <Link
              href="/find-doctor"
              className="text-gray-700 hover:text-teal-500 transition"
            >
              Doctors
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-700 hover:text-teal-500 transition"
            >
              Contact Us
            </Link>
            <button className="px-6 py-2 rounded-lg bg-teal-600 transition font-medium border-2 flex justify-between border-r-2 navigation-appointment modalbtn">
              <Phone />
              +91 7056323473
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className=" text-white px-6 py-2 rounded-lg bg-teal-600 transition font-medium  border-2 border-teal-600 navigation-appointment modalbtn"
            >
              Book Your Appointment
            </button>
          </div>
          <BookingModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
      </nav>
    </header>
  );
}
