import React from "react";
import PostView from "../../../components/posts/PostView";
import { notFound } from "next/navigation";

async function getPost(id) {
  const res = await fetch(`${process.env.API_URL}/posts/view/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export default async function PostPage( {params} ) {
  const id = await params.then((p) => p.id)
  const post = await getPost(id);
  if (!post) return notFound();

  return <PostView post={post} />;
}
