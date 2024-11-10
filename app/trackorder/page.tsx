"use client";
import React, { useState } from 'react'

const Track = () => {
  return (
    <div>
    <section className="bg-gray-100 py-16 px-4 lg:px-20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-semibold text-gray-800 mb-6">Track Your Order</h2>
    <p className="text-lg text-gray-600 mb-8">Enter your order number or email address to track the status of your order.</p>

    <form action="#" method="POST" className="bg-white shadow-md rounded-lg p-8">
      <div className="mb-4">
        <label htmlFor="orderNumber" className="block text-lg text-gray-700">Order Number</label>
        <input
          type="text"
          id="orderNumber"
          name="orderNumber"
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your order number"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-lg text-gray-700">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email address"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Track Order
      </button>
    </form>
  </div>
</section>

    </div>
  )
}

export default Track
