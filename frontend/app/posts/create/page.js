"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../../lib/features/posts/postsSlice";
import PostForm from "../../components/posts/PostForm";
import toast from "react-hot-toast";

export default function create() {
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentStatus, error } = useSelector((state) => state.posts);
  const handleCreate = (data) => {
    data["authorId"] = user.id;
    dispatch(createPost(data));
  };

  // Handle unauthenticated user
  useEffect(() => {
    if (!user) {
      router.push("/user/login"); // Redirect to login if not authenticated
    }
  }, [user, router]);

  // Handle success and error states of post creation
  useEffect(() => {
    if (currentStatus === "succeeded") {
      toast.success("Post Created successfuly! 🎉");
      router.push("/");
    } else if (currentStatus === "failed") {
      toast.error(error);
    }
  }, [currentStatus, error]);

  if (!user) return null;

  return (
    <PostForm onSubmit={handleCreate} loading={currentStatus === "loading"} />
  );
}
