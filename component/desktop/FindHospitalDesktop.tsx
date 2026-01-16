"use client";
import React, { useEffect, useState } from "react";
import FooterDesktop from "./FooterDesktop";
import NavigationDesktop from "./NavigationDesktop";
import { Surgery } from "@/types/surgery";
import { getSurgeryList } from "@/api/services/surgery.service";

interface StepCardProps {
  image: string;
  stepNumber: number;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const StepCard: React.FC<StepCardProps> = ({
  image,
  stepNumber,
  title,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center cursor-pointer transition-all
        ${isActive ? "scale-105" : "opacity-80 hover:opacity-100"}
      `}
    >
      <div className="relative">
        <div
          className={`w-44 h-44 border-4 rounded-sm overflow-hidden
            ${isActive ? "border-teal-600" : "border-gray-300"}
          `}
        >
          {image && (
            <img
              src={image.trim()}
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {isActive && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-0 h-0
            border-l-[20px] border-l-transparent
            border-r-[20px] border-r-transparent
            border-t-[32px] border-t-teal-600"
          />
        )}
      </div>

      <div
        className={`mt-10 px-6 py-3 rounded-sm text-center w-44
          ${isActive ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700"}
        `}
      >
        <div className="text-xs font-semibold">Step {stepNumber}</div>
        <div className="text-sm font-bold truncate">{title}</div>

        <button
          className={`mt-2 w-full text-xs font-semibold py-2 rounded-sm transition
            ${isActive
              ? "bg-white text-teal-600"
              : "bg-teal-600 text-white"}
          `}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

const FindHospitalDesktop: React.FC = () => {
  const [surgeries, setSurgeries] = useState<Surgery[]>([]);
  const [selectedSurgery, setSelectedSurgery] = useState<Surgery | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurgeries = async () => {
      try {
        const res = await getSurgeryList();
        setSurgeries(res);
        setSelectedSurgery(res[0]); // auto-select first surgery
      } catch (error) {
        console.error("Failed to fetch surgeries", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSurgeries();
  }, []);

  return (
    <div className="min-h-screen">
      <NavigationDesktop />

      <div className="max-w-6xl mx-auto mt-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Proven Records of Successful Surgery
          </h1>
          <p className="text-sm text-gray-600">
            We provide expert-guided surgeries with government panel hospitals.
          </p>
        </div>

        {/* Loader */}
        {loading && (
          <div className="text-center py-20 text-gray-500">
            Loading surgeries...
          </div>
        )}

        {/* Surgery Cards */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {surgeries.map((surgery, index) => (
              <StepCard
                key={surgery._id}
                image={surgery.images?.[0] || surgery.icon}
                stepNumber={index + 1}
                title={surgery.surgeryName}
                isActive={selectedSurgery?._id === surgery._id}
                onClick={() => setSelectedSurgery(surgery)}
              />
            ))}
          </div>
        )}

        {/* Selected Surgery Details */}
        {selectedSurgery && (
          <div className="border-2 border-teal-300 bg-white p-8 rounded-sm shadow-sm transition">
            <h2 className="text-2xl font-bold text-teal-700 mb-4">
              Proven Records of Successful Surgery
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              {selectedSurgery.surgeryName} surgery is performed by expert doctors
              using advanced medical techniques. We ensure transparent pricing,
              trusted hospitals, and complete patient support from consultation
              to recovery.
            </p>
          </div>
        )}
      </div>

      <div className="mt-8">
        <FooterDesktop />
      </div>
    </div>
  );
};

export default FindHospitalDesktop;
