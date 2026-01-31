import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "I had my eye laser surgery here and the experience was amazing. The doctors were very professional, and the staff took great care of me. My vision is clear now, and I feel more confident than ever.",
      author: "Sumitra Rani, Delhi",
      image: "42ba50f4e76062ab6a6b1b43f0aabfb130f05a62.png",
    },
    // {
    //   quote:
    //     "I had my eye laser surgery here and the experience was amazing. The doctors were very professional, and the staff took great care of me. My vision is clear now, and I feel more confident than ever.",
    //   author: "Sumitra Rani, Delhi",
    //   image: "409738d1d049c4e6740e9c948392ed85.jpg",
    // },
    {
      quote:
        "I came here for my treatment and I am very satisfied with the service. The doctors listened to my problems carefully and provided the right guidance. The facilities are clean and well-maintained. Highly recommended.",
      author: "Amit Verma, Faridabad",
      image: "409738d1d049c4e6740e9c948392ed85.jpg",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="relative h-[600px] overflow-hidden bg-black">
      {/* Grid Layout Container */}
      <div className="relative h-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Content with Decorative Background */}
        <div className="relative flex items-center bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden">
          {/* Decorative blur effects */}
          <div className="absolute top-20 -left-20 w-64 h-64 bg-yellow-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-40 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-xl mx-auto px-8 sm:px-12 lg:px-16">
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Happy Patient
              <br />
              Gives Us Confidence
            </h2>

            {/* Quote Icon */}
            <div className="mb-6">
              {/* Quote Text */}
              <p className="text-white text-lg leading-relaxed font-light">
                {testimonials[currentTestimonial].quote}
              </p>
            </div>

            {/* Author */}
            <p className="text-white font-medium mb-6 italic">
              {testimonials[currentTestimonial].author}
            </p>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative overflow-hidden">
          <img
            src={testimonials[currentTestimonial].image}
            alt="Happy patient"
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay for better blending */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>

          {/* Yellow/Gold light effects on the right */}
          <div className="absolute top-10 right-10 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
