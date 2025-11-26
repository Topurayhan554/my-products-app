"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const [msg, setMsg] = useState("");

  const onSubmit = async (data) => {
    try {
      await axios.post("/api/auth/register", data);
      setMsg("User registered! You can login now.");
    } catch (err) {
      setMsg(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 via-white to-indigo-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Create Account
        </h1>
        {msg && <p className="text-green-500 text-center mb-4">{msg}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            {...register("name")}
            placeholder="Full Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-pink-500 font-semibold hover:underline"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
}
