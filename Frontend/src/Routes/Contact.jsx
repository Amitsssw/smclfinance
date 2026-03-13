import React from "react";

export default function Contact() {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 bg-gradient-to-br from-[#0d1b44] to-[#010812] text-white">
      {/* Heading Section */}
      <div className="max-w-5xl mx-auto text-center mb-10 px-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wide">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg mt-2 text-gray-300 font-semibold">
          Where Vision Meets Value
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-6 sm:p-10 border border-white/20">
        {/* Contact Info */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
            Get in Touch
          </h2>

          <div className="flex gap-3 items-start sm:items-center">
            <span className="text-yellow-400 text-2xl sm:text-3xl">📧</span>
            <p className="text-gray-200 text-sm sm:text-lg break-all">
              sumstarmanagementconsultancy1@gmail.com
            </p>
          </div>

          <div className="flex gap-3 items-start sm:items-center">
            <span className="text-yellow-400 text-2xl sm:text-3xl">📞</span>
            <p className="text-gray-200 text-sm sm:text-lg">+91 7348407798</p>
          </div>

          <div className="flex gap-3 items-start sm:items-center">
            <span className="text-yellow-400 text-2xl sm:text-3xl">📍</span>
            <p className="text-gray-200 text-sm sm:text-lg">
              Sector 44, Noida, India
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4 sm:space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white outline-none border border-white/30 focus:border-yellow-400 text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white outline-none border border-white/30 focus:border-yellow-400 text-sm sm:text-base"
          />
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white outline-none border border-white/30 focus:border-yellow-400 text-sm sm:text-base"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-400 text-[#0d1b44] font-bold py-3 rounded-lg text-base sm:text-lg hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
