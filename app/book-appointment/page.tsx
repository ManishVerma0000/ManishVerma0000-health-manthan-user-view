"use client";
import { Suspense } from "react";
import AppLayout from "@/component/common/AppLayout";
import BookAppointmentDesktop from "@/component/desktop/BookAppointmentDesktop";

// Loading component
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading appointment form...</p>
      </div>
    </div>
  );
}

export default function BookAppointmentPage() {
  return (
    <AppLayout>
      <Suspense fallback={<LoadingFallback />}>
        <BookAppointmentDesktop />
      </Suspense>
    </AppLayout>
  );
}