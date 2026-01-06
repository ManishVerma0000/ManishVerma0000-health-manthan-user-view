"use client";
import React, { useState } from "react";
import { Menu, Search } from "lucide-react";
import Footer from "./FooterMobile";
import SideBarMobile from "./SidebarMobile";
import Link from "next/link";
import { useRouter } from "next/router";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  qualifications: string;
  experience: string;
  image: string;
}

const DoctorSearchMobile: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const router=useRouter()

  const redirectToCosulationPage=()=>{
    router.push('/book-appointment')
  }


  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Dinesh Saini",
      specialty: "Dentist",
      qualifications:
        "MBBS, DGO, DNB - Obstetrics & Gynecology, Fellowship in Reproductive Medicine Infertility Specialist, Gynecologist, Obstetrician, Laparoscopic Surgeon (Obs & Gyn)",
      experience: "21 Years of Experience",
      image: "/api/placeholder/60/80",
    },
    {
      id: 2,
      name: "Dinesh Saini",
      specialty: "Dentist",
      qualifications:
        "MBSS, DGO, DNB - Obstetrics & Gynecology, Fellowship in Reproductive Medicine Infertility Specialist, Gynecologist, Obstetrician, Laparoscopic Surgeon (Obs & Gyn)",
      experience: "21 Years of Experience",
      image: "/api/placeholder/60/80",
    },
    {
      id: 3,
      name: "Dinesh Saini",
      specialty: "Dentist",
      qualifications:
        "MBSS, DGO, DNB - Obstetrics & Gynecology, Fellowship in Reproductive Medicine Infertility Specialist, Gynecologist, Obstetrician, Laparoscopic Surgeon (Obs & Gyn)",
      experience: "21 Years of Experience",
      image: "/api/placeholder/60/80",
    },
    {
      id: 4,
      name: "Dinesh Saini",
      specialty: "Dentist",
      qualifications:
        "MBSS, DGO, DNB - Obstetrics & Gynecology, Fellowship in Reproductive Medicine Infertility Specialist, Gynecologist, Obstetrician, Laparoscopic Surgeon (Obs & Gyn)",
      experience: "21 Years of Experience",
      image: "/api/placeholder/60/80",
    },
    {
      id: 5,
      name: "Dinesh Saini",
      specialty: "Dentist",
      qualifications:
        "MBSS, DGO, DNB - Obstetrics & Gynecology, Fellowship in Reproductive Medicine Infertility Specialist, Gynecologist, Obstetrician, Laparoscopic Surgeon (Obs & Gyn)",
      experience: "21 Years of Experience",
      image: "/api/placeholder/60/80",
    },
  ];
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto">
      <SideBarMobile
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="p-4 flex items-center gap-3">
          {/* MENU BUTTON */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="text-gray-700"
          >
            <Menu size={24} />
          </button>

          {/* SEARCH INPUT */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search Hospital / Doctor"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
      </div>

      {/* Scrollable Doctor Cards */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 space-y-4 pb-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
            >
              {/* Doctor Info Section */}
              <div className="flex gap-3 mb-4">
                {/* Doctor Image */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-cyan-600 text-sm font-medium mb-1">
                    {doctor.specialty}
                  </p>
                  <h3 className="text-gray-900 text-lg font-bold mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed mb-2">
                    {doctor.qualifications}
                  </p>
                  <p className="text-gray-900 text-sm font-semibold">
                    {doctor.experience}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <button 
                onClick={()=>{
                  redirectToCosulationPage()
                }}
                className="flex-1 px-4 py-2.5 border-2 border-cyan-600 text-cyan-600 rounded font-medium text-sm hover:bg-cyan-50 transition-colors">
                  {/* <Link href={'/book-appointment'}/> */}
                  Book Appointment
                </button>
                <button 
                className="flex-1 px-4 py-2.5 bg-cyan-600 text-white rounded font-medium text-sm hover:bg-cyan-700 transition-colors">
                  {/* <Link href={'/book-appointment'}/> */}
                  Get Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorSearchMobile;
