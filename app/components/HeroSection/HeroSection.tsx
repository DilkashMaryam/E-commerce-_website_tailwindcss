import React from 'react'
import Image from "next/image"
import { FaGift, FaRecycle, FaRocket, FaWallet } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'


const HeroSection = () => {
  return (
    <div className='bg-slate-100 w-full relative'>
      <Image
       src="/image/hero.png" 
       alt="hero"
      width={1920}
      height={900}
      className='object-cover'
      />
      <div className="flex flex-col sm:flex-row item-center justify-between border-b border-gray-400 px-5 py-5"></div>
<div className="flex flex-col sm:flex-row item-center justify-between border-b border-gray-400 px-5 py-5 mt-10">
        <ul className='inline-flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-8'>
       <FaRocket className='size-10 text-green-500'/>
       <li className='text-black font-bold'>Home Delivery
        <p className='text-gray-500 font-thin'>Delivery service in all citites</p></li>
       <FaRecycle className='size-10 text-green-500'/>
       <li className='text-black font-bold'>Immediate Return
        <p className='text-gray-500 font-thin'>If lants have problem</p></li>
       <FaWallet className='size-10 text-green-500'/>
       <li className='text-black font-bold'>Easypaia Payment 
        <p className='text-gray-500 font-thin'>COD or Easypaisa payment</p></li>
       <FaGift className='size-10 text-green-500'/>
       <li className='text-black font-bold'>Site Visit 
        <p className='text-gray-500 font-thin'>Paid 0n-demand visit</p></li>
       <FaMessage className='size-10 text-green-500'/>
       <li className='text-black font-bold'>24/7 Support 
        <p className='text-gray-500 font-thin'>Dedicated support</p></li>
        </ul>
        </div>
    </div>
    
  )
}

export default HeroSection
