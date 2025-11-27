"use client"; // important for client-side hooks

import { useState } from "react";
import { ShoppingCart, Info } from "lucide-react";

export default function ProductsPage() {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, title: "Wireless Headphones", price: 2999, image: "🎧" },
    { id: 2, title: "Smart Watch", price: 4999, image: "⌚" },
    { id: 3, title: "Laptop Backpack", price: 1499, image: "🎒" },
    { id: 4, title: "USB-C Cable", price: 299, image: "🔌" },
    { id: 5, title: "Wireless Mouse", price: 899, image: "🖱️" },
    { id: 6, title: "Keyboard", price: 1999, image: "⌨️" },
    { id: 7, title: "Webcam HD", price: 2499, image: "📷" },
    { id: 8, title: "Phone Case", price: 399, image: "📱" },
    { id: 9, title: "Power Bank", price: 1299, image: "🔋" },
    { id: 10, title: "Bluetooth Speaker", price: 1799, image: "🔊" },
    { id: 11, title: "Gaming Controller", price: 3499, image: "🎮" },
    { id: 12, title: "Screen Protector", price: 199, image: "🛡️" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.title} added to cart!`);
  };

  const showDetails = (product) => {
    alert(
      `Product: ${product.title}\nPrice: ৳${product.price}\nHigh quality product with excellent features.`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Our Products
          </h1>
          <p className="text-gray-600">Discover our amazing collection</p>
          <div className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2">
            <ShoppingCart size={20} />
            <span>Cart: {cart.length} items</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 h-48 flex items-center justify-center text-6xl">
                {product.image}
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.title}
                </h3>

                <p className="text-2xl font-bold text-blue-600 mb-4">
                  ৳{product.price}
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>

                  <button
                    onClick={() => showDetails(product)}
                    className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                  >
                    <Info size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
