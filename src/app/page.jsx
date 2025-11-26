import MyContainer from "@/components/MyContainer/MyContainer";
import React from "react";

const features = [
  {
    id: 1,
    title: "Fast Delivery",
    desc: "Get your products quickly.",
    icon: "🚚",
  },
  { id: 2, title: "Secure Payment", desc: "100% safe and secure.", icon: "💳" },
  {
    id: 3,
    title: "Quality Products",
    desc: "Only the best items.",
    icon: "🛍️",
  },
  { id: 4, title: "24/7 Support", desc: "We are here to help.", icon: "📞" },
];

const items = [
  {
    id: 1,
    title: "Product 1",
    desc: "Short description for product 1.",
    price: "$20",
    img: "https://i.pinimg.com/736x/0a/00/17/0a00177c74a063e924c6b5e13a45fbbf.jpg",
  },
  {
    id: 2,
    title: "Product 2",
    desc: "Short description for product 2.",
    price: "$30",
    img: "https://i.pinimg.com/736x/0a/00/17/0a00177c74a063e924c6b5e13a45fbbf.jpg",
  },
  {
    id: 3,
    title: "Product 3",
    desc: "Short description for product 3.",
    price: "$25",
    img: "https://i.pinimg.com/736x/0a/00/17/0a00177c74a063e924c6b5e13a45fbbf.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    desc: "Short description for product 4.",
    price: "$40",
    img: "https://i.pinimg.com/736x/0a/00/17/0a00177c74a063e924c6b5e13a45fbbf.jpg",
  },
  {
    id: 5,
    title: "Product 5",
    desc: "Short description for product 5.",
    price: "$15",
    img: "https://i.pinimg.com/736x/0a/00/17/0a00177c74a063e924c6b5e13a45fbbf.jpg",
  },
  {
    id: 6,
    title: "Product 6",
    desc: "Short description for product 6.",
    price: "$50",
    img: "https://i.pinimg.com/736x/0a/00/17/0a00177c74a063e924c6b5e13a45fbbf.jpg",
  },
];

const testimonials = [
  { id: 1, name: "Alice", text: "Amazing service and products!" },
  { id: 2, name: "Bob", text: "I love the fast delivery." },
  { id: 3, name: "Charlie", text: "Highly recommend this store." },
];

export default function Home() {
  return (
    <MyContainer>
      <div className="font-sans bg-gradient-to-b from-slate-50 to-white mt-5">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-32 px-6 text-center overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-6xl font-extrabold mb-6 leading-tight animate-fade-in">
              Welcome to Our Store
            </h1>
            <p className="text-2xl mb-8 text-slate-100">
              Find the best products for your daily needs.
            </p>
            <button className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-full hover:bg-slate-100 hover:scale-105 transform transition duration-300 shadow-xl">
              Shop Now →
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-slate-800">
            Why Choose Us
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            Experience shopping like never before
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-indigo-200 hover:-translate-y-2"
              >
                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Items Section */}

        <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-slate-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-slate-800">
              Featured Products
            </h2>
            <p className="text-center text-slate-600 mb-12 text-lg">
              Discover our handpicked collection
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-indigo-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-slate-800">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 mb-4">{item.desc}</p>

                    {/* Price + Add To Cart */}
                    <div className="flex justify-between items-center mb-4">
                      <p className="font-bold text-2xl text-indigo-600">
                        {item.price}
                      </p>

                      <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300 font-semibold">
                        Add to Cart
                      </button>
                    </div>

                    {/* Details Button */}
                    <button
                      className="w-full mt-2 border border-indigo-500 text-indigo-600 font-semibold py-2 rounded-full 
  transition-all duration-300
  hover:bg-indigo-50 hover:scale-[1.03]
  active:scale-[0.96] active:bg-indigo-100"
                    >
                      Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center text-slate-800">
              What Our Customers Say
            </h2>
            <p className="text-center text-slate-600 mb-12 text-lg">
              Real reviews from real people
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testi) => (
                <div
                  key={testi.id}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-indigo-100"
                >
                  <div className="text-indigo-600 text-5xl mb-4">"</div>
                  <p className="italic mb-6 text-slate-700 text-lg">
                    {testi.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testi.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{testi.name}</p>
                      <p className="text-sm text-slate-500">
                        Verified Customer
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <h2 className="text-5xl font-bold text-white mb-6">
                Special Offer: 50% Off!
              </h2>
              <p className="text-white/90 text-xl mb-8">
                Don't miss out on our biggest sale of the season
              </p>
              <button className="bg-white text-indigo-600 font-bold px-8 py-4 rounded-full hover:bg-slate-100 hover:scale-105 transform transition duration-300 shadow-xl">
                Claim Your Discount →
              </button>
            </div>
          </div>
        </section>
      </div>
    </MyContainer>
  );
}
