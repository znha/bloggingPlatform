import React from 'react'
import PostsList from '../components/posts/PostsList'

const PostsPage = () => {
    const samplePosts = [
  {
    id: '1',
    title: 'How to Build a Scalable API',
    excerpt: 'Learn the principles of designing scalable RESTful APIs using Node.js and Express...',
    author: 'Zinah',
    date: '2025-11-15',
  },
  {
    id: '2',
    title: 'Understanding Redux Toolkit',
    excerpt: 'Redux Toolkit simplifies state management with powerful abstractions like createSlice...',
    author: 'Zinah',
    date: '2025-11-14',
  },
];

  return (
    <PostsList posts={samplePosts} />   
  )
}

export default PostsPage