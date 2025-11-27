"use client";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import Link from "next/link";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem("user", true);
      setEmail("");
      setPassword("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="bg-gray-800/90 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-96">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">
          Create Account
        </h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-gray-700/80 rounded-lg outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 bg-gray-700/80 rounded-lg outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 transition"
        />
        <button
          onClick={handleSignUp}
          className="w-full p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white font-semibold hover:scale-105 hover:brightness-110 transition transform"
        >
          Sign Up
        </button>
        <p className="text-gray-400 text-sm mt-4 text-center">
          Already have an account?{" "}
          <Link
            href={"/register"}
            className="text-indigo-400 hover:underline cursor-pointer"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
