import React, { useState } from "react";
import emi from "../assets/emi.png";
const EMICalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [results, setResults] = useState(null);

  const MAX_LOAN = 2000000000; // 20 crore
  const MAX_RATE = 20; // 20%
  const MAX_YEARS = 50; // 50 years

  const formatCurrency = (num) => {
    return num.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    });
  };

  const calculateEMI = (e) => {
    e.preventDefault();

    // Validations
    if (principal > MAX_LOAN) {
      alert(`Loan amount cannot be more than ₹${MAX_LOAN}`);
      return;
    }
    if (rate > MAX_RATE) {
      alert(`Interest rate cannot be more than ${MAX_RATE}%`);
      return;
    }
    if (time > MAX_YEARS) {
      alert(`Loan tenure cannot exceed ${MAX_YEARS} years`);
      return;
    }
    if (!principal || !rate || !time) {
      alert(`Please fill all fields`);
      return;
    }

    const P = parseFloat(principal);
    const r = parseFloat(rate) / 12 / 100;
    const n = parseFloat(time) * 12;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = emi * n;
    const totalInterest = totalAmount - P;

    setResults({
      emi: emi.toFixed(0),
      principal: P,
      totalInterest: totalInterest.toFixed(0),
      totalAmount: totalAmount.toFixed(0),
    });
  };

  return (
    <div className="max-w-3xl mx-auto my-12 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
        <h3 className="text-center text-3xl font-bold text-[#0b2e6b] mb-8">
          EMI Calculator
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ------------ FORM ------------- */}
          <form onSubmit={calculateEMI} className="space-y-6">
            <div>
              <label className="block font-semibold mb-1">
                Loan Amount (₹):
              </label>
              <input
                type="number"
                min="0"
                max={MAX_LOAN}
                placeholder="enter loan amount"
                value={principal}
                onChange={(e) => setPrincipal(e.target.value)}
                required
                className="w-full font-semibold bg-transparent border-b-2 border-[#0b2e6b] focus:outline-none py-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Annual Interest Rate (%):
              </label>
              <input
                type="number"
                step="0.10"
                min="0"
                max={MAX_RATE}
                placeholder="enter interest rate"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                required
                className="w-full font-semibold bg-transparent border-b-2 border-[#0b2e6b] focus:outline-none py-2"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Loan Tenure (Years):
              </label>
              <input
                type="number"
                min="1"
                max={MAX_YEARS}
                placeholder="enter loan tenure"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-full font-semibold bg-transparent border-b-2 border-[#0b2e6b] focus:outline-none py-2"
              />
            </div>

            <button
              type="submit"
              className="w-full font-bold text-white bg-[#0b2e6b] py-3 rounded-xl hover:bg-[#082253] transition-all"
            >
              Calculate EMI
            </button>
          </form>

          {/* ------------ RESULTS / IMAGE ------------- */}
          {!results ? (
            <div className="flex justify-center items-center">
              <img
                src={emi}
                alt="EMI"
                className="w-56 opacity-80 hidden sm:block"
              />
            </div>
          ) : (
            <div className="bg-[#f0f6ff] p-6 rounded-xl shadow-inner">
              <table className="w-full text-sm text-gray-700">
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 font-medium">Monthly EMI</td>
                    <td className="text-right font-bold text-[#0b2e6b]">
                      {formatCurrency(Number(results.emi))}
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3 font-medium">Principal amount</td>
                    <td className="text-right font-bold text-[#0b2e6b]">
                      {formatCurrency(results.principal)}
                    </td>
                  </tr>

                  <tr className="border-b">
                    <td className="py-3 font-medium">Total interest</td>
                    <td className="text-right font-bold text-[#0b2e6b]">
                      {formatCurrency(Number(results.totalInterest))}
                    </td>
                  </tr>

                  <tr>
                    <td className="py-3 font-medium">Total amount</td>
                    <td className="text-right font-bold text-[#0b2e6b]">
                      {formatCurrency(Number(results.totalAmount))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;
