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
    {
      icon: CalendarCheck,
      label: "Book Your Appointment",
      href: "/book-appointment",
      isCta: true,
    },
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
              <span className="text-xl font-bold text-teal-500">Manthan</span>
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
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  item.isCta
                    ? "bg-teal-500 text-white hover:bg-teal-600 mt-4"
                    : "text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideBarMobile;
