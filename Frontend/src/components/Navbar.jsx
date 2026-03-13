// NavbarComponent.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoSymbol from "../assets/smlc.png";
import { FaChevronDown } from "react-icons/fa";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },

  {
    name: "Loans",
    dropdown: [
      { name: "Home Loan", path: "/loan/home" },
      { name: "Loan Against Property", path: "/loan/loan-against-property" },
      { name: "Business Loan", path: "/loan/business" },
      { name: "Bill Discounting", path: "/loan/bill-discounting" },
    ],
  },

  { name: "Contact", path: "/contact" },
];

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="bg-[#000024] sticky top-0 shadow-xl z-50">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo Section */}
        <Link
          to="/"
          onClick={() => setOpen(false)} // CLOSE ON CLICK
          className="flex items-center gap-3 rounded-full sm:rounded-none"
        >
          <img
            src={logoSymbol}
            alt="SMCL Logo Symbol"
            className="h-[60px] sm:w-[70px] rounded-full sm:rounded-none object-contain select-none"
          />
          <span className="text-white font-semibold text-2xl tracking-wide">
            SMCL Finance
          </span>
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white text-3xl lg:hidden"
        >
          ☰
        </button>

        {/* Navigation Menu */}
        <div
          className={`${
            open ? "block" : "hidden"
          } absolute lg:static top-16 left-0 w-full lg:w-auto bg-[#0d1b44] lg:bg-transparent lg:flex`}
        >
          <ul className="flex flex-col lg:flex-row gap-6 lg:gap-10 p-6 lg:p-0 text-white font-medium text-lg">
            {NAV_ITEMS.map((item, index) => (
              <li
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Normal Link */}
                {!item.dropdown && (
                  <Link
                    to={item.path}
                    onClick={() => setOpen(false)} // CLOSE ON CLICK
                    className="hover:text-[#f5b742] transition-all"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Button */}
                {item.dropdown && (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        )
                      }
                      className="flex items-center gap-1 hover:text-[#f5b742] transition-all"
                    >
                      {item.name}
                      <span
                        className={`transition-transform duration-300 ${
                          activeDropdown === index ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <FaChevronDown />
                      </span>
                    </button>

                    {/* Dropdown Box */}
                    <ul
                      className={`
                      absolute left-0 mt-2 z-50 bg-white text-black rounded-xl shadow-xl py-3 w-48
                      transition-all duration-300 origin-top
                      
                      ${
                        activeDropdown === index
                          ? "scale-y-100 opacity-100 visible"
                          : "scale-y-0 opacity-0 invisible"
                      }
                    `}
                    >
                      {item.dropdown.map((drop, i) => (
                        <li key={i}>
                          <Link
                            to={drop.path}
                            onClick={() => {
                              setOpen(false); // CLOSE MENU
                              setActiveDropdown(null); // CLOSE DROPDOWN
                            }}
                            className="block px-5 py-2 hover:bg-gray-100 rounded-md transition"
                          >
                            {drop.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
