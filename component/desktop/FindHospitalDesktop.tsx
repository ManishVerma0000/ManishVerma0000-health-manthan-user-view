"use client";

import { useEffect, useState } from "react";
import {
  Search,
  Phone,
} from "lucide-react";
import FooterDesktop from "@/component/desktop/FooterDesktop";
import { getSurgeryList } from "@/api/services/surgery.service";
import { useRouter } from "next/navigation";

interface Surgery {
  _id: string;
  surgeryName: string;
  paragraph: string;
  diseaseNeme: string;
  duration: string;
  recoveryTime: string;
  costingRange: string;
  icon: string;
  surgeryCategory: {
    _id: string;
    categoryName: string;
    imageUrl: string;
    iconImage: string;
  };
}

interface GroupedSurgeries {
  [categoryId: string]: {
    categoryName: string;
    categoryIcon: string;
    surgeries: Surgery[];
  };
}

export default function SurgeriesPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [surgeries, setSurgeries] = useState<Surgery[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurgeries = async () => {
      try {
        const res = await getSurgeryList();
        setSurgeries(res);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchSurgeries();
  }, []);

  const handleSurgeryPageDetails = (id: string) => {
    router.push(`surgery/${id}`);
  };

  // Group surgeries by category
  const groupedSurgeries: GroupedSurgeries = surgeries.reduce((acc, surgery) => {
    const categoryId = surgery.surgeryCategory._id;
    
    if (!acc[categoryId]) {
      acc[categoryId] = {
        categoryName: surgery.surgeryCategory.categoryName,
        categoryIcon: surgery.surgeryCategory.iconImage || surgery.icon,
        surgeries: []
      };
    }
    
    acc[categoryId].surgeries.push(surgery);
    return acc;
  }, {} as GroupedSurgeries);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading surgeries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
          <span className="hover:text-teal-600 cursor-pointer">
            Complete Care
          </span>
        </div>

        {/* Title and Description */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Surgeries & Procedures
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Explore our comprehensive range of surgical treatments. From
            advanced eye care to general surgery, we help you find the best
            specialists at transparent prices.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex max-w-md">
            <input
              type="text"
              placeholder="Search for surgeries, symptoms, or specialties"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-r transition-colors">
              Search
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-teal-500 text-white p-4 rounded-t font-semibold">
              Surgery Categories
            </div>
            <div className="bg-white rounded-b shadow-sm">
              {Object.entries(groupedSurgeries).map(([categoryId, category]) => (
                <div
                  key={categoryId}
                  onClick={() => setSelectedCategory(categoryId)}
                  className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors flex justify-between items-center ${
                    selectedCategory === categoryId ? 'bg-gray-50' : ''
                  }`}
                >
                  <span className="text-gray-700">{category.categoryName}</span>
                  <span className="text-gray-400">{category.surgeries.length}</span>
                </div>
              ))}
            </div>

            {/* Need Help Card */}
            <div className="mt-6 bg-teal-50 border border-teal-200 rounded p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Talk to our medical experts for free assistance.
              </p>
              <div className="flex items-center text-teal-600 font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                <span>Call 99543-43298</span>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {Object.entries(groupedSurgeries).map(([categoryId, category]) => (
              <div key={categoryId} className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center p-2">
                    <img
                      src={category.categoryIcon}
                      alt={category.categoryName}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {category.categoryName}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.surgeries.map((surgery) => (
                    <div
                      key={surgery._id}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-teal-50 rounded-full">
                          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center p-2">
                            <img
                              src={surgery.icon}
                              alt={surgery.surgeryName}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                        {surgery.surgeryName}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed line-clamp-3">
                        {surgery.paragraph}
                      </p>
                      <div className="border-t border-gray-200 pt-4 mt-4">
                        <p className="text-sm text-gray-500 mb-3 text-center font-medium">
                          {surgery.costingRange}
                        </p>
                        <button
                          onClick={() => handleSurgeryPageDetails(surgery._id)}
                          className="w-full bg-white border border-teal-500 text-teal-600 hover:bg-teal-50 font-medium py-2 rounded transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {surgeries.length === 0 && !loading && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No surgeries available at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <FooterDesktop />
    </div>
  );
}