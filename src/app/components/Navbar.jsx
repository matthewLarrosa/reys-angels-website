"use client";

import React from "react";
import Image from "next/image";
import logo from "../assets/reysAngelsLogo.svg";
import { HiMenu } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-14 w-screen backdrop-blur-md bg-white bg-opacity-90">
      <div className="p-2">
        <Image className="h-auto w-40 mt-2 ml-2" src={logo} alt="Rey's Angels Logo" />
      </div>
      <div className="p-1 mt-1">
        <button
          onClick={toggleMenu}
          className="h-10 w-10 mt-1 mr-3"
        >
          <HiMenu className="h-10 w-10 mt-1 mr-2" />
        </button>
        {isMenuOpen && (
          <div className="absolute top-8 right-0 mt-2 p-4 bg-white shadow-md">
            <ul className="space-y-4 text-lg">
              <li className="w-32">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
