import React from "react";

export default function LoanTypes() {
  const loanData = [
    {
      icon: "🏡",
      title: "Home Loan & Loan Against Property",
      desc: "Document verification and secure loans",
    },
    {
      icon: "💼",
      title: "Business Loan",
      desc: "Fast approval with minimal documentation",
    },
    {
      icon: "🤝",
      title: "Private Finance",
      desc: "Customized loans for urgent needs",
    },
    {
      icon: "📄",
      title: "Bill Discounting",
      desc: "Quick financing by discounting bills",
    },
  ];

  return (
    <div>
      {/* Loan Types */}
      <section className="pb-12 bg-white">
        <h2 className="text-center text-3xl font-bold mb-10 text-blue-900">
          Loan Types
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {loanData.map((item, idx) => (
            <div
              key={idx}
              className="
                bg-white 
                shadow-lg 
                hover:shadow-2xl 
                rounded-xl 
                py-6 
                text-center 
                transition-all 
                duration-300 
                transform 
                hover:scale-[1.04]
                cursor-pointer
              "
            >
              <div className="text-5xl mb-3 text-yellow-400">{item.icon}</div>

              <h3 className="font-bold text-blue-900 text-lg px-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2 px-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
