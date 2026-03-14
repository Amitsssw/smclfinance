import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c2238f2] text-white/85 pt-16 pb-10 text-sm leading-relaxed font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* LOGO + DESCRIPTION */}
          <div>
            <h4 className="font-extrabold text-2xl mb-3 text-white">
              SMCL FINANCE
            </h4>
            <p className="text-white/70">
              Your trusted partner in quick and secure loans with unmatched
              service quality.
            </p>

            <div className="flex gap-4 mt-5 text-xl">
              <a
                aria-label="Facebook"
                className="hover:text-blue-400 transition cursor-pointer"
              >
                <FaFacebookF />
              </a>
              <a
                aria-label="Twitter"
                className="hover:text-blue-300 transition cursor-pointer"
              >
                <FaTwitter />
              </a>
              <a 
              href="https://www.instagram.com/smclfinance/" 
  target="_blank" 
  rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-400 transition cursor-pointer"
              >
                <FaInstagram />
              </a>
              <a
                aria-label="LinkedIn"
                className="hover:text-blue-500 transition cursor-pointer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h5 className="font-semibold text-lg mb-3 text-white/90">
              Quick Links
            </h5>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-white/75 hover:text-white transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white/75 hover:text-white transition"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-white/75 hover:text-white transition"
              >
                Contact Us
              </Link>
              <Link
                to="/loan"
                className="text-white/75 hover:text-white transition"
              >
                Need A Loan?
              </Link>
            </nav>
          </div>

          {/* LOAN TYPES */}
          <div>
            <h5 className="font-semibold text-lg mb-3 text-white/90">
              Loan Types
            </h5>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/homeloan"
                className="text-white/75 hover:text-white transition"
              >
                Home Loan
              </Link>
              <Link
                to="/lap"
                className="text-white/75 hover:text-white transition"
              >
                Loan Against Property
              </Link>
              <Link
                to="/businessloan"
                className="text-white/75 hover:text-white transition"
              >
                Business Loan
              </Link>
              <Link
                to="/billdiscounting"
                className="text-white/75 hover:text-white transition"
              >
                Bill Discounting
              </Link>
            </nav>
          </div>

          {/* COMPANY */}
          <div>
            <h5 className="font-semibold text-lg mb-3 text-white/90">
              Company
            </h5>
            <nav className="flex flex-col space-y-2">
              <Link
                to="privacy-policy"
                className="text-white/75 hover:text-white transition"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-white/75 hover:text-white transition"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <hr className="border-white/15" />
        <p className="text-center text-white/50 mt-4">
          © {new Date().getFullYear() - 4} SMCL Finance. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
