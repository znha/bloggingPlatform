"use client";
import { useState } from "react";

export default function PostForm({ onSubmit, loading, myformData= {
    title: "",
    content: ""
  } }) {
  const [formData, setFormData] = useState(myformData);
  const updating = myformData.title !== "" ;
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Pass data to parent or dispatch Redux thunk
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full mx-4  shadow-md p-4 space-y-4"
    >
      <h2 className="text-2xl font-bold text-[#914151]  rounded p-2 w-full">
       {!updating?"Create New Post":"Update Post"}
      </h2>

      <div>
        <label className="block text-sm font-medium text-[#914151]">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="mt-1 text-gray-700 block w-full border-gray-300 rounded-md shadow-sm p-2 focus:ring-[#914151] focus:border-[#914151]"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#914151]">
          Content
        </label>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          rows={6}
          className="mt-1 text-gray-700 block w-full p-2 border-gray-300 rounded-md shadow-sm focus:ring-[#914151] focus:ring-[#914151]"
          required
        />
      </div>

      <button
        type="submit"
       className={`flex items-center gap-2 px-4 py-2 ${
          loading ? 'bg-gray-400' : 'bg-[#914151]'
        } hover:bg-[#bd6677] text-white font-semibold rounded-md shadow-md transition duration-200`}
      >
        {!updating && <span>{loading ? 'Creating...' : 'Create Post'}</span>}
        {updating && <span>{loading? 'Updating...' : 'Update Post'}</span>}

      </button>
    </form>
  );
}
