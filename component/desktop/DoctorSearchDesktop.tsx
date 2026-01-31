"use client";
import React, { useEffect, useState } from "react";
import NavigationDesktop from "./NavigationDesktop";
import FooterDesktop from "./FooterDesktop";
import { useRouter } from "next/navigation";
import api from "@/api/api";

interface Doctor {
  _id: string;
  name: string;
  hospital: {
    _id: string;
    hospitalName: string;
    city: string;
    location: string;
    contactNumber: string;
    email: string;
  };
  contactNumber: string;
  whatsAppNumber: string;
  qualificationAndExperience: string;
  about: string;
  treatmentProvide: string[];
  timings: { day: string; time: string; _id: string }[];
  workingFrom: string;
  imageUrl: string[];
  status: boolean;
}

const DoctorSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("Delhi NCR");
  const [doctorList, setDoctorList] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"Doctors" | "Hospitals">(
    "Doctors",
  );
  const router = useRouter();

  const popularSearches = [
    "Cataract surgery",
    "LASIK for specs removal",
    "Retina specialist",
    "Glaucoma treatment",
    "Eye checkup near me",
    "Knee replacement",
    "General surgery",
  ];

  console.log(doctorList, "doctorList");

  useEffect(() => {
    setLoading(true);
    api
      .get("/doctor/list")
      .then((res) => {
        console.log(res?.data, "res");
        setDoctorList(res?.data || []);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const redirectToBookAppointment = (doctorId: string) => {
    router.push(`/book-appointment?doctorId=${doctorId}`);
  };

  const redirectToConsultation = (doctorId: string) => {
    router.push(`/consultation?doctorId=${doctorId}`);
  };

  const filteredDoctors = doctorList.filter((doctor) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      doctor.name?.toLowerCase().includes(searchLower) ||
      doctor.hospital?.hospitalName?.toLowerCase().includes(searchLower) ||
      doctor.treatmentProvide?.some((treatment) =>
        treatment.toLowerCase().includes(searchLower),
      ) ||
      doctor.qualificationAndExperience?.toLowerCase().includes(searchLower)
    );
  });

  const getReviewCount = (doctorId: string) => {
    // Mock review data - replace with actual API call if available
    return Math.floor(Math.random() * 500) + 100;
  };

  const getRating = (doctorId: string) => {
    // Mock rating data - replace with actual API call if available
    return (Math.random() * 1 + 4).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationDesktop />

      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center gap-4">
            {/* Location Selector */}
            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent cursor-pointer min-w-[200px]"
              >
                <option value="Delhi NCR">Delhi NCR</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
              </select>

              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search by doctor, hospital, surgery or eye problem"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Search Button */}
            <button className="bg-[#0F8F8F] hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Popular Searches */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm font-medium text-gray-700">
              Popular searches
            </span>
            {popularSearches.map((search, index) => (
              <button
                key={index}
                onClick={() => setSearchTerm(search)}
                className="px-4 py-1.5 bg-[#0F8F8F] hover:bg-cyan-100 text-white rounded-full text-sm transition-colors"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b-2 border-gray-200">
        <div className="max-w-7xl mx-auto px-10">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("Doctors")}
              className={`py-4 px-2 font-medium text-sm transition-colors relative ${
                activeTab === "Doctors"
                  ? "text-cyan-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Doctors
              {activeTab === "Doctors" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("Hospitals")}
              className={`py-4 px-2 font-medium text-sm transition-colors relative ${
                activeTab === "Hospitals"
                  ? "text-cyan-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Hospitals
              {activeTab === "Hospitals" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Doctor List */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
          </div>
        ) : filteredDoctors.length === 0 ? (
          <div className="text-center py-20">
            <svg
              className="w-16 h-16 text-gray-400 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No doctors found
            </h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredDoctors.map((doctor) => {
              const reviewCount = getReviewCount(doctor._id);
              const rating = getRating(doctor._id);

              return (
                <div
                  key={doctor._id}
                  className="bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow p-6"
                >
                  <div className="flex items-start gap-6">
                    {/* Doctor Image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 rounded-full overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
                        {doctor.imageUrl?.[0] ? (
                          <img
                            src={doctor.imageUrl[0]}
                            alt={doctor.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <svg
                              className="w-12 h-12 text-cyan-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-grow">
                      <h2 className="text-xl font-bold text-gray-900 mb-1">
                        Dr. {doctor.name}
                      </h2>

                      <p className="text-gray-700 text-sm mb-2">
                        {doctor.qualificationAndExperience}
                      </p>

                      {doctor.treatmentProvide &&
                        doctor.treatmentProvide.length > 0 && (
                          <p className="text-sm text-gray-600 mb-2">
                            {doctor.treatmentProvide.join(", ")}
                          </p>
                        )}

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-5 h-5 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="font-semibold text-gray-900">
                            {rating}
                          </span>
                          <span className="text-gray-600 text-sm">
                            ({reviewCount} reviews)
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          <span>
                            {doctor.hospital?.hospitalName || "Hospital"},{" "}
                            {doctor.hospital?.city || "City"}
                          </span>
                        </div>
                        {doctor.timings && doctor.timings.length > 0 && (
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span>
                              Next available: Today,{" "}
                              {doctor.timings[0].time.split("to")[0].trim()}
                            </span>
                          </div>
                        )}
                      </div>

                      {doctor.about && (
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {doctor.about}
                        </p>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex-shrink-0 flex flex-col gap-3 min-w-[200px]">
                      <button
                        onClick={() => redirectToConsultation(doctor._id)}
                        className="px-6 py-2.5 border-2 border-[#0F8F8F] text-[#0F8F8F] rounded-md font-medium hover:bg-cyan-50 transition-colors text-sm"
                      >
                        Get Free Consultation
                      </button>

                      <button
                        onClick={() => redirectToBookAppointment(doctor._id)}
                        className="px-6 py-2.5 bg-[#0F8F8F] text-white rounded-md font-medium hover:bg-cyan-600 transition-colors text-sm"
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      <FooterDesktop />
    </div>
  );
};

export default DoctorSearchPage;
