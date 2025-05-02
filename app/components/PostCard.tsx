import React from 'react'
import { PostType } from 'types/types'
import Link from 'next/link' 
/*import moment from 'moment' */
import Image from 'next/image'

const PostCard = ({ post }: { post: PostType } ) => { 
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <Image 
          src={post.featuredImage.url}
          alt={post.title}
          width={800}
          height={320}
          className="object-top h-80 w-full rounded-t-lg shadow-md object-cover"
          unoptimized 
        />
      </div>

      <h1 className='transition duration-700 text-center mb-8'>
        <Link href={`/post/${post.title}`}
          className="text-3xl font-semibold cursor-pointer hover:text-pink-600 transition duration-700">
          {post.title}
        </Link>
      </h1>
        {post.excerpt}
     </div>
  )
}

export default PostCard