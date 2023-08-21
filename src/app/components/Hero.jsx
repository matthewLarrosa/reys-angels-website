"use client";

import React from 'react'
import Image from "next/image";
import shirt from "../assets/shirt.png";


function Hero() {
  return (
    <div className="w-screen h-128 bg-slate-400 relative">
      <Image className='h-auto w-auto mt-10' src={shirt} alt='shirt'></Image>
    </div>
  );
}

export default Hero