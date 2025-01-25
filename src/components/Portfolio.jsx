'use client'

import { useState } from "react";

const portfolioNavigation = [
  { id: 1, name: "All", href: "#All" },
  { id: 2, name: "Design", href: "#Design" },
  { id: 3, name: "Development", href: "#Development" },
  { id: 4, name: "Marketing", href: "#Marketing" },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("All");

  return (
    <div>
      <div>
        <div className="flex items-center justify-center relative text-5xl mx-auto font-bold">
          <span className="relative inset-0 text-[150px] text-[#dee2e6] tracking-wide text-stroke-white">
            GALLERY
          </span>
          <span className="absolute text-teal-500">MY PORTFOLIO</span>
        </div>
        <div className="flex justify-center gap-5 py-10">
          {portfolioNavigation.map((item) => (
            <div
              key={item.id}
              className={`outline outline-1 font-bold text-[14px] px-6 py-3 rounded-3xl cursor-pointer ${
                activeSection === item.name
                  ? "bg-teal-500 text-white"
                  : "text-teal-500 outline-teal-500"
              }`}
              onClick={() => setActiveSection(item.name)}
            >
              {item.name}
              
            </div>
          ))}
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
