import React from 'react';

async function getPost(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
  if (!res.ok) throw new Error('Failed to fetch post');
  return res.json();
}

export default function ViewPost ({ post }) {

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By <span className="font-semibold">{post.author}</span> on{' '}
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div className="prose prose-lg text-gray-700">{post.content}</div>
    </div>
  );
}
