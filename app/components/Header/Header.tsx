"use client";
import React, { useState } from 'react'
import Link from "next/link";
import { FaPhone, FaSearch, FaShoppingBag } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const Header = () =>{
    return(
        <div className="bg-green-400">

          <div className="bg-green-700 px-6 py-4 flex flex-col sm:flex-row sm:justify-between text-xs sm:text-sm md:text-base items-center ">
            <h1 className="text-white">Welcome to Plant.pk Online Store! </h1>
                <ul className="inline-flex space-x-8 sm:mt-0 mt-4">
                <li><Link href="/trackorder" className="hover:text-black text-white">Track your Order</Link></li>
                <li><Link href="/vendor" className="hover:text-black text-white">Become a Vendor</Link></li>
                <li><Link href="/wholesale" className="hover:text-black text-white">Wholesale Items</Link></li>
                <li><Link href="/" className="hover:text-black text-white">Plant.pk Location</Link></li>
                </ul>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between p-6 sm:p-6">
                <h1 className="text-lime-950 text-2xl font-extrabold">Plant.pk</h1>

                <div className="flex items-center space-x-2 w-full sm:w-1/2 mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search what you're looking for"
            className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none"
          /><FaSearch className="mr-1" />
        </div>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-0 w-full sm:w-auto">
        <div className="flex items-center w-full sm:w-auto space-x-2">
            <FaPhone className="text-white rotate-90" />
            <Link href="Contact" className="text-white border-transparent rounded-md p-2 w-full sm:w-auto hover:bg-green-200 hover:text-black text-center">Hotline</Link>
          </div>
          <div className="flex items-center w-full sm:w-auto space-x-2">
          <FaShoppingBag className="text-white"/>
          <Link href="/" className="border-transparent rounded-md p-2 w-full sm:w-auto text-white  hover:bg-green-200 hover:text-black text-center">Shop</Link>
          </div>
          <div className="flex items-center w-full sm:w-auto space-x-2">
          <FaPerson className="text-white"/>
          <button className="border-transparent rounded-md p-2 w-full sm:w-auto text-white  hover:bg-green-200 hover:text-black text-center">LogIn</button>
          </div>
         </div>
        </div>
        </div>
    )
};
export default Header