import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="px-4 pb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#1e3a8a]">
            Health Vandanam
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-gray-700">H</span>
          <span className="text-sm font-semibold text-[#0ea5e9]">M</span>
        </div>
      </div>

      <div className="flex gap-4">
        <a
          href="#"
          className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
        >
          <Facebook
            size={20}
            className="text-gray-600 group-hover:text-[#1e3a8a]"
          />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
        >
          <Linkedin
            size={20}
            className="text-gray-600 group-hover:text-[#1e3a8a]"
          />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
        >
          <Instagram
            size={20}
            className="text-gray-600 group-hover:text-[#1e3a8a]"
          />
        </a>
        <a
          href="#"
          className="w-10 h-10 bg-gray-100 hover:bg-blue-100 rounded-full flex items-center justify-center transition-colors group"
        >
          <Twitter
            size={20}
            className="text-gray-600 group-hover:text-[#1e3a8a]"
          />
        </a>
      </div>
    </footer>
  );
};


export default Footer;