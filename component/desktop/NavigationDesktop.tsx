import { Activity, ArrowRight } from "lucide-react";

export default function NavigationDesktop() {
  return (
    <>
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Activity className="w-8 h-8 text-teal-500" />
              <span className="text-2xl font-bold">
                <span className="text-gray-800">Health</span>
                <span className="text-teal-500"> Manthan</span>
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-gray-700 hover:text-teal-500">
                Home
              </a>
              <a
                href="/surgery"
                className="text-gray-700 hover:text-teal-500 flex items-center"
              >
                Surgery <ArrowRight className="w-4 h-4 ml-1" />
              </a>
              <a href="/find-doctor" className="text-gray-700 hover:text-teal-500">
                Find Hospital
              </a>
              <a href="/about-us" className="text-gray-700 hover:text-teal-500">
                About Us
              </a>
              <button className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 transition">
                Get Consultation
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
