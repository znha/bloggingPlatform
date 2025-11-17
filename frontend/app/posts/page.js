import React from 'react'
import PostsList from '../components/posts/PostsList'

const PostsPage = () => {
  const posts = [] // Fetch or pass the posts data here
  return (
    <PostsList posts={posts} />   
  )
}

export default PostsPage