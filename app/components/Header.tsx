"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex flex-wrap justify-between items-center">
        <h1 className="text-2xl font-bold mb-2 md:mb-0">#BoycottForPakistan</h1>
        <button
          className="md:hidden block px-2 py-1 border rounded text-white border-white"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:w-auto md:flex flex-col md:flex-row justify-center md:justify-end mt-2 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row">
            <Link href="#boycott" legacyBehavior>
              <a className="px-4 py-2 hover:underline text-white">
                Boycott IPP Groups
              </a>
            </Link>
            <Link href="#goal" legacyBehavior>
              <a className="px-4 py-2 hover:underline text-white">Our Goal</a>
            </Link>
            <Link href="#disclaimer" legacyBehavior>
              <a className="px-4 py-2 hover:underline text-white">Disclaimer</a>
            </Link>
            <Link href="#table" legacyBehavior>
              <a className="px-4 py-2 hover:underline text-white">
                IPP Details
              </a>
            </Link>
            <Link href="#events" legacyBehavior>
              <a className="px-4 py-2 hover:underline text-white">Events</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
