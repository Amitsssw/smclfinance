import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import heroImage from "../assets/heroimage1.png";

const HeroSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToForm = () => {
    if (location.pathname !== "/") {
      navigate("/#loan-application-form");
    } else {
      const form = document.getElementById("loan-application-form");
      if (form) {
        form.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (location.hash === "#loan-application-form") {
      const form = document.getElementById("loan-application-form");
      if (form) {
        form.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <section className="w-full text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-5">
            Fast & Secure <br /> HOME & BUSINESS Loans
          </h1>

          <p className="text-lg sm:text-xl mb-6 text-white/90">
            Lowest interest • Quick approval • 100% paperless process
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 text-lg mb-6">
            <span className="flex items-center gap-2">🛡️ RBI Compliant</span>
            <span className="flex items-center gap-2">🔒 Data Security</span>
          </div>

          <button
            onClick={scrollToForm}
            className="bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg text-lg shadow-md hover:bg-yellow-500 transition"
          >
            Apply Now
          </button>
        </div>

        <div className="flex-1 hidden justify-end sm:hidden lg:block">
          <img
            src={heroImage}
            alt="hero"
            className="w-full max-w-2xl object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
