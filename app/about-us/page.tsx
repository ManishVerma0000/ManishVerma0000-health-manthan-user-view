import AboutUsDesktop from "@/component/desktop/AboutUsDesktop";
import AboutUsMobile from "@/component/mobile/AboutUsMobile";

export default function AboutUsPage() {
  return (
    <div className="w-full">
      {/* Mobile */}
      <div className="block md:hidden">
        <AboutUsMobile />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <AboutUsDesktop />
      </div>
    </div>
  );
}
