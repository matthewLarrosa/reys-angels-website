'use client'

import React from 'react'
import Image from 'next/image'
import logo from '../assets/reysAngelsLogo.svg'
import { HiMenu } from 'react-icons/hi';

function Navbar() {
  return (
    <div className='flex justify-between items-center h-10 w-screen'>
      <div className='p-2'>
        <Image className='h-auto w-32' src={logo} alt="Rey's Angels Logo" />
      </div>
      <div className='p-1 mt-1'>
        <HiMenu className='h-7 w-7'>
          <button></button>
        </HiMenu>
      </div>
    </div>
  )
}

export default Navbar