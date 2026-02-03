"use client";
 
import { useState } from "react";
import {
  Search,
  Eye,
  Droplet,
  Zap,
  Activity,
  Scissors,
  Wrench,
  Gem,
  Plus,
  Phone,
} from "lucide-react";
import AppLayout from "@/component/common/AppLayout";

interface Procedure {
  icon: string;
  title: string;
  description: string;
  startingPrice: string;
  buttonText: string;
}

interface SurgeryCategory {
  id: string;
  title: string;
  icon: string;
  count: number;
  procedures: Procedure[];
}

export default function SurgeriesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const surgeryCategories: any[] = [
    {
      id: "eye-care",
      title: "Eye Care (Ophthalmology)",
      icon: <Eye className="w-5 h-5" />,
      count: 3,
      procedures: [
        {
          icon: <Eye className="w-8 h-8 text-teal-500" />,
          title: "Cataract Surgery",
          description:
            "Micro-incision cataract surgery (MICS) using Phaco technique. Multifocal, Toric & Trifocal IOL available.",
          startingPrice: "Starts at Rs.500",
          buttonText: "View Details",
        },
        {
          icon: <Zap className="w-8 h-8 text-teal-500" />,
          title: "LASIK Laser",
          description:
            "Get rid of glasses with Contoura Vision, SMILE, or standard LASIK procedure.",
          startingPrice: "Starts at Rs.50,000",
          buttonText: "View Details",
        },
        {
          icon: <Droplet className="w-8 h-8 text-teal-500" />,
          title: "Glaucoma",
          description:
            "Advanced laser treatment (Trabeculoplasty) to lower eye pressure and stop vision loss.",
          startingPrice: "Insurance Accepted",
          buttonText: "View Details",
        },
      ],
    },
    {
      id: "retina-surgery",
      title: "Retina Surgery",
      icon: <Activity className="w-5 h-5" />,
      count: 1,
      procedures: [
        {
          icon: <Activity className="w-8 h-8 text-teal-500" />,
          title: "Retina Surgery",
          description:
            "Vitrectomy for retinal detachment and diabetic retinopathy.",
          startingPrice: "Expert Surgeons!",
          buttonText: "View Details",
        },
      ],
    },
    {
      id: "proctology",
      title: "Proctology (Anorectal)",
      icon: <Activity className="w-5 h-5" />,
      count: 2,
      procedures: [
        {
          icon: <Droplet className="w-8 h-8 text-teal-500" />,
          title: "Laser Piles",
          description:
            "Painless stapler/laser/ligated surgery for piles. Discharge on the same day.",
          startingPrice: "Starts at Rs.45,000",
          buttonText: "View Details",
        },
        {
          icon: <Scissors className="w-8 h-8 text-teal-500" />,
          title: "Anal Fissure",
          description:
            "Laser procedure/surgery for chronic fissure. No pain and quick recovery.",
          startingPrice: "Starts at Expert Doctors/Care",
          buttonText: "View Details",
        },
      ],
    },
    {
      id: "general-surgery",
      title: "General Surgery (Laparoscopy)",
      icon: <Activity className="w-5 h-5" />,
      count: 3,
      procedures: [
        {
          icon: <Wrench className="w-8 h-8 text-teal-500" />,
          title: "Hernia Repair",
          description:
            "Laparoscopic/TAPP, Hernia Repair for inguinal, umbilical, and incisional hernias.",
          startingPrice: "Insurance Covered!",
          buttonText: "View Details",
        },
        {
          icon: <Gem className="w-8 h-8 text-teal-500" />,
          title: "Gallstones",
          description:
            "Same day discharge for gallbladder removal surgery. Optional laparoscopy.",
          startingPrice: "Starts at Rs.45,000",
          buttonText: "View Details",
        },
        {
          icon: <Plus className="w-8 h-8 text-teal-500" />,
          title: "Appendicitis",
          description: "Emergency appendix removal surgery (laparoscopic).",
          startingPrice: "Emergency Care",
          buttonText: "View Details",
        },
      ],
    },
  ];

  return (
    <AppLayout>
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

          {/* Main Content Area */}
          <div className="lg:col-span-4">
            {surgeryCategories.map((category) => (
              <div key={category.id} className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-teal-100 rounded-full">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {category.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category?.procedures?.map(
                    (procedure: any, index: number) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
                      >
                        <div className="flex justify-center mb-4">
                          <div className="p-3 bg-teal-50 rounded-full">
                            {procedure.icon}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                          {procedure.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">
                          {procedure.description}
                        </p>
                        <div className="border-t border-gray-200 pt-4 mt-4">
                          <p className="text-sm text-gray-500 mb-3 text-center">
                            {procedure.startingPrice}
                          </p>
                          <button className="w-full bg-white border border-teal-500 text-teal-600 hover:bg-teal-50 font-medium py-2 rounded transition-colors">
                            {procedure.buttonText}
                          </button>
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        </main>
      </div>
    </AppLayout>
  );
}
