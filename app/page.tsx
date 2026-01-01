import HealthManthanLanding from "@/component/desktop/HealthManthanLanding";
import HealthManthanMobileView from "@/component/mobile/HealthManthanMobileView";

export default function Home() {
  return (
    <div className="w-full">
      {/* Mobile View */}
      <div className="block md:hidden">
        <HealthManthanMobileView />
      </div>

      {/* Web / Desktop View */}
      <div className="hidden md:block">
        <HealthManthanLanding />
      </div>
    </div>
  );
}
