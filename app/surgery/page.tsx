import FindHospitalDesktop from "@/component/desktop/FindHospitalDesktop";
import FindHospitalMobile from "@/component/mobile/FindHospitalMobile";


export default function Home() {
  return (
    <div className="w-full">
      {/* Mobile View */}
      <div className="block md:hidden">
        <FindHospitalMobile />
      </div>

      {/* Web / Desktop View */}
      <div className="hidden md:block">
        <FindHospitalDesktop />
      </div>
    </div>
  );
}
