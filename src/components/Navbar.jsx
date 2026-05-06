import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

export const Navbar = () => {
  // Smooth scroll to a section by id
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Map each nav label to a section id
  const navTargets = {
    Store: "highlights",
    Mac: "highlights",
    iPhone: "hero",
    Support: "hiw",
  };

  return (
    <div className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        {/* Apple logo → scroll to top */}
        <img
          src={appleImg}
          alt="Apple"
          width={14}
          height={18}
          className="cursor-pointer hover:scale-105 transition-all duration-300"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        {/* Nav links */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              onClick={() => scrollTo(navTargets[nav] || "highlights")}
              className="px-5 text-sm font-normal text-gray-400 hover:text-white cursor-pointer transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        {/* Search & Bag icons */}
        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <img
            src={searchImg}
            alt="search"
            width={18}
            height={18}
            className="cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => scrollTo("highlights")}
          />
          <img
            src={bagImg}
            alt="bag"
            width={18}
            height={18}
            className="cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => window.open("https://www.apple.com/shop/buy-iphone/iphone-15-pro", "_blank")}
          />
        </div>
      </nav>
    </div>
  );
};
