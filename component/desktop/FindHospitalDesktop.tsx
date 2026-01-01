"use client";
import React from "react";
import FooterDesktop from "./FooterDesktop";
import NavigationDesktop from "./NavigationDesktop";

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

const FindHospitalDesktop: React.FC = () => {
  const steps = [
    {
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop",
      stepNumber: 1,
    },
    {
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop",
      stepNumber: 1,
    },
    {
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop",
      stepNumber: 1,
    },
    {
      image:
        "https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=400&h=400&fit=crop",
      stepNumber: 1,
    },
  ];

  return (
    <div className="min-h-screen">
      <NavigationDesktop />
      <div className="max-w-6xl mx-auto mt-8">
        {/* Header Section */}
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

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              image={step.image}
              stepNumber={step.stepNumber}
            />
          ))}
        </div>

        {/* Bottom Info Box */}
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
      </div>
      <div className="mt-8">
        <FooterDesktop />
      </div>
    </div>
  );
};

export default FindHospitalDesktop;
