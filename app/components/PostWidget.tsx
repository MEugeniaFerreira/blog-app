'use client';

import React, {useState, useEffect} from 'react'
import { PostWidgetProps, PostType } from 'types/types'
import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { getRecentPosts, getSimilarPosts } from '@services';

const PostWidget = ({ categories, slug } : PostWidgetProps) => {

  const [relatedPosts, setRelatedPosts] = useState<PostType[]>([]);

  useEffect(() => {
    if(slug){
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result))
    }
  }, [categories, slug])

/*   console.log('relatedPosts', relatedPosts) */

  return (
    <>
      <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h3 className='text-xl mb-8 font-semibold border-b-2 pb-4'>
          {slug ? 'Posts relacionados' : 'Posts recentes'}
        </h3>
        {relatedPosts.map((post) => (
          <div key={post.slug} className='flex items-center w-full mb-4'>
            <div className='w-16 flex-none'>
              <Image
                alt={post.title}
                height={64}
                width={64}
                className='align-middle rounded-full object-cover w-full h-full'
                src={post.featuredImage.url}
              />
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-gray-500 font-xs'>
                {format(parseISO(post.createdAt), "d 'de' MMM 'de' yyyy", { locale: ptBR})}
              </p>
              <Link href={`/post/${post.slug}`}
              className='text-md'
              key={post.slug}>
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default PostWidget