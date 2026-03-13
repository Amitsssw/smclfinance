import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      icon: "📝",
      title: "Apply Online",
      desc: "Fill out the quick online application",
    },
    {
      icon: "📄",
      title: "Verification",
      desc: "Submit documents for verification",
    },
    { icon: "✅", title: "Get Approval", desc: "Receive fast loan approval" },
    {
      icon: "🏦",
      title: "Loan Disbursed",
      desc: "Loan amount credited to your account",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-10">
        How it works
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="
              bg-white 
              shadow-lg 
              hover:shadow-2xl 
              rounded-xl 
              p-6 
              flex 
              flex-col 
              items-center 
              text-center 
              transition-all 
              duration-300 
              transform 
              hover:scale-[1.05]
              cursor-pointer
            "
          >
            <span className="text-5xl mb-4 text-blue-900">{step.icon}</span>

            <h3 className="text-lg font-bold text-blue-900">{step.title}</h3>

            <p className="text-gray-600 mt-2 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
