import HealthManthanLanding from "@/component/desktop/HealthManthanLanding";

export default function Home() {
  return (
    <div className="w-full">
      {/* Unified responsive view - same content on mobile & desktop */}
      <HealthManthanLanding />
    </div>
  );
}
