import DoctorSearchPage from "@/component/desktop/DoctorSearchDesktop";
import DoctorSearchMobile from "@/component/mobile/DoctorSearchMobile";



export default function Home() {
  return (
    <div className="w-full">
      {/* Mobile View */}
      <div className="block md:hidden">
        <DoctorSearchMobile />
      </div>

      {/* Web / Desktop View */}
      <div className="hidden md:block">
        <DoctorSearchPage />
      </div>
    </div>
  );
}