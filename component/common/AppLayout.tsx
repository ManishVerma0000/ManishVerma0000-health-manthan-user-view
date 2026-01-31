"use client";

import React, { useState } from "react";
import NavigationDesktop from "@/component/desktop/NavigationDesktop";
import SideBarMobile from "@/component/mobile/SidebarMobile";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <SideBarMobile
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <NavigationDesktop onMenuClick={() => setIsSidebarOpen(true)} />
      {children}
    </div>
  );
}
