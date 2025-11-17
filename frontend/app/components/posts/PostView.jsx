import Link from "next/link";
import React from "react";

async function getPost(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export default function ViewPost({ post }) {
  return (
    <>
      <nav aria-label="breadcrumb" className="w-max">
        <ol className="flex w-full flex-wrap items-center rounded-md bg-slate-50 px-4 py-2">
          <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
            <Link href="/">Home</Link>
            <span className="pointer-events-none mx-2 text-slate-800">/</span>
          </li>
          <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
            <Link href="/">Posts</Link>
            <span className="pointer-events-none mx-2 text-slate-800">/</span>
          </li>
          <li className="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
            <Link href="#">{post.title}</Link>
          </li>
        </ol>
      </nav>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h4 className="text-3xl font-bold text-[#914151] mb-4 text-wrap">{post.title}</h4>
        <p className="text-sm text-gray-500 mb-6">
          By <span className="font-semibold">{post.author}</span> on{" "}
          {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <div className="prose prose-lg text-gray-700">{post.content}</div>
      </div>
    </>
  );
}
