"use client";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "Product 1",
    subtitle: "Unleash the Power of AI in Your Business",
    description:
      "We build custom AI solutions that solve real problems and scale with you. Join the ranks of forward-thinking companies transforming with tech.",
    image: "/images/product1.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    subtitle: "AI-Powered Insights at Your Fingertips",
    description:
      "Get deep, actionable insights with intelligent analytics that adapt to your needs. Save time, increase productivity.",
    image: "/images/product2.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    subtitle: "Next-Gen Automation Tools",
    description:
      "Automate your business processes with cutting-edge tools designed to optimize workflows and reduce errors.",
    image: "/images/product3.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    subtitle: "Smart Customer Engagement",
    description:
      "Deliver personalized customer experiences powered by machine learning and behavioral analytics.",
    image: "/images/product4.jpg",
  },
  {
    id: 5,
    title: "Product 5",
    subtitle: "Secure AI Infrastructure",
    description:
      "We provide AI systems that are secure, scalable, and easy to integrate into your current environment.",
    image: "/images/product5.jpg",
  },
  {
    id: 6,
    title: "Product 6",
    subtitle: "The Future of AI Collaboration",
    description:
      "Collaborate smarter with real-time AI assistance and teamwork tools for distributed teams.",
    image: "/images/product6.jpg",
  },
];

export default function ProductGrid() {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <div className="p-40">
      <h1 className="text-3xl font-bold mb-2 py-20 pl-5">Our Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative h-[400px] rounded-xl overflow-hidden group shadow-lg cursor-pointer"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-300" />
            <div className="absolute bottom-0 text-white p-5 z-10">
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-sm font-semibold">{product.subtitle}</p>
              <p className="text-sm mt-1">{product.description}</p>
              <button
                onClick={() => setActiveProduct(product)}
                className="mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded text-white font-medium"
              >
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {activeProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md text-center shadow-2xl">
            <h3 className="text-lg font-bold mb-2">{activeProduct.title}</h3>
            <p className="text-sm text-gray-600 mb-4">
              {activeProduct.description}
            </p>
            <button
              onClick={() => setActiveProduct(null)}
              className="mt-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
