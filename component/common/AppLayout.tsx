"use client";

import React, { useState } from "react";
import NavigationDesktop from "@/component/desktop/NavigationDesktop";
import MobileBottomNav from "@/component/mobile/MobileBottomNav";
import BookingModal from "@/component/common/Bookingmodal";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917056323473", "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      <NavigationDesktop />
      <div className="pb-28 md:pb-0">{children}</div>

      <MobileBottomNav
        onBookAppointment={() => setIsBookingOpen(true)}
        onWhatsApp={handleWhatsAppClick}
      />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </div>
  );
}
