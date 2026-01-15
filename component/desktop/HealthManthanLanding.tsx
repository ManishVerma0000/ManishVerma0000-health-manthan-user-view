"use client"
import React, { useEffect, useState } from "react";
import { ArrowRight, Phone, Users, Heart, Activity } from "lucide-react";
import FooterDesktop from "./FooterDesktop";
import NavigationDesktop from "./NavigationDesktop";
import { getCategoriesApi } from "@/api/services/category.service";
interface Category {
  _id: string;
  categoryName: string;
  labelName: string;
  imageUrl: string;
  iconImage: string;
}

export default function HealthManthanLanding() {

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await getCategoriesApi();
        setCategories(res);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading categories...</p>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}

      <NavigationDesktop />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Find Right Doctors Her
            </h1>
            <p className="text-gray-600 mb-4">
              MBBS, DGO, DNB - Obstetrics & Gynecology, Fellowship in
              Reproductive Medicine
            </p>
            <p className="text-gray-600 mb-8">
              Infertility Specialist, Gynecologist, Obstetrician, Laparoscopic
              Surgeon (Obs & Gyn)
            </p>
            <div className="flex space-x-4">
              <button className="border-2 border-teal-500 text-teal-500 px-6 py-3 rounded hover:bg-teal-50 transition">
                Find Hospital
              </button>
              <button className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600 transition">
                Get Consultation
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg p-8">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=400&fit=crop"
                alt="Doctor consulting"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-wrap justify-center gap-4 pointer-events-none">
                {["💊", "🏥", "⚕️", "🩺", "💉", "🔬", "📋", "❤️"].map(
                  (icon, i) => (
                    <div
                      key={i}
                      className="bg-white bg-opacity-90 rounded-full p-3 shadow-lg text-2xl animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      {icon}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <Phone className="w-12 h-12 text-teal-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Free Consultation
                </h3>
                <p className="text-indigo-200">
                  With our Expert to find best hospital treatment
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 border-l border-r border-indigo-700 px-8">
              <Heart className="w-12 h-12 text-teal-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Provide Cashless Treatment
                </h3>
                <p className="text-indigo-200">
                  Collaboration having cashless treatment
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Users className="w-12 h-12 text-teal-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Provide Cashless Treatment
                </h3>
                <p className="text-indigo-200">
                  Collaboration having cashless treatment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((dot) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  dot === 3 ? "bg-teal-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <h2 className="text-4xl font-bold text-gray-900">Our Specialties</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
      {categories?.map((category) => (
        <div
          key={category._id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 text-center group cursor-pointer"
        >
          <div className="mb-4">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-50"></div>
              <img
                src={category?.iconImage || category?.imageUrl}
                alt={category?.categoryName}
                className="w-full h-full object-cover rounded-full relative z-10"
              />
            </div>
          </div>

          <h3 className="font-semibold text-gray-800 group-hover:text-teal-500 transition flex items-center justify-center">
            {category?.categoryName}
            <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition" />
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {category?.categoryName}
          </p>
        </div>
      ))}
    </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((dot) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  dot === 3 ? "bg-white" : "bg-teal-300"
                }`}
              />
            ))}
          </div>

          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Why Choose Us
          </h2>
          <p className="text-teal-100 text-center max-w-4xl mx-auto mb-12">
            Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser
            Surgery Eye Laser Surgery Eye Laser Surgery... Eye Laser Surgery Eye
            Laser Surgery Eye Laser Surgery... Eye Laser Surgery Eye Laser
            Surgery Eye Laser Surgery...
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-indigo-900 bg-opacity-80 backdrop-blur rounded-3xl p-8 text-center text-white">
              <div className="text-4xl font-bold mb-2">10000 +</div>
              <div className="text-indigo-200">HappyCustomer</div>
            </div>

            {/* Card 2 */}
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-3xl p-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop"
                alt="Hospital"
                className="w-full h-32 object-cover rounded-xl mb-3"
              />
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-1">10000 +</div>
                <div className="text-black">Hospitals</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white bg-opacity-20 backdrop-blur rounded-3xl p-6 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop"
                alt="Doctors"
                className="w-full h-32 object-cover rounded-xl mb-3"
              />
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-1">10000 +</div>
                <div className="text-black">HappyCustomer</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-indigo-900 bg-opacity-80 backdrop-blur rounded-3xl p-8 text-center text-white">
              <div className="text-4xl font-bold mb-2">10000 +</div>
              <div className="text-indigo-200">HappyCustomer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Your Surgery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-teal-50 rounded-3xl p-8 inline-block">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&h=400&fit=crop"
                alt="Doctor consultation"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-start space-x-2 mb-4">
              {[1, 2, 3, 4, 5].map((dot) => (
                <div
                  key={dot}
                  className={`w-2 h-2 rounded-full ${
                    dot === 3 ? "bg-teal-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Plan Your Surgery
            </h2>
            <p className="text-gray-600 mb-6">
              Get best consultation with our consultant & Plan your Surgery
              immediately
            </p>

            <button className="bg-teal-500 text-white px-8 py-3 rounded hover:bg-teal-600 transition shadow-lg hover:shadow-xl">
              Get Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="relative bg-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop"
            alt="Medical team"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="border-2 border-teal-400 rounded-lg p-8 bg-gray-900 bg-opacity-70 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser
                Surgery Eye Laser Surgery Eye Laser Surgery... Eye Laser Surgery
                Eye Laser Surgery Eye Laser Surgery... Eye Laser Surgery Eye
                Laser Surgery... Eye Laser Surgery Eye Laser Surgery Eye Laser
                Surgery...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Results Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-2 mb-4">
            {[1, 2, 3, 4, 5].map((dot) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full ${
                  dot === 3 ? "bg-teal-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Proven Result We Delivered
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-gradient-to-br from-indigo-900 to-indigo-800 rounded-lg p-8 text-center text-white"
              >
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-indigo-200">Happy Customer</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Happy Patient Testimonial Section */}
      <section className="relative bg-gray-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1200&h=600&fit=crop"
            alt="Happy patient"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Happy Patient
              <br />
              Gives Us Confidence
            </h2>

            <div className="mb-6">
              <div className="text-teal-400 text-6xl mb-4">"</div>
              <p className="text-white text-lg leading-relaxed">
                Eye Laser Surgery Eye Laser Surgery Eye Laser Surgery Eye Laser
                Surgery Eye Laser Surgery Eye Laser Surgery
              </p>
            </div>

            <p className="text-teal-400 font-semibold mb-4">
              Swatlee Jnvl, Delhi
            </p>

            <div className="flex space-x-3">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition">
                ←
              </button>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition">
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterDesktop />
    </div>
  );
}
