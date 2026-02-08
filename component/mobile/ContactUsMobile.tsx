"use client";
import { useState } from "react";
import ContactUsFormCommon from "../common/ContactUs";
import Footer from "./FooterMobile";
import SideBarMobile from "./SidebarMobile";
import { Menu } from "lucide-react";

export default function ContactUsMobile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
        <SideBarMobile
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <header className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-700 hover:text-gray-900"
          >
            <Menu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-[#1e3a8a]">Health</span>
            <span className="text-2xl font-bold text-[#0ea5e9]">Vandnam</span>
          </div>
          <div className="w-6"></div>
        </header>
        <div className="flex justify-center">
          <ContactUsFormCommon />
        </div>
        
        <Footer />
      </div>
    </>
  );
}
