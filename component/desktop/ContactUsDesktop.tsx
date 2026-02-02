// import ContactUsForm from "@/app/contact-us/page";


"use client"
import ContactUsFormCommon from "../common/ContactUs";
import FooterDesktop from "./FooterDesktop";

export default function ContactUsDesktop() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <ContactUsFormCommon />
        <FooterDesktop />
      </div>
    </>
  );
}
