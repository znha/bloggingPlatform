"use client";
import React from 'react'
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../../../lib/features/posts/postsSlice";
import PostForm from '../../../components/posts/PostForm';
import toast from "react-hot-toast";

export default  function  EditPost({ post} ) {

  const user = useSelector((state) => state.auth.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const { currentStatus, error } = useSelector((state) => state.posts);

  const handleUpdate = (data) => {
    
    data["authorId"] = parseInt(user.id);
    data["id"] = post.id;
    dispatch(updatePost(data));
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
      toast.success("Post Updated successfuly! 🎉");
      router.push(`/posts/view/${post.id}`);
    } else if (currentStatus === "failed") {
      toast.error(error);
    }
  }, [currentStatus, error]);

  if (!user) return null;

  return (
    <PostForm onSubmit={handleUpdate} loading={currentStatus === "loading"} myformData={{title: post.title, content: post.content}} />
  )
}