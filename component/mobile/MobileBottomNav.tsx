"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutGrid, Users, Info, Phone, CalendarCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

interface MobileBottomNavProps {
  onBookAppointment: () => void;
  onWhatsApp: () => void;
}

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: LayoutGrid, label: "Surgeries", href: "/surgery" },
  { icon: Users, label: "Doctors", href: "/find-doctor" },
  { icon: Info, label: "About Us", href: "/about-us" },
];

export default function MobileBottomNav({
  onBookAppointment,
  onWhatsApp,
}: MobileBottomNavProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      {/* WhatsApp icon - fixed top right, above content (same as reference image) */}
      <button
        type="button"
        onClick={onWhatsApp}
        className="fixed bottom-40 right-4 z-50 md:hidden w-12 h-12 bg-white rounded-xl shadow-lg border border-gray-100 flex items-center justify-center text-[#25D366] hover:bg-gray-50 transition active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 " />
      </button>

      {/* Bottom Navigation Container */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-40 md:hidden">
        {/* Action buttons: Call Now + Book Appointment */}
        <div className="flex gap-3 px-4 py-3 border-b border-gray-100">
          <Link
            href="tel:+917056323473"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 border-2 border-teal-600 text-teal-600 rounded-lg font-medium hover:bg-teal-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </Link>
          <button
            type="button"
            onClick={onBookAppointment}
            className="flex items-center justify-center gap-2 py-3 px-4 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            <CalendarCheck className="w-5 h-5" />
            Book Appointment
          </button>
        </div>

        {/* Bottom navigation: Home, Surgeries, Doctors, About Us */}
        <nav className="flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center gap-1 py-2 px-3 rounded-lg transition-colors min-w-[70px] ${
                  active
                    ? "text-teal-600"
                    : "text-gray-500 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}