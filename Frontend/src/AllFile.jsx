import EMICalculator from "./components/EMICalculator";

// CHANGED: Keep asset imports same
import fronImage from "./assets/fron.jpg";
import HeroSection from "./components/HeroSection";
import LoanTypes from "./components/LoanTypes";
import HowItWorks from "./components/HowItWorks";
import CustomerLogo from "./components/CustomerLogo";
import LoanForm from "./components/LoanForm";
import { useRef } from "react";
const AllFile = () => {
  const formRef = useRef(null);
  return (
    <>
      {/* Hero Section */}
      <section
        className="text-white flex items-center min-h-[60vh] py-12"
        style={{
          backgroundImage: `url(${fronImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundColor: "#0b2e6b",
        }}
      >
        <HeroSection
          scrollToForm={() => {
            formRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </section>

      <EMICalculator />

      <LoanTypes />

      {/* How It Works */}
      <HowItWorks />

      {/* Testimonials + Logos */}
      <CustomerLogo />

      {/* Loan Form */}
      <div ref={formRef}>
        <LoanForm />
      </div>
    </>
  );
};

export default AllFile;
