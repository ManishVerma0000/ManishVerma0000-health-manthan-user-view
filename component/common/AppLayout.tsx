"use client";

import React, { useState } from "react";
import NavigationDesktop from "@/component/desktop/NavigationDesktop";
import SideBarMobile from "@/component/mobile/SidebarMobile";
import BookingModal from "@/component/common/Bookingmodal";
import { MessageCircle, CalendarCheck } from "lucide-react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleWhatsAppClick = () => {
    // Replace with your business / support WhatsApp number (in international format without + or 0)
    const phoneNumber = "911234567890";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <SideBarMobile
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <NavigationDesktop onMenuClick={() => setIsSidebarOpen(true)} />
      {children}

      {/* Mobile-only bottom action bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-between bg-white border-t border-gray-200 px-4 py-3 md:hidden">
        {/* Left: Book Appointment */}
        <button
          type="button"
          onClick={() => setIsBookingOpen(true)}
          className="flex-1 mr-3 flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-4 rounded-lg shadow-md active:scale-95 transition"
        >
          <CalendarCheck size={20} />
          <span>Book Appointment</span>
        </button>

        {/* Right: WhatsApp */}
        <button
          type="button"
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center w-12 h-12 rounded-full border border-green-500 text-green-600 hover:bg-green-50 active:scale-95 transition"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={22} />
        </button>
      </div>

      {/* Booking modal (used for mobile, but safe on desktop too) */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
