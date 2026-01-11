"use client";
import React, { useEffect, useState } from "react";
import NavigationDesktop from "./NavigationDesktop";
import FooterDesktop from "./FooterDesktop";
import { useRouter } from "next/navigation";
import api from "@/api/api";

interface Doctor {
  _id: string;
  hospital: {
    hospitalName: string;
    city: string;
    location: string;
  };
  qualificationAndExperience: string;
  about: string;
  timings: { day: string; time: string }[];
  imageUrl: string[];
}

const DoctorSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [doctorList, setDoctorList] = useState<Doctor[]>([]);
  const router = useRouter();

  const redirectToConsultationPage = () => {
    router.push("/book-appointment");
  };

  useEffect(() => {
    api
      .get("/doctor/list")
      .then((res) => {
        console.log(res?.data?.data, "res");
        setDoctorList(res?.data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredDoctors = doctorList.filter((doctor) =>
    doctor.hospital?.hospitalName
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <NavigationDesktop />

      {/* Header */}
      <header className="bg-teal-600 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-sm font-medium tracking-wide">
            RESEARCH DOCTOR, HOSPITAL
          </h1>
          <input
            type="text"
            placeholder="Search hospital"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded text-gray-800 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
      </header>

      {/* Doctor Cards */}
      <main className="max-w-6xl mx-auto py-8 px-6">
        <div className="space-y-4">
          {filteredDoctors?.map((doctor) => (
            <div
              key={doctor?._id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-start gap-6"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg overflow-hidden">
                  <img
                    src={doctor?.imageUrl?.[0]}
                    alt={doctor?.hospital?.hospitalName}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-grow">
                <h2 className="text-cyan-600 text-lg font-semibold mb-1">
                  Doctor
                </h2>

                <h3 className="text-gray-900 text-xl font-bold mb-1">
                  {doctor?.hospital?.hospitalName}
                </h3>

                <p className="text-gray-600 text-sm mb-2">
                  {doctor?.hospital?.city}, {doctor?.hospital?.location}
                </p>

                <p className="text-gray-700 text-sm mb-2">
                  {doctor?.qualificationAndExperience}
                </p>

                <p className="text-sm text-gray-500">
                  Timing:{" "}
                  {doctor?.timings
                    ?.map((t) => `${t.day} (${t.time})`)
                    .join(", ")}
                </p>
              </div>

              {/* Actions */}
              <div className="flex-shrink-0 flex flex-col gap-2">
                <button className="px-6 py-2 border-2 border-teal-600 text-teal-600 rounded font-medium hover:bg-cyan-50">
                  Book Appointment
                </button>

                <button
                  onClick={redirectToConsultationPage}
                  className="px-6 py-2 bg-teal-600 text-white rounded font-medium hover:bg-teal-700"
                >
                  Get Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <FooterDesktop />
    </div>
  );
};

export default DoctorSearchPage;
