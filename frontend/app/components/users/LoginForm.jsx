'use client';
import { useState } from "react";
import Link from "next/link";

export default function Login({ onSubmit }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    console.log("Submitting login form with data:", formData);
    e.preventDefault();
    onSubmit(formData); // Pass to parent or dispatch Redux thunk
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto  shadow-md rounded-lg p-4 space-y-4"
    >
      <h2 className="text-2xl font-bold text-[#914151]  rounded p-2 w-full">
        Login
      </h2>
      <input
        type="text"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="mt-1 text-gray-700 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#914151] focus:border-[#914151]"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="mt-1 text-gray-700 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#914151] focus:border-[#914151]"
        required
      />
      <button
        type="submit"
        className="w-full bg-[#914151] text-white py-2 px-4 rounded hover:bg-[#bd6677] transition"
      >
        Login
      </button>

      <p className="text-sm text-gray-600 text-center mt-4">
        Don’t have an account?{' '}
        <Link href="/user/register" className="text-[#914151] hover:text-[#bd6677] font-medium">
          Register here
        </Link>
      </p>

    </form>
  );
}
