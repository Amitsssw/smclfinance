import React from "react";
import PartnerBank from "./PartnerBank";

export default function CustomerLogo() {
const reviews = [
  {
    img: "https://xsgames.co/randomusers/assets/avatars/male/62.jpg",
    text: "SMCL Finance helped me get the loan I needed quickly.",
  },
  {
    img: "https://xsgames.co/randomusers/assets/avatars/male/65.jpg",
    text: "The documentation process was super smooth and fast!",
  },
  {
    img: "https://xsgames.co/randomusers/assets/avatars/male/68.jpg",
    text: "Excellent support! Smooth and transparent process.",
  },
  {
    img: "https://xsgames.co/randomusers/assets/avatars/male/72.jpg",
    text: "Very friendly team, got my business loan approved without hassle.",
  },
  {
    img: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
    text: "Trustworthy and quick service. Highly recommended!",
  },
];



  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-10">
        {/* Left Box (Reviews + Marquee) */}
        <div className="bg-white/80 backdrop-blur-md sm:shadow-xl rounded-2xl sm:p-8 overflow-hidden">
          <h3 className="sm:text-3xl text-2xl font-extrabold mb-8 text-blue-900 tracking-wide">
            What Our Customers Say 🌟
          </h3>

          <div className="relative w-full overflow-hidden">
            {/* Marquee Wrapper */}
            <div className="flex gap-5 animate-marquee whitespace-nowrap">
              {reviews.concat(reviews).map((review, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 shadow-md rounded-xl p-5 flex flex-col items-center gap-4 min-w-[280px] hover:scale-[1.03] hover:shadow-xl transition-all cursor-pointer"
                >
                  <img
                    src={review.img}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-blue-300"
                    alt="customer review"
                  />
                  <div className="text-center">
                    <p className="text-gray-700 mb-2 text-wrap leading-tight text-sm">
                      "{review.text}"
                    </p>
                    <p className="text-yellow-400 text-lg">★★★★★</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Box */}
        <div className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 flex flex-col justify-center">
          <h3 className="sm:text-3xl text-2xl font-extrabold mb-4 text-blue-900">
            Our Trusted Partners
          </h3>
          <p className="text-gray-600 mb-6">
            We work with India’s top financial institutions
          </p>
          <PartnerBank />
        </div>
      </div>
    </section>
  );
}
