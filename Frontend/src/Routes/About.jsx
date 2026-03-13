import React from "react";
import visionIllustration from "../assets/vision-illustration.jpg";

export default function AboutSection() {
  return (
    <section className="relative text-white font-sans shadow-2xl overflow-hidden px-6 py-12 sm:px-10 sm:py-16 bg-black">
      {/* Background full overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="max-w-3xl">
          <h2 className="font-extrabold text-3xl sm:text-4xl tracking-wide uppercase mb-5">
            About Us
          </h2>

          <p className="text-[#e4e4e4] text-sm sm:text-base leading-7 mb-6">
            Today, we are a dedicated team of financial experts and innovators,
            committed to empowering our clients. We specialize in providing
            tailored financial planning, investment management, and loan
            solutions. Our approach blends traditional ethics with modern,
            tech-forward solutions to deliver clear results and foster
            sustainable growth. We pride ourselves on operating with the highest
            levels of integrity, professionalism, and a commitment to putting
            our customers first in every decision we make.
          </p>

          <h3 className="font-bold text-2xl sm:text-3xl uppercase mt-8 mb-4">
            Our Vision
          </h3>

          <p className="text-[#e4e4e4] text-sm sm:text-base leading-7">
            Our Vision is to provide Consumers & small business owners with
            fast, transparent and customized loans through SMCL. We utilize
            technology to offer a convenient, simple & fast application process.
            We will generate unique scores based on each profile using our
            proprietary credit engine to help customers avail loans via our
            lending partners.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="w-full h-72 sm:h-96 overflow-hidden rounded-xl shadow-xl border border-white/10">
          <img
            src={visionIllustration}
            alt="Vision Illustration"
            className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}
