import React, { useState } from "react";
import { TfiShoppingCart } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";
import { GiCharacter } from "react-icons/gi";
import { TbMenu2, TbMenu3 } from "react-icons/tb";
import { Divider } from "@react-md/divider";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
   const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-white sticky top-0 z-50 ">
      <div className="max-w-[1200px] w-full mx-auto">
        {/* Navbar Top */}
        <div className="flex justify-between items-center p-2">
          {/* Mobile Menu Button */}
          <button
            className="text-3xl text-zinc-800 md:hidden"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <TbMenu3 /> : <TbMenu2 />}
          </button>

          {/* Logo */}
          <div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-500"
                }`
              }
            >
              <img
                className="w-48 font-bold"
                src="/src/assets/Logo.png"
                alt="Logo"
              />
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="md:flex text-md gap-8 items-center hidden">
            <NavLink
              to="bedsheet"
              className={({ isActive }) =>
                `className="text-black hover:text-green-800 duration-500 cursor-pointer' ${
                  isActive ? "text-green-800" : ""
                }`
              }
            >
              Bedsheet
            </NavLink>
            <div className="text-black hover:text-green-800 duration-500 cursor-pointer">
              <NavLink
                to="handbags"
                className={({ isActive }) =>
                  `className="text-black hover:text-green-800 duration-500 cursor-pointer' ${
                    isActive ? "text-green-800" : ""
                  }`
                }
              >
                Handbags
              </NavLink>
            </div>

            <div className="flex gap-3 text-[25px] items-center">
              <div className="text-black hover:text-green-800 duration-500 cursor-pointer">
                <IoSearchOutline />
              </div>
              <div className="bg-[#069f1a] rounded-full flex justify-center items-center py-1 px-1 cursor-pointer">
                <GiCharacter className="text-white text-xl" />
              </div>
            </div>

            <div className="text-black hover:text-green-800 text-2xl  duration-500 cursor-pointer relative ">
              <TfiShoppingCart className="transform scale-x-[-1]" />
              <span className="absolute -top-1 left-5 flex h-4 w-4 items-center justify-center rounded-full bg-[#419c14e7] text-white text-[10px] font-bold">
                0
              </span>
            </div>
          </div>

          {/* Mobile Cart Icon */}
          <div className="md:hidden text-black hover:text-green-800 duration-500 cursor-pointer relative">
            <TfiShoppingCart className="transform scale-x-[-1]" />
            <span className="absolute -top-1.5 left-2.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#419c14e7] text-white text-[10px] font-bold">
              0
            </span>
          </div>
        </div>

        {/*Fixed-position Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-[#314f31] text-zinc-100 font-semibold py-5 px-6 transition-all duration-500 ease-in-out rounded-b-2xl shadow-2xl md:hidden ${
            showMenu
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-5">
            {/* Search Bar */}
            <div className="flex items-center bg-amber-50 rounded-2xl px-3 py-2">
              <input
                type="text"
                placeholder="Search product..."
                className="bg-transparent outline-none flex-1 text-gray-800"
              />
              <IoSearchOutline className="text-amber-600 text-xl" />
            </div>

            {/* Menu Items */}

            <p className="hover:text-amber-400 cursor-pointer">
              <NavLink
                to="bedsheet"
                onClick={() => setShowMenu(!showMenu)}
                className={({ isActive }) =>
                  `className="text-black hover:text-green-800 duration-500 cursor-pointer' ${
                    isActive ? "text-green-800" : ""
                  }`
                }
              >
                Bedsheet
              </NavLink>
            </p>
              <NavLink
                to="handbags"
                onClick={() => setShowMenu(!showMenu)}
                className={({ isActive }) =>
                  `className="text-black hover:text-green-800 duration-500 cursor-pointer' ${
                    isActive ? "text-green-800" : ""
                  }`
                }
              >
            <p className="hover:text-amber-400 cursor-pointer">Handbags</p>
              </NavLink>
            <p className="hover:text-amber-400 cursor-pointer">
              Login / Register
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
