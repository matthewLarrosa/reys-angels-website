"use client";

import React from "react";
import Image from "next/image";
import shirt from "../assets/shirt.png";

function Hero() {
  return (
    <div className="w-screen h-128 bg-slate-400 relative">
      <div className="flex flex-col pt-40">
        <div>
          <div className="text-xl">Your Ideas,</div>
          <div className="text-xl">our vinyl.</div>
          <div className="text-sm">Based in Miami, Florida</div>
          <div className="text-sm">Since 2015</div>
          <div>
            <button className="" onClick={""}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Image className="h-auto w-auto mt-10" src={shirt} alt="shirt"></Image>
    </div>
  );
}

export default Hero;
