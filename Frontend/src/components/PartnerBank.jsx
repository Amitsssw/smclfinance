import React from 'react'

import hdfcLogo from "../assets/hdfc.png";
import sbiLogo from "../assets/sbi.png";
import indLogo from "../assets/ind.png";
import iciciLogo from "../assets/icici.png";
import axisLogo from "../assets/axis.png";
import kotakLogo from "../assets/kotak.png";
import abflLogo from "../assets/abfl.png";
import iiflLogo from "../assets/iifl.png";
import bajajLogo from "../assets/bajaj.png";
import tataLogo from "../assets/tata.png";
export default function PartnerBank() {
  return (
    <div>
      {" "}
      <div>
        <h3 className="text-2xl font-bold text-blue-900 mb-6">
          Partnered Banks
        </h3>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {[
            hdfcLogo,
            iciciLogo,
            axisLogo,
            kotakLogo,
            sbiLogo,
            indLogo,
            abflLogo,
            iiflLogo,
            bajajLogo,
            tataLogo,
          ].map((logo, idx) => (
            <img key={idx} src={logo} className="sm:h-14 h-10 object-contain" />
          ))}
        </div>
      </div>
    </div>
  );
}
