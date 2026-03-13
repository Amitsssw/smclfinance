import React from "react";

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8fafc] px-4 text-center">
      <img
        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        alt="Coming Soon"
        className="w-80 mb-6 rounded-xl shadow-lg"
      />

      <h1 className="text-4xl font-extrabold text-[#0b2e6b] mb-3">
        Page Under Construction 🚧
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        
      </p>

      <a
        href="/"
        className="bg-[#0b2e6b] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#0a2558] transition"
      >
        Go to Home
      </a>
    </div>
  );
}
