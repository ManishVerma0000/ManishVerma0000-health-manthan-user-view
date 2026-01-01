import ContactUsDesktop from "@/component/desktop/ContactUsDesktop";
import ContactUsMobile from "@/component/mobile/ContactUsMobile";


export default function Contact() {
  return (
    <div className="w-full">
      {/* Mobile View */}
      <div className="block md:hidden">
        <ContactUsMobile/>
      </div>

      {/* Web / Desktop View */}
      <div className="hidden md:block">
        <ContactUsDesktop />
      </div>
    </div>
  );
}
