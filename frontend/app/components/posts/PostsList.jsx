import React from 'react';

export default function PostsList ({ posts }) {
  return (
    <div className="w-full mx-auto my">
      <ul className="space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-gray-100 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-[#914151] hover:text-[#bd6677] ">
              <a href={`posts/view/${post.id}`}>{post.title}</a>
            </h3>
            <p className="text-gray-700 mt-2 line-clamp-3">{post.content.substring(0,300) + "..."}</p>
            <div className="mt-4 text-sm text-gray-500">
              By <span className="font-medium">{post.authorId}</span> on{' '}
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
