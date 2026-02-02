import React, { useState } from "react";
import {
  X,
  Phone,
  User,
  Stethoscope,
  MapPin,
  Calendar,
  UserCheck,
  Clock,
} from "lucide-react";
import { bookAppointment } from "@/api/services/appointment.service";
import { toast } from "react-toastify";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    branch: "",
    date: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response: any = await bookAppointment(formData);

      if (response.success) {
        toast("Appointment booked successfully ✅");
        setFormData({
          name: "",
          // branch: "",
          phone: "",
          date: "",
          service: "",
          branch: "",
        });
      } else {
        toast(response.message || "Something went wrong");
      }
    } catch (error: any) {
      console.error(error);
      toast(error?.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4  bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-[#2c3e7e] text-white px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Book Appointment</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {/* Left Section - Info */}
          <div className="p-6 md:p-8 bg-gray-50">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Simplifying Surgery Experience
            </h3>
            <div className="w-16 h-1 bg-teal-500 mb-6"></div>

            <p className="text-gray-600 mb-8">
              Consult with our expert and plan your surgery with confidence.
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Share your details
                  </h4>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Our care coordinator understands your condition
                  </h4>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">
                    Get scheduled quickly with the right specialist
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Mobile Field */}
              <div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* Surgery Field */}
              <div>
                <div className="relative">
                  <Stethoscope className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="surgery"
                    placeholder="Surgery"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              {/* City Field */}
              <div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.branch}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Book Appointment
              </button>

              {/* 24/7 Support */}
              <div className="text-center">
                <p className="text-teal-600 font-medium">24/7 Support</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
