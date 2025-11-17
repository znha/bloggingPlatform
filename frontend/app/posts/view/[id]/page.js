import React from 'react'
import PostView from '../../../components/posts/PostView'
export default function PostPage () {
  const post = 
  {
    id: '1',
    title: 'How to Build a Scalable API',
    content: 'Learn the principles of designing scalable RESTful APIs using Node.js and Express...',
    author: 'Zinah',
    date: '2025-11-15',
  }
  return (
    <PostView
      post={post}
    />
  )
}

 