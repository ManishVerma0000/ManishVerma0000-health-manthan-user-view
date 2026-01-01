"use client";

import React from "react";
import {
  X,
  Home,
  User,
  Phone,
  Settings,
  BriefcaseMedicalIcon,
} from "lucide-react";

// Sidebar Component
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBarMobile: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: "Home", href: "#" },
    { icon: User, label: "Surgery", href: "/surgery" },
    {
      icon: BriefcaseMedicalIcon,
      label: "Find Hospital",
      href: "/find-doctor",
    },
    { icon: Phone, label: "Contact Us", href: "/contact-us" },
    { icon: Phone, label: "Get Consultation", href: "/book-appointment" },
    { icon: Settings, label: "About us", href: "/about-us" },
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
              <span className="text-xl font-bold text-[#1e3a8a]">Health</span>
              <span className="text-xl font-bold text-[#0ea5e9]">Manthan</span>
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
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-[#1e3a8a] rounded-lg transition-colors"
              >
                <item.icon size={20} />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SideBarMobile;
