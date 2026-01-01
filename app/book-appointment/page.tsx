import BookAppointmentDesktop from "@/component/desktop/BookAppointmentDesktop";
import BookAppointmentMobile from "@/component/mobile/BookAppointmentMobile";


export default function Home() {
  return (
    <div className="w-full">
      {/* Mobile View */}
      <div className="block md:hidden">
        <BookAppointmentMobile />
      </div>

      {/* Web / Desktop View */}
      <div className="hidden md:block">
        <BookAppointmentDesktop />
      </div>
    </div>
  );
}
