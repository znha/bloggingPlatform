"use client";
import React from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {  useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import DeletePostDialog  from "./DeletePostDialog";

export default function PostCard({ post }) {
    const user = useSelector((state) => state.auth.user);
    const authenticated = user && user.id === post.authorId;
    const router = useRouter();
    const onEdit = (id) => {
      router.push(`/posts/edit/${id}`);
    }
    
  return (
    <li
      key={post.id}
      className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
    >
      <h3 className="text-xl font-semibold text-[#914151] hover:text-[#bd6677] ">
        <Link href={`posts/view/${post.id}`}>{post.title}</Link>
      </h3>
      <p className="text-gray-700 mt-2 line-clamp-3">
        {post.content.substring(0, 300) + "..."}
      </p>
      <div className="flex items-center justify-between mt-2">
        <div className="mt-4 text-sm text-gray-500">
          By <span className="font-medium">{post.authorId}</span> on{" "}
          {new Date(post.createdAt).toLocaleDateString()}
        </div>
        {authenticated && (
          <div className=" flex space-x-2">
            <button
              onClick={() => onEdit(post.id)}
              className="text-[#914151] hover:text-[#bd6677]"
              aria-label="Edit post"
            >
              <PencilIcon className="h-5 w-5" />
            </button>
            <DeletePostDialog postId={post.id}/>
          </div>
        )}
      </div>

    </li>
  );
}
