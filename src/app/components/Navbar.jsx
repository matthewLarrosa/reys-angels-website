import React from 'react'
import Image from 'next/image'
import logo from '../assets/reysAngelsLogo.svg'

function Navbar() {
  return (
    <div className='flex h-10 w-screen'>
      <div className=''>
        <Image src={logo} alt="Rey's Angels Logo"/>
      </div>
      <div className=''>
        nav button
      </div>
    </div>
  )
}

export default Navbar