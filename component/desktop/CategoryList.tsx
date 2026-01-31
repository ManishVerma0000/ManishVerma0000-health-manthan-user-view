import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import {
  getCategoriesApi,
  getSurgeryListApi,
} from "@/api/services/category.service";

interface SurgeryCategory {
  id: string;
  categoryName: string;
  imageUrl: string;
  iconImage: string;
  status: string;
}

const SpecialtiesSection = () => {
  const [data, setData] = useState<SurgeryCategory[]>([]);
  const [filteredData, setFilteredData] = useState<SurgeryCategory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getSurgeryListApi();
        const mapped: SurgeryCategory[] = res?.map((item: any) => ({
          id: item?._id,
          categoryName: item?.surgeryName,
          imageUrl: item?.icon,
          iconImage: item?.icon,
          status: item?.status,
        }));
        setData(mapped);
        setFilteredData(mapped);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, [getCategoriesApi]);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Decorative dots */}

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Specialties
          </h2>
        </div>

        {/* Grid of Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredData.map((category) => (
            <div
              key={category.id}
              //   className="group  rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center"
            >
              {/* Image Container */}
              <div className="w-full aspect-square mb-4 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={category.iconImage || category.imageUrl}
                  alt={category.categoryName}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Category Name and Arrow */}
              <div className="flex items-center justify-center gap-2 text-center w-full">
                <h3 className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                  {category.categoryName}
                </h3>
                <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* View All Button (Optional) */}
        {filteredData.length > 10 && (
          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium">
              View All Specialties
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpecialtiesSection;
