"use client";
import { useState } from "react";

type Product = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  minOrder: number;
};

const wholesaleProducts: Product[] = [
  {
    id: 1,
    name: "Indoor Plant Bundle",
    image: "/image/indoor.webp",
    description: "A variety of popular indoor plants for wholesale purchase.",
    price: "$200 per 20 units",
    minOrder: 20,
  },
  {
    id: 2,
    name: "Outdoor Garden Kit",
    image: "/image/outdoor.webp",
    description: "A complete outdoor gardening kit available at wholesale rates.",
    price: "$150 per 10 units",
    minOrder: 10,
  },
  {
  id: 3,
  name: "Seeds Bundle",
  image: "/image/seeds.jpg",
  description: "A bundle of seeds available at wholesale rates.",
  price: "$100 per 10 units",
  minOrder: 10,
  },
];

const Wholesale = () => {
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInquiry((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inquiry Submitted:", inquiry);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-8">Wholesale Items</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {wholesaleProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-45px object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-green-800">{product.name}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="mt-2 text-gray-800 font-bold">{product.price}</p>
              <p className="text-gray-600">Minimum Order: {product.minOrder} units</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-green-700 mb-4">Inquire About Wholesale Items</h2>
      <form onSubmit={handleSubmit} className="max-w-md bg-white p-6 shadow-lg rounded-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={inquiry.name}
            onChange={handleInputChange}
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
            value={inquiry.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={inquiry.message}
            onChange={handleInputChange}
            placeholder="Let us know about the items you're interested in."
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
};

export default Wholesale;
