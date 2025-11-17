
import React from 'react'
import EditPost from './editPost';
import { notFound } from "next/navigation";
async function getPost(id) {
  const res = await fetch(`http://localhost:4000/posts/view/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}
export default async function  EditPage({params}) {
  const id = await params.then((p) => p.id)
  const post = await getPost(id);
  if (!post) return notFound();

  return (
    <EditPost  post={post} />)
}