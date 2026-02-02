"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import FooterDesktop from "@/component/desktop/FooterDesktop";
import { getSurgeryList } from "@/api/services/surgery.service";
import { useRouter } from "next/navigation";

/* ================= TYPES ================= */

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

/* ================= COMPONENT ================= */

export default function SurgeriesPage() {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [surgeries, setSurgeries] = useState<Surgery[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* ================= FETCH DATA ================= */

  useEffect(() => {
    const fetchSurgeries = async () => {
      try {
        const res = await getSurgeryList();

        setSurgeries(res);

        // Default first category
        if (res.length > 0) {
          setSelectedCategory(res[0].surgeryCategory._id);
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchSurgeries();
  }, []);

  /* ================= NAVIGATION ================= */

  const handleSurgeryPageDetails = (id: string) => {
    router.push(`surgery/${id}`);
  };

  /* ================= GROUP BY CATEGORY ================= */

  const groupedSurgeries: GroupedSurgeries = surgeries.reduce(
    (acc, surgery) => {
      const categoryId = surgery.surgeryCategory._id;

      if (!acc[categoryId]) {
        acc[categoryId] = {
          categoryName: surgery.surgeryCategory.categoryName,
          categoryIcon: surgery.surgeryCategory.iconImage || surgery.icon,
          surgeries: [],
        };
      }

      acc[categoryId].surgeries.push(surgery);

      return acc;
    },
    {} as GroupedSurgeries,
  );

  /* ================= SEARCH FILTER ================= */

  const filteredGroupedSurgeries: GroupedSurgeries = Object.entries(
    groupedSurgeries,
  ).reduce((acc, [categoryId, category]) => {
    const filteredSurgeries = category.surgeries.filter((surgery) => {
      const query = searchQuery.toLowerCase();

      return (
        surgery.surgeryName.toLowerCase().includes(query) ||
        surgery.diseaseNeme?.toLowerCase().includes(query) ||
        surgery.paragraph?.toLowerCase().includes(query) ||
        category.categoryName.toLowerCase().includes(query)
      );
    });

    if (filteredSurgeries.length > 0) {
      acc[categoryId] = {
        ...category,
        surgeries: filteredSurgeries,
      };
    }

    return acc;
  }, {} as GroupedSurgeries);

  /* ================= LOADING ================= */

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12  border-teal-600 mx-auto" />
          <p className="mt-4 text-gray-600">Loading surgeries...</p>
        </div>
      </div>
    );
  }

  /* ================= UI ================= */

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}

        <div className="text-sm text-gray-600 mb-4">
          <span className="hover:text-teal-600 cursor-pointer">
            Complete Care
          </span>
        </div>

        {/* Title */}

        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Surgeries & Procedures
          </h1>

          <p className="text-gray-600 max-w-3xl">
            Explore our comprehensive range of surgical treatments.
          </p>
        </div>

        {/* Search */}

        <div className="mb-6">
          <div className="flex max-w-md">
            <input
              type="text"
              placeholder="Search surgeries..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSelectedCategory(null);
              }}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l focus:ring-2 focus:ring-teal-500 outline-none"
            />

            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-r">
              Search
            </button>
          </div>
        </div>

        {/* ================= MOBILE TABS ================= */}

        <div className="lg:hidden mb-6 overflow-x-auto">
          <div className="flex gap-3 min-w-max px-1">
            {Object.entries(filteredGroupedSurgeries).map(([id, cat]) => (
              <button
                key={id}
                onClick={() => setSelectedCategory(id)}
                className={`px-4 py-2 rounded-full text-sm font-medium border whitespace-nowrap
                  ${
                    selectedCategory === id
                      ? "bg-teal-500 text-white border-teal-500"
                      : "bg-white text-gray-600 border-gray-300"
                  }`}
              >
                {cat.categoryName}
              </button>
            ))}
          </div>
        </div>

        {/* ================= MAIN GRID ================= */}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* ================= DESKTOP SIDEBAR ================= */}

          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-teal-500 text-white p-4 rounded-t font-semibold">
              Surgery Categories
            </div>

            <div className="bg-white rounded-b shadow-sm">
              {Object.entries(filteredGroupedSurgeries).map(
                ([id, category]) => (
                  <div
                    key={id}
                    onClick={() => setSelectedCategory(id)}
                    className={`p-4  cursor-pointer flex justify-between hover:bg-gray-50
                    ${selectedCategory === id ? "bg-gray-200" : ""}`}
                  >
                    <span>{category.categoryName}</span>

                    <span className="text-gray-400">
                      {category.surgeries.length}
                    </span>
                  </div>
                ),
              )}
            </div>

            {/* Help Card */}

            <div className="mt-6 bg-teal-50  rounded p-4">
              <h3 className="font-semibold mb-2">Need Help?</h3>

              <p className="text-sm text-gray-600 mb-3">
                Talk to experts for free.
              </p>

              <div className="flex items-center text-teal-600 font-semibold">
                <Phone className="w-4 h-4 mr-2" />
                <span>Call 99543-43298</span>
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}

          <div className="lg:col-span-3">
            {Object.entries(filteredGroupedSurgeries)

              .filter(([id]) => !selectedCategory || id === selectedCategory)

              .map(([categoryId, category]) => (
                <div key={categoryId} className="mb-8">
                  {/* Category Header */}

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center p-2">
                      <img
                        src={category.categoryIcon}
                        alt={category.categoryName}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <h2 className="text-xl lg:text-2xl font-semibold">
                      {category.categoryName}
                    </h2>
                  </div>

                  {/* Cards */}

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                    {category.surgeries.map((surgery) => (
                      <div
                        key={surgery._id}
                        className="bg-white rounded-lg  shadow-sm p-4 lg:p-6 hover:shadow-md transition"
                      >
                        {/* Icon */}

                        <div className="flex justify-center mb-3">
                          <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center p-2">
                            <img
                              src={surgery.icon}
                              alt={surgery.surgeryName}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </div>

                        {/* Name */}

                        <h3 className="text-sm lg:text-lg font-semibold text-center mb-2">
                          {surgery.surgeryName}
                        </h3>

                        {/* Desc */}

                        <p className="text-xs lg:text-sm text-gray-600 text-center line-clamp-2 mb-3">
                          {surgery.paragraph}
                        </p>

                        {/* Footer */}

                        <div className=" pt-3">
                          <p className="text-xs lg:text-sm text-gray-500 text-center mb-2">
                            {surgery.costingRange}
                          </p>

                          <button
                            onClick={() =>
                              handleSurgeryPageDetails(surgery._id)
                            }
                            className="w-full border border-teal-500 text-teal-600 hover:bg-teal-50 text-sm py-1.5 rounded"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

            {/* No Result */}

            {Object.keys(filteredGroupedSurgeries).length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No results found.
              </div>
            )}
          </div>
        </div>
      </main>

      <FooterDesktop />
    </div>
  );
}
