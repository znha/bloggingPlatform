import React from 'react';
import PostCard from './PostCard';
export default function PostsList ({ posts }) {
  return (
    <div className="w-full mx-auto my">
      <ul className="space-y-6">
        {posts.map((post) => (
         <postCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};
