import React, { useState } from "react";
import axios from "axios";

export default function LoanForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    employmentType: "",
    loanType: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false); // For showing success UI

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

const baseURL = "http://72.61.174.183:5000"; 
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setSubmitted(false);

  try {
await axios.post(`${baseURL}/api/loan/apply`, formData);
    setSubmitted(true);

    setTimeout(() => {
      // Reset form fields to NULL
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        employmentType: "",
        loanType: "",
      });
    }, 200); // 0.2 sec delay for smooth UI update
  } catch (error) {
    alert("Submission Failed. Please check backend.");
    console.error(error);
  } finally {
    setLoading(false);
  }
};


  return (
    <section
      className="py-16 bg-gradient-to-br from-blue-50 to-blue-100"
      id="loan-application-form"
    >
      <h2 className="text-center text-4xl font-extrabold text-blue-900 mb-3">
        Apply For Loan
      </h2>
      <p className="text-center text-gray-600 mb-10 text-lg">
        We make the loan process easier and faster for you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white/70 backdrop-blur-xl shadow-2xl 
        rounded-2xl p-8 space-y-4 border border-white"
      >
        {/* SUCCESS MESSAGE */}
        {submitted && (
          <div className="bg-green-100 text-green-700 border border-green-300 rounded-lg p-3 text-center font-semibold">
            🎉 Submitted Successfully! Our team will contact you soon.
          </div>
        )}

        {/* Name fields */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-semibold">First Name</label>
            <input
              id="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full 
              focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-semibold">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full 
              focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              required
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-semibold">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full 
              focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-semibold">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full 
              focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-700 font-semibold">Address</label>
          <input
            id="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full 
            focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>

        {/* City */}
        <div className="flex flex-col gap-1">
          <label className="text-gray-700 font-semibold">City</label>
          <input
            id="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            className="border border-gray-300 p-3 rounded-lg w-full 
            focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
            required
          />
        </div>

        {/* Dropdowns */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-semibold">
              Employment Type
            </label>
            <select
              id="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full 
              focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              required
            >
              <option value="">-- Select --</option>
              <option value="salaried">Salaried</option>
              <option value="self-employed">Self-Employed</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-gray-700 font-semibold">Loan Type</label>
            <select
              id="loanType"
              value={formData.loanType}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-lg w-full 
              focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
              required
            >
              <option value="">-- Select --</option>
              <option value="home">Home Loan</option>
              <option value="education">Loan Against Property</option>
              <option value="business">Business Loan</option>
              <option value="bill">Bill Discounting</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-900 text-white font-bold px-6 py-3 rounded-lg 
          w-full transition transform hover:scale-[1.02] shadow-md
          ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-blue-800"}`}
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-3 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Submitting...
            </span>
          ) : (
            "Submit Application"
          )}
        </button>
      </form>
    </section>
  );
}
