"use client";
import React, { useState } from "react";
import { Menu, X, Home, User, Calendar, FileText, Phone, Settings} from "lucide-react";
import Footer from "./FooterMobile";

// Sidebar Component
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBarMobile: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: User, label: 'Find Doctors', href: '#' },
    { icon: Calendar, label: 'Appointments', href: '#' },
    { icon: FileText, label: 'Medical Records', href: '#' },
    { icon: Phone, label: 'Contact Us', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#1e3a8a]">Health</span>
              <span className="text-xl font-bold text-[#0ea5e9]">Vandnam</span>
            </div>
            <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
              <X size={24} />
            </button>
          </div>

          <div className="px-4 py-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                JD
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">John Doe</h3>
                <p className="text-sm text-gray-500">john.doe@email.com</p>
              </div>
            </div>
          </div>

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

          <div className="px-4 py-4 border-t border-gray-200">
            <button className="w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors">
              Logout
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};



// Step Card Component
interface StepCardProps {
  image: string;
  stepNumber: number;
}

const StepCard: React.FC<StepCardProps> = ({ image, stepNumber }) => (
  <div className="flex flex-col items-center">
    <div className="relative">
      <div className="w-44 h-44 border-4 border-teal-600 rounded-sm overflow-hidden">
        <img
          src={image}
          alt={`Step ${stepNumber}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[32px] border-t-teal-600"></div>
    </div>
    <div className="mt-10 bg-teal-600 text-white px-6 py-3 rounded-sm text-center w-44">
      <div className="text-xs font-semibold">Step {stepNumber}</div>
      <div className="text-sm font-bold">Book Appointment</div>
    </div>
  </div>
);

// Main Component
const FindHospitalMobile: React.FC = () => {
  const steps = [
    {
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop",
      stepNumber: 1,
    },
    {
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop",
      stepNumber: 2,
    },
    {
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop",
      stepNumber: 3,
    },
    {
      image: "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=400&h=400&fit=crop",
      stepNumber: 4,
    },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <SideBarMobile
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      {/* Header with Menu Button */}
      <header className="flex items-center justify-between px-4 py-4 bg-white border-b border-gray-200">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-gray-700 hover:text-gray-900"
        >
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#1e3a8a]">Health</span>
          <span className="text-2xl font-bold text-[#0ea5e9]">Manthan</span>
        </div>
        <div className="w-6"></div>
      </header>

      {/* Content */}
      <div className="max-w-6xl mx-auto p-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Proven Records of Successful Surgery
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser
            Surgery Eye Laser Surgery Eye Laser Surgery... Eye Laser Surgery Eye
            Laser Surgery Eye Laser Surgery Eye Laser Surgery...
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              image={step.image}
              stepNumber={step.stepNumber}
            />
          ))}
        </div>
        
        <div className="border-2 border-gray-300 bg-white p-8 rounded-sm shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Proven Records of Successful Surgery
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser
            Surgery Eye Laser Surgery Eye Laser Surgery... Eye Laser Surgery Eye
            Laser Surgery Eye Laser Surgery Eye Laser Surgery... Eye Laser
            Surgery Eye Laser Surgery Eye Laser Surgery...
          </p>
        </div>
        
        <div className="mt-10">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FindHospitalMobile;