"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-indigo-600">Contact Us</h1>
          <p className="text-gray-700 md:text-lg">
            Questions or feedback? We'd love to hear from you!
          </p>
        </div>

        {submitted && (
          <div className="p-4 bg-green-100 text-green-800 rounded shadow">
            Thank you! Your message has been sent.
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-4"
        >
          <input
            type="text"
            required
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            required
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full border border-gray-300 p-3 rounded-lg h-36 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-white p-6 rounded-2xl shadow-lg space-y-2 text-gray-700">
          <h2 className="text-2xl font-semibold text-indigo-600">Our Info</h2>
          <p>Email: support@myshop.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: 123 Main Street, Dhaka, Bangladesh</p>
        </div>
      </div>
    </div>
  );
}
