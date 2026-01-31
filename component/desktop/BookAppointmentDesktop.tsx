"use client";
import React, { useState } from "react";
import { Phone, Users, Shield, Calendar, Check } from "lucide-react";
import FooterDesktop from "./FooterDesktop";
import { bookAppointment } from "@/api/services/appointment.service";
// import { bookAppointment } from "@/services/appointment.service";

const BookAppointmentDesktop: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response: any = await bookAppointment(formData);
      
      if (response.success) {
        alert("Appointment booked successfully ✅");
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
        });
      } else {
        alert(response.message || "Something went wrong");
      }
    } catch (error: any) {
      console.error(error);
      alert(error?.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">
                Urology Department -<br />
                Services and Surgeries
              </h1>

              <div className="flex gap-4 mb-8">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded">
                  <div className="text-xs font-semibold">Kidney Surgery</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded">
                  <div className="text-xs font-semibold">Bladder Surgery</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded">
                  <div className="text-xs font-semibold">Prostate Surgery</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded">
                  <div className="text-xs font-semibold">Stone Surgery</div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop"
                  alt="Doctor"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=150&h=150&fit=crop"
                  alt="Medical Equipment"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>

            {/* Right Side - Appointment Form */}
            <div className="bg-white rounded-lg shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Book Your Appointment
              </h2>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 rounded transition-colors"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">50+ Hospitals</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">100+ Experts</h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-indigo-100 p-3 rounded-lg">
              <Shield className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-1">
                Insurance Claim Support
              </h3>
              <p className="text-sm text-gray-600">Lorem ipsum dolor</p>
            </div>
          </div>
        </div>
      </div>

      {/* Consult Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Consult with Our Expert
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              Male
            </button>
            <button className="px-6 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors">
              Both Genders
            </button>
            <button className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              Female
            </button>
          </div>
        </div>
      </div>

      {/* About Laser Surgery */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          About Laser Surgery
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Eye laser surgery is a non-invasive procedure that uses a laser beam
          to treat various eye conditions such as cataracts and myopia. This
          procedure is done with minimal discomfort and side effects. Some
          people experience temporary dryness or irritation but it usually goes
          away after a few days. If you're considering getting your eyes
          lasered, be sure to talk with an ophthalmologist about the risks and
          benefits of this procedure.
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Laser eye surgery is a surgical procedure that uses light to correct
          vision problems in the eye. The most common laser surgery procedures
          are LASIK, which treats nearsightedness and farsightedness, and PRK,
          which corrects astigmatism.
        </p>

        {/* Symptoms */}
        <h3 className="text-xl font-bold text-gray-800 mb-4">Symptoms</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
          massa et ipsum fermentum, eget congue leo fringilla. Nam blandit elit
          sed odio consectetur, et faucibus nisi pellentesque. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>

        <div className="grid grid-cols-4 gap-4 mb-12">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <img
                src={`https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=300&h=200&fit=crop&sig=${index}`}
                alt={`Symptom ${index}`}
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Procedure */}
        <h3 className="text-xl font-bold text-gray-800 mb-6">Procedure</h3>
        <div className="grid grid-cols-3 gap-8 mb-12">
          {[
            "Appointment Booking",
            "Appointment Fixing",
            "Appointment Confirmation",
          ].map((title, index) => (
            <div key={index} className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-1">{title}</h4>
              <p className="text-sm text-gray-600">1st Consult</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <h3 className="text-xl font-bold text-gray-800 mb-6">Benefits</h3>
        <div className="grid grid-cols-2 gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700">
                100+ Best Surgeons at your Surgery
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700">
                Provides the Best 24/7 Contact
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700">
                50+ Location at your Surgery
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700">
                Get Latest Update with Surgery
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-teal-600" />
              <span className="text-gray-700">
                Provide the best 24/7 Surgery
              </span>
            </div>
          </div>
        </div>

        {/* Risks */}
        <h3 className="text-xl font-bold text-gray-800 mb-4">Risks</h3>
        <div className="flex gap-4 mb-12 flex-wrap">
          <div className="px-6 py-3 bg-gray-100 rounded-full text-sm text-gray-700">
            Bleeding/Infection & Anxiety
          </div>
          <div className="px-6 py-3 bg-gray-100 rounded-full text-sm text-gray-700">
            Poor Health/Age & Anxiety
          </div>
          <div className="px-6 py-3 bg-gray-100 rounded-full text-sm text-gray-700">
            First Anxiety
          </div>
          <div className="px-6 py-3 bg-gray-100 rounded-full text-sm text-gray-700">
            Other type of Anxiety
          </div>
        </div>

        {/* Recovery Timeline */}
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Recovery Timeline
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div className="flex-1">
              <span className="font-semibold text-gray-800">Week 1</span>
              <span className="text-gray-600 ml-4">Removal/Recovery</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div className="flex-1">
              <span className="font-semibold text-gray-800">Week 2</span>
              <span className="text-gray-600 ml-4">Remove Duct Surgical</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div className="flex-1">
              <span className="font-semibold text-gray-800">Week 3</span>
              <span className="text-gray-600 ml-4">Full Recovery</span>
            </div>
          </div>
        </div>
      </div>
      <FooterDesktop />
    </div>
  );
};

export default BookAppointmentDesktop;
