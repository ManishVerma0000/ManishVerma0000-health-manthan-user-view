"use client"
import React, { useState } from 'react';
import { Users, Shield, ChevronDown } from 'lucide-react';

const BookAppointmentMobile: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
  });
  const [activeTab, setActiveTab] = useState('Overview');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const cities = ['Gurugram', 'Delhi', 'Bangalore', 'Mumbai'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-teal-600 text-white px-5 py-6">
        <h1 className="text-xl font-bold mb-3">
          Proven Records of Successful Surgery
        </h1>
        <p className="text-sm leading-relaxed opacity-90">
          MBBS, DGO, DNB - Obstetrics & Gynecology, Fellowship in Reproductive MBBS, DGO, DNB - Obstetrics & Gynecology
        </p>
      </div>

      {/* Disease Cards */}
      <div className="bg-teal-600 px-5 pb-6">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-xs text-gray-600 mb-1">Diseases</div>
            <div className="text-sm font-bold text-gray-800">Homeopathic Notabled</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-xs text-gray-600 mb-1">Diseases</div>
            <div className="text-sm font-bold text-gray-800">Homeopathic Notabled</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-xs text-gray-600 mb-1">Diseases</div>
            <div className="text-sm font-bold text-gray-800">Homeopathic Notabled</div>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="text-xs text-gray-600 mb-1">Diseases</div>
            <div className="text-sm font-bold text-gray-800">Homeopathic Notabled</div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white px-5 py-6 border-b border-gray-200">
        <div className="flex items-center justify-around">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Users className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800">50+ Hospitals</div>
              <div className="text-xs text-gray-600">Consult our hospital</div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Shield className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-800">50+ H</div>
              <div className="text-xs text-gray-600">Consult</div>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Form Section */}
      <div className="bg-white px-5 py-6">
        <h2 className="text-xl font-bold text-center mb-6">
          Book <span className="text-teal-600">Free</span> Appointment
        </h2>

        <div className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
          </div>

          <div>
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
            />
          </div>

          <div className="relative">
            <select
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm appearance-none bg-white"
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          {/* City Tags */}
          <div className="flex flex-wrap gap-2 py-2">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setFormData({ ...formData, city })}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  formData.city === city
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded-md transition-colors text-sm"
          >
            Get Free Consultation
          </button>
        </div>
      </div>

      {/* Consult Section */}
      <div className="bg-gray-50 px-5 py-8">
        <h2 className="text-xl font-bold text-center text-gray-800 mb-3">
          Consult with Our Expert
        </h2>
        <p className="text-sm text-gray-600 text-center leading-relaxed mb-6">
          Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery
        </p>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-300 mb-6">
          {['Overview', 'Symptoms', 'Procedure', 'Benefits'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'text-teal-600 border-b-2 border-teal-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg p-5 shadow-sm">
          <p className="text-sm text-gray-700 leading-relaxed">
            {activeTab === 'Overview' && 'Comprehensive overview of our urology services and treatment options. We provide world-class care with state-of-the-art facilities.'}
            {activeTab === 'Symptoms' && 'Common symptoms include frequent urination, pain during urination, blood in urine, and abdominal discomfort. Consult our experts for proper diagnosis.'}
            {activeTab === 'Procedure' && 'Our procedures are minimally invasive using the latest technology. We ensure patient comfort and quick recovery with expert medical care.'}
            {activeTab === 'Benefits' && 'Benefits include quick recovery time, minimal scarring, reduced pain, and improved quality of life. Our success rate is over 95%.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentMobile;