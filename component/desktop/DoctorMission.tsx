import React from "react";

const OurMissionSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#001a2e] via-[#002840] to-[#003d5c] py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="doctormission.png"
          alt="Medical team"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001a2e]/80 via-[#002840]/60 to-transparent"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Skewed Border Container */}
          <div
            className="relative p-[2px] bg-gradient-to-r from-white/80 via-white/60 to-white/40"
            style={{
              clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
            }}
          >
            {/* Inner content with matching clip path */}
            <div
              className="bg-gradient-to-br from-[#001a2e]/90 via-[#002840]/85 to-[#003d5c]/90 backdrop-blur-md p-10 md:p-12"
              style={{
                clipPath: "polygon(3% 0, 100% 0, 97% 100%, 0 100%)",
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission
              </h2>
              <p className="text-gray-200 leading-relaxed text-base md:text-lg">
                Our mission is to provide safe, advanced, and affordable
                healthcare services with a focus on patient comfort and
                satisfaction. We aim to improve lives by delivering accurate
                diagnosis, effective treatments, and compassionate care using
                modern medical technology. We are dedicated to maintaining the
                highest standards of professionalism, ethics, and transparency,
                ensuring that every patient receives personalized attention and
                the best possible medical support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
