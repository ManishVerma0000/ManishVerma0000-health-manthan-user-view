"use client"
import React, { useState } from 'react';

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  qualifications: string;
  experience: string;
  image: string;
}

const DoctorSearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const doctors: Doctor[] = [
    {
      id: 1,
      name: 'Dinesh Saini',
      specialty: 'Dentist',
      qualifications: 'MBBS, MDS - Pedodontics & Preventive Dentistry, Fellowship in Reconstructive Pediatric Dentistry',
      experience: '13 Years of Experience',
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Dinesh Saini',
      specialty: 'Dentist',
      qualifications: 'MBBS, MDS - Pedodontics & Preventive Dentistry, Fellowship in Reconstructive Pediatric Dentistry',
      experience: '13 Years of Experience',
      image: '/api/placeholder/80/80'
    },
    {
      id: 3,
      name: 'Dinesh Saini',
      specialty: 'Dentist',
      qualifications: 'MBBS, MDS - Pedodontics & Preventive Dentistry, Fellowship in Reconstructive Pediatric Dentistry',
      experience: '13 Years of Experience',
      image: '/api/placeholder/80/80'
    },
    {
      id: 4,
      name: 'Dinesh Saini',
      specialty: 'Dentist',
      qualifications: 'MBBS, MDS - Pedodontics & Preventive Dentistry, Fellowship in Reconstructive Pediatric Dentistry',
      experience: '13 Years of Experience',
      image: '/api/placeholder/80/80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-900 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-sm font-medium tracking-wide">RESEARCH DOCTOR, HOSPITAL</h1>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 rounded text-gray-800 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
      </header>

      {/* Doctor Cards Container */}
      <main className="max-w-6xl mx-auto py-8 px-6">
        <div className="space-y-4">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-start gap-6"
            >
              {/* Doctor Image */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Doctor Information */}
              <div className="flex-grow">
                <h2 className="text-cyan-600 text-lg font-semibold mb-1">
                  {doctor.specialty}
                </h2>
                <h3 className="text-gray-900 text-xl font-bold mb-2">
                  {doctor.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                  {doctor.qualifications}
                </p>
                <p className="text-gray-700 text-sm font-medium">
                  {doctor.experience}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex-shrink-0 flex flex-col gap-2">
                <button className="px-6 py-2 border-2 border-cyan-500 text-cyan-600 rounded font-medium hover:bg-cyan-50 transition-colors whitespace-nowrap">
                  Book Appointment
                </button>
                <button className="px-6 py-2 bg-cyan-500 text-white rounded font-medium hover:bg-cyan-600 transition-colors whitespace-nowrap">
                  Get Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default DoctorSearchPage;