"use client";

export default function AboutUsDesktop() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">About HealthManthan</h1>
          <p className="text-lg max-w-2xl opacity-90">
            A trusted healthcare platform helping patients make informed
            medical decisions with confidence.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed">
            HealthManthan bridges the gap between patients and quality
            healthcare providers. We partner with hospitals, clinics, and
            experienced doctors to deliver reliable medical services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To simplify healthcare discovery and make expert medical help
            accessible, transparent, and trustworthy for everyone.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">
            Why Choose HealthManthan
          </h2>

          <div className="grid grid-cols-4 gap-6">
            {[
              "Verified Doctors",
              "Trusted Hospitals",
              "Easy Appointments",
              "Quick Consultation",
            ].map((item) => (
              <div
                key={item}
                className="border border-cyan-200 rounded-xl p-6 text-center"
              >
                <p className="text-cyan-700 font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
