// import ContactUsForm from "@/app/contact-us/page";

import ContactUsFormCommon from "../common/ContactUs";
import FooterDesktop from "./FooterDesktop";
import NavigationDesktop from "./NavigationDesktop";

export default function ContactUsDesktop() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <NavigationDesktop />

        <ContactUsFormCommon />
        <FooterDesktop />
      </div>
    </>
  );
}
