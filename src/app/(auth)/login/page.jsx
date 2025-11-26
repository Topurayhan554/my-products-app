"use client";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res.error) setError(res.error);
    else window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 via-white to-pink-50">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white font-semibold py-3 rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center text-gray-500">or login with</div>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={() => signIn("google")}
            className="flex items-center gap-2 border border-gray-300 rounded-lg py-2 px-4 hover:bg-gray-100 transition-colors"
          >
            <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
            Google
          </button>
        </div>

        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-indigo-500 font-semibold hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
