import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

export const Navbar = () => {
  return (
    <div className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img
          src={appleImg}
          alt="Apple"
          width={14}
          height={18}
          className=" cursor-pointer   hover:scale-105  transition-all duration-300"
        />

        <div className=" flex  flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className=" px-5  text-sm font-normal text-gray-400 hover:text-white   cursor-pointer transition-all "
            >
              {nav}
            </div>
          ))}
        </div>

        {/* butttons */}

        <div className=" flex   items-baseline gap-7 max-sm:flex-1 max-sm:justify-end ">
          <img
            src={searchImg}
            alt="search"
            width={18}
            height={18}
            className="  cursor-pointer hover:scale-105 transition-all  duration-300"
          />
          <img
            src={bagImg}
            alt="bag"
            width={18}
            height={18}
            className="  cursor-pointer hover:scale-105 transition-all  duration-300"
          />
        </div>
      </nav>
    </div>
  );
};
