import React from "react";
import { Routes, Route } from "react-router-dom";

import LoanForm from "./AllFile.jsx";

import About from "./Routes/About.jsx";
import Contact from "./Routes/Contact.jsx";
import NavbarComponent from "./components/Navbar.jsx";
import FooterComponent from "./components/Footer.jsx";
import "./App.css";
import PageNotFound from "./components/PageNotFound.jsx";
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-grey-50">
      <NavbarComponent />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<LoanForm />} />

          <Route path="/About" element={<About />} />

          <Route path="/contact" element={<Contact />} />
          <Route
            path="/privacy-policy"
            element={
              <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold text-center">
                  Privacy Policy
                </h1>
              </div>
            }
          />

          <Route
            path="/terms-and-conditions"
            element={
              <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-2xl font-bold text-center">
                  Terms and Conditions
                </h1>
              </div>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <FooterComponent />
    </div>
  );
}

export default App;
