'use client';

import { useState, useEffect } from 'react';
import { Check, Phone, ChevronDown, ChevronUp, Star } from 'lucide-react';
import NavigationDesktop from '@/component/desktop/NavigationDesktop';
import FooterDesktop from '@/component/desktop/FooterDesktop';
import { useParams } from 'next/navigation';

interface SurgeryData {
  _id: string;
  surgeryName: string;
  paragraph: string;
  diseaseNeme: string;
  duration: string;
  recoveryTime: string;
  treatedBy: {
    _id: string;
    treatedByName: string;
  };
  costingRange: string;
  icon: string;
  images: string[];
  symptoms: Array<{
    subcategory: string;
    paragraph: string;
    _id: string;
  }>;
  procedureTimeline: Array<{
    step: string;
    typeProcedure: string;
    duration: string;
    medication: string;
    _id: string;
  }>;
  benefits: string[];
  risks: string[];
  recoveryTimeline: Array<{
    stage: string;
    mention: string;
    lightCare: string;
    _id: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
    _id: string;
  }>;
}

interface ApiResponse {
  message: string;
  data: SurgeryData;
  success: boolean;
  statusCode: number;
}

export default function CataractSurgeryPage() {
  const params = useParams();
  const surgeryId = params?.id as string;
  
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [surgeryData, setSurgeryData] = useState<SurgeryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    city: 'Mumbai'
  });

  useEffect(() => {
    const fetchSurgeryData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/surgery/${surgeryId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch surgery data');
        }
        
        const result: ApiResponse = await response.json();
        
        if (result.success) {
          setSurgeryData(result.data);
        } else {
          throw new Error(result.message || 'Failed to load data');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (surgeryId) {
      fetchSurgeryData();
    }
  }, [surgeryId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your booking API call here
  };

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

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading surgery details...</p>
        </div>
      </div>
    );
  }

  if (error || !surgeryData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 text-lg">{error || 'Failed to load surgery data'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavigationDesktop />
      
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content - 2/3 width */}
          <div className="lg:col-span-2">
            {/* Title Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center p-2 flex-shrink-0">
                  <img
                    src={surgeryData.icon}
                    alt={surgeryData.surgeryName}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{surgeryData.surgeryName}</h1>
                  <p className="text-sm text-teal-600 font-medium">{surgeryData.diseaseNeme}</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {surgeryData.paragraph}
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Duration</p>
                  <p className="font-semibold text-gray-900">{surgeryData.duration}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Treated By</p>
                  <p className="font-semibold text-gray-900">{surgeryData.treatedBy.treatedByName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Recovery Time</p>
                  <p className="font-semibold text-gray-900">{surgeryData.recoveryTime}</p>
                </div>
              </div>
            </div>

            {/* Images Gallery */}
            {surgeryData.images && surgeryData.images.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Procedure Images</h2>
                <div className="grid grid-cols-2 gap-4">
                  {surgeryData.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`Surgery procedure ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Symptoms */}
            {surgeryData.symptoms && surgeryData.symptoms.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Symptoms</h2>
                <div className="space-y-4">
                  {surgeryData.symptoms.map((symptom) => (
                    <div key={symptom._id} className="border-l-4 border-teal-500 pl-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{symptom.subcategory}</h3>
                      <p className="text-sm text-gray-600">{symptom.paragraph}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {surgeryData.benefits && surgeryData.benefits.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {surgeryData.benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center">
                          <Check className="w-6 h-6 text-teal-600" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">{benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Risks */}
            {surgeryData.risks && surgeryData.risks.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Risks & Considerations</h2>
                <div className="space-y-3">
                  {surgeryData.risks.map((risk, index) => (
                    <div key={index} className="flex gap-3">
                      <span className="text-orange-500 font-bold">•</span>
                      <p className="text-sm text-gray-600">{risk}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Procedure Timeline */}
            {surgeryData.procedureTimeline && surgeryData.procedureTimeline.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Procedure Timeline</h2>
                <div className="space-y-4">
                  {surgeryData.procedureTimeline.map((timeline, index) => (
                    <div key={timeline._id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">{timeline.step}</h3>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-gray-500">Type: </span>
                              <span className="text-gray-900">{timeline.typeProcedure}</span>
                            </div>
                            <div>
                              <span className="text-gray-500">Duration: </span>
                              <span className="text-gray-900">{timeline.duration}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">
                            <span className="font-medium">Medication: </span>
                            {timeline.medication}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Recovery Timeline */}
            {surgeryData.recoveryTimeline && surgeryData.recoveryTimeline.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recovery Timeline</h2>
                <div className="space-y-4">
                  {surgeryData.recoveryTimeline.map((recovery) => (
                    <div key={recovery._id} className="border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-900 mb-3">{recovery.stage}</h3>
                      <p className="text-sm text-gray-600 mb-2">{recovery.mention}</p>
                      <p className="text-sm text-teal-600 font-medium">Care: {recovery.lightCare}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

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
            {surgeryData.faqs && surgeryData.faqs.length > 0 && (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  {surgeryData.faqs.map((faq, index) => (
                    <div key={faq._id} className="border border-gray-200 rounded-lg">
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
            )}
          </div>

          {/* Right Sidebar - 1/3 width */}
          <div className="lg:col-span-1">
            {/* Consultation Form */}
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Book Free Consultation</h3>
              <p className="text-sm text-gray-600 mb-6">
                Get expert advice with a convenient in-person visit
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="+91 98765 12345"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select City
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
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
                    <span className="text-xl font-bold text-gray-900">{surgeryData.costingRange}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Check className="w-4 h-4 text-teal-600" />
                  <span>Inclusive of all charges & taxes</span>
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

      <FooterDesktop />
    </div>
  );
}