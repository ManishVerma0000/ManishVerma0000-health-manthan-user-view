'use client';

import { useState } from 'react';
import { Check, Phone, ChevronDown, ChevronUp, Star } from 'lucide-react';
import AppLayout from '@/component/common/AppLayout';

export default function CataractSurgeryPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is Cataract surgery painful?',
      answer: 'No, the surgery is performed under local anaesthesia (eye drops), so it is completely painless. You may feel slight pressure during the procedure, but no pain.'
    },
    {
      question: 'How long does the recovery take?',
      answer: 'Most patients experience improved vision within 24-48 hours after surgery. Complete healing typically takes 4-6 weeks, though you can resume normal activities within a few days.'
    },
    {
      question: 'Can I watch TV after surgery?',
      answer: 'Yes, you can watch TV after surgery, but it\'s recommended to take breaks and avoid straining your eyes. Follow your doctor\'s specific post-operative instructions.'
    },
    {
      question: 'Is the cost covered by insurance?',
      answer: 'Many insurance plans cover cataract surgery as it is considered a medically necessary procedure. We can help you verify your coverage and handle insurance claims.'
    }
  ];

  const specialists = [
    {
      name: 'Dr. Anjali Gupta',
      title: 'Senior Ophthalmologist',
      credentials: 'MBBS, MS (Ophthalmology) • 15+ Years Experience',
      specialties: 'Specializes in Conic Cataract Surgeries',
      rating: 4.9,
      image: '/api/placeholder/80/80'
    },
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Retina & Cataract Specialist',
      credentials: 'MBBS, MS, FRCS • 12+ Years Experience',
      specialties: 'Specializes in Complicated Cases',
      rating: 4.8,
      image: '/api/placeholder/80/80'
    }
  ];

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content - 2/3 width */}
          <div className="lg:col-span-2">
            {/* Title Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Cataract Surgery</h1>
              <p className="text-gray-600 leading-relaxed mb-6">
                Advanced Micro-Incision Cataract Surgery (MICS) with premium lens implants. Regain clear 
                vision with a safe, painless, & extremely effective procedure.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Duration</p>
                  <p className="font-semibold text-gray-900">15-20 Mins</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Anaesthesia</p>
                  <p className="font-semibold text-gray-900">Eye Drops (Topical)</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Recovery Time</p>
                  <p className="font-semibold text-gray-900">Day Care (No stay)</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-1">Results</p>
                <p className="font-semibold text-gray-900">2-3 Days</p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">US-FDA Approved</h3>
                    <p className="text-sm text-gray-600">100% Safe and effective</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">No Cost EMI</h3>
                    <p className="text-sm text-gray-600">Starting from ₹1500/month</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Insurance Handling</h3>
                    <p className="text-sm text-gray-600">We handle all paperwork</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Free Cab Service</h3>
                    <p className="text-sm text-gray-600">Pick up & drop facility</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Lens Options */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lens Options</h2>
              <p className="text-gray-600 mb-6">
                We offer a wide range of Intraocular lenses (IOL) to suit your lifestyle and vision needs.
              </p>

              <div className="space-y-4">
                {/* Monofocal Lenses */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-900">Monofocal Lenses</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      Standard
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Corrects vision for one distance (usually far). You will need glasses for reading.
                  </p>
                  <p className="text-sm text-teal-600 font-medium">
                    Popular Brands: Alcon, Johnson & Johnson
                  </p>
                </div>

                {/* Toric Lenses */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-900">Toric Lenses</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      Astigmatism
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Specially designed for patients with cylindrical power (Astigmatism). Provides sharper vision.
                  </p>
                  <p className="text-sm text-teal-600 font-medium">
                    Popular Brands: Zeiss, India
                  </p>
                </div>

                {/* Multifocal / Trifocal Lenses */}
                <div className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-900">Multifocal / Trifocal Lenses</h3>
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">
                      Premium
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Corrects vision for near, intermediate, and far distances. Reduces or eliminates dependence on glasses.
                  </p>
                  <p className="text-sm text-teal-600 font-medium">
                    Popular Brands: Alcon PanOptix, Synergy
                  </p>
                </div>
              </div>
            </div>

            {/* Meet Our Specialists */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Meet Our Specialists</h2>
              
              <div className="space-y-6">
                {specialists.map((specialist, index) => (
                  <div key={index} className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-600"></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{specialist.name}</h3>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="text-sm font-medium text-gray-900">{specialist.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-teal-600 font-medium mb-1">{specialist.title}</p>
                      <p className="text-sm text-gray-600 mb-1">{specialist.credentials}</p>
                      <p className="text-sm text-gray-500">{specialist.specialties}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full flex justify-between items-center p-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

            {/* Right Sidebar - 1/3 width */}
          <div className="lg:col-span-1">
            {/* Consultation Form */}
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book Free Consultation</h3>
              <p className="text-sm text-gray-600 mb-6">
                Get expert advice with a convenient in-person visit
              </p>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 12345"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select City
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Bangalore</option>
                    <option>Chennai</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Book Appointment Now
                </button>
              </form>

              {/* Treatment Cost */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-600">Treatment Cost</span>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-gray-900">₹18,000</span>
                    <span className="text-sm text-gray-500"> onwards</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>Inclusive Implant Fee. Of charge & taxes</span>
                </div>
              </div>

              {/* Need Help */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3 text-center">
                  <span className="font-semibold">Need Help?</span><br />
                  Speak to our medical experts directly.
                </p>
                <button className="w-full flex items-center justify-center gap-2 bg-white border-2 border-teal-500 text-teal-600 hover:bg-teal-50 font-semibold py-3 rounded-lg transition-colors">
                  <Phone className="w-4 h-4" />
                  Call 98765 43298
                </button>
              </div>
            </div>
          </div>
        </div>
        </main>
      </div>
    </AppLayout>
  );
}