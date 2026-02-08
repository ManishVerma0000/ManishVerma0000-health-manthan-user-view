"use client";

import React from "react";
import Link from "next/link";
import {
  X,
  Home,
  Compass,
  Stethoscope,
  Users,
  Phone,
  CalendarCheck,
  Info,
} from "lucide-react";

// Sidebar Component - matches desktop navigation items
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBarMobile: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Compass, label: "Explore", href: "/surgery" },
    { icon: Stethoscope, label: "Services", href: "#specialties" },
    { icon: Users, label: "Doctors", href: "/find-doctor" },
    { icon: Phone, label: "Contact Us", href: "/contact-us" },
    { icon: Info, label: "About Us", href: "/about-us" },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-800">Health</span>
              <span className="text-xl font-bold text-teal-500">Vandnam</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              <X size={24} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-2 py-4 overflow-y-auto">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-700 hover:bg-teal-50 hover:text-teal-600"
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Bottom Action Buttons */}
          <div className="px-4 py-4 border-t border-gray-200 space-y-3">
            {/* Call Now Button */}
            <Link
              href="tel:+1234567890"
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-teal-500 text-teal-500 rounded-lg hover:bg-teal-50 transition-colors font-medium"
            >
              <Phone size={20} />
              <span>Call Now</span>
            </Link>

            {/* Book Appointment Button */}
            <Link
              href="/book-appointment"
              onClick={onClose}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors font-medium"
            >
              <CalendarCheck size={20} />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBarMobile;