import AppLayout from "@/component/common/AppLayout";
import HealthManthanLanding from "@/component/desktop/HealthManthanLanding";

export default function Home() {
  return (
    <AppLayout>
      {/* Unified responsive view - same content on mobile & desktop */}
      <div className="w-full">
        <HealthManthanLanding />
      </div>
    </AppLayout>
  );
}
