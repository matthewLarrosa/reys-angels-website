'use client'

import React from 'react'
import Image from 'next/image'
import logo from '../assets/reysAngelsLogo.svg'
import { HiMenu } from 'react-icons/hi';

function Navbar() {

  function handleClick(event) { 
    
    console.log("hello") 
    
  } 

  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-10 w-screen backdrop-blur-md bg-opacity-90'>
      <div className='p-2'>
        <Image className='h-auto w-32' src={logo} alt="Rey's Angels Logo" />
      </div>
      <div className='p-1 mt-1'>
          <button onClick={handleClick}>
            <HiMenu className='h-7 w-7'/>
            </button>
      </div>
    </div>
  )
}

export default Navbar