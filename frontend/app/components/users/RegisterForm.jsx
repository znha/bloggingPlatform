'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function RegisterForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
       toast.error(`Registration failed: ${error}`);
      return;
    }
    onSubmit(formData); // Pass to parent or dispatch Redux thunk
  };

  

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto  shadow-md rounded-lg p-4 space-y-4"
    >
      <h2 className="text-2xl font-bold text-[#914151]">Register</h2>

      <div>
        <label className="block text-sm font-medium text-[#914151]">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 text-gray-700 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#914151] focus:border-[#914151]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#914151]">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 text-gray-700 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#914151] focus:border-[#914151]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#914151]">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="mt-1 text-gray-700 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#914151] focus:border-[#914151]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#914151]">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="mt-1 block w-full text-gray-700 border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#914151] focus:border-[#914151]"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#914151] text-white py-2 px-4 rounded hover:bg-[#bd6677] transition"
      >
        Register
      </button>
    </form>
  );
}