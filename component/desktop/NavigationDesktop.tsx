"use client";

import Link from "next/link";
import { Activity, Menu, Phone } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import BookingModal from "../common/Bookingmodal";

interface NavigationDesktopProps {
  onMenuClick?: () => void;
}

export default function NavigationDesktop({
  onMenuClick,
}: NavigationDesktopProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Mobile menu button - visible only on mobile */}
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 -ml-2 text-gray-700 hover:text-teal-500 hover:bg-gray-100 rounded-lg transition"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          {/* Logo - centered on mobile, left on desktop */}
          <Link
            href="/"
            className="flex items-center gap-2 flex-1 md:flex-initial justify-center md:justify-start"
          >
            {/* Logo */}
            <Image
              src={"/logo.svg"}
              alt="Health Manthan Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </Link>
          <div className="md:hidden flex  items-left mt-4 ml-4">
            <button
              className="
                px-4 py-2
                border-2 border-teal-500
                text-teal-500
                font-semibold
                rounded-full
                bg-white
                hover:bg-teal-50
                transition
                shadow-sm
              "
            >
              Find Doctor
            </button>
          </div>

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
              Explore
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
            <button className=" text-[#2797A9] px-6 py-2 rounded-lg hover:bg-teal-600 transition font-medium border-2 flex justify-between border-r-2">
              <Phone />
              +91 7056323473
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#2797A9] text-white px-6 py-2 rounded-lg hover:bg-teal-600 transition font-medium"
            >
              Book Your Appointment
            </button>
          </div>
          <BookingModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          {/* Spacer for mobile to balance the menu button */}
          <div className="md:hidden w-10" />
        </div>
      </nav>
    </header>
  );
}
