import React from 'react'

type PostCardProps = {
  post: {
    title: string;  
    excerpt: string;
    // slug: string;
    // createdAt: string;
  };
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div>
      {post.title}
      {post.excerpt}
    </div>
  )
}

export default PostCard