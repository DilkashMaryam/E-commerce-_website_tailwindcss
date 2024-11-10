"use client";
import { useState } from "react";

const BecomeVendor = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    productType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Replace this with actual form submission logic or API call
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-green-700 mb-6">Become a Vendor</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <p className="text-gray-600 mb-4">
          Partner with Plant.pk to expand your reach and grow your business. Join our platform and connect with a wide audience looking for high-quality plants and gardening products.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="company" className="block text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="productType" className="block text-gray-700 mb-2">Product Type</label>
            <input
              type="text"
              id="productType"
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              placeholder="e.g., Indoor plants, gardening tools"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business and product offerings."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeVendor;
