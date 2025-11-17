import React from 'react';
import PostCard from './PostCard';
export default function PostsList ({ posts , user}) {
  return (
    <div className="w-full mx-auto my">
      <ul className="space-y-6">
        {posts.map((post) => (
         <PostCard key={post.id} post={post} user={user} />
        ))}
      </ul>
    </div>
  );
};
