import React from "react";

const WhyChooseUsExact = () => {
  return (
    <section className="bg-[#0a6b7a] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 px-4">
          Why Choose Us
        </h2>

        {/* Description */}
        <p className="text-white/80 max-w-3xl mb-16 px-4 leading-relaxed text-base">
          We are committed to providing the highest quality healthcare with
          advanced technology and personalized care. Our experienced doctors and
          friendly staff ensure that every patient feels safe, comfortable, and
          confident throughout their treatment journey. With state-of-the-art
          facilities, transparent consultation, and a patient-first approach, we
          focus on delivering accurate diagnosis, effective treatment, and
          long-lasting results. Thousands of satisfied patients trust us for
          reliable medical services and exceptional care. Your health, comfort,
          and satisfaction are always our top priority.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
          {/* Card 1 - Solid Purple */}
          <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/20 transition-all hover:scale-105 hover:border-white/40 duration-300 min-h-[280px] group">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={"happypatient.jpg"}
                alt="Hospitals"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/40 to-teal-900/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="text-6xl font-bold text-white mb-3">10000 +</div>
              <div className="text-lg text-white font-normal">
                Happy Customers
              </div>
            </div>
          </div>

          {/* Card 2 - Hospital Image */}
          <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/20 transition-all hover:scale-105 hover:border-white/40 duration-300 min-h-[280px] group">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={'hospital.jpg'}
                alt="Hospitals"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/40 to-teal-900/80"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="text-6xl font-bold text-white mb-3">10000 +</div>
              <div className="text-lg text-white font-normal">Hospitals</div>
            </div>
          </div>

          {/* Card 3 - Doctors Image */}
          <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/20 transition-all hover:scale-105 hover:border-white/40 duration-300 min-h-[280px] group">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop"
                alt="Happy Customers"
                className="w-full h-full object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/40 to-teal-900/80"></div>
            </div>

            {/* Content */}

            <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/20 transition-all hover:scale-105 hover:border-white/40 duration-300 min-h-[280px] group">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={'doctor.jpg'}
                  alt="Hospitals"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-900/40 to-teal-900/80"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
                <div className="text-6xl font-bold text-white mb-3">
                  10000 +
                </div>
                <div className="text-lg text-teal-200 font-normal">
                  Doctors
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 - Solid Purple */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-indigo-900 to-indigo-950 border-4 border-indigo-400/30 p-8 flex flex-col items-center justify-center text-center transition-all hover:scale-105 hover:border-indigo-400/50 duration-300 min-h-[280px]">
            <div className="text-6xl font-bold text-white mb-3">10000 +</div>
            <div className="text-lg text-indigo-200 font-normal">
              Surgery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsExact;
