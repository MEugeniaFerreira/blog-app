import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { PostType } from 'types/types';

const PostCard = ({ post }: { post: PostType }) => {
	return (
		<div className='bg-white shadow-lg rounded-lg p-0 pb-12 mb-8'>
			
      <div className='relative overflow-hidden shadow-md mb-6'>
				<Image 
				src={post.featuredImage.url} 
				alt={post.title} width={800} 
				height={320}
				className='object-top h-80 w-full rounded-t-lg shadow-md object-cover'
				unoptimized />
			</div>

			<h1 className='transition duration-700 text-center text-3xl font-semibold cursor-pointer hover:text-blue-600'>
				<Link href={`/post/${post.slug}`}>{post.title}</Link>
			</h1>

			<div className='block lg:flex text-center items center justify-center mb-8 w-full'>
				{post.author && (
					<div className='flex items-center justify-center lg:mb-0 w-full lg:w-auto p-2'>
						<Image
						alt={post.author.name}
						height={30}
						width={30}
						className='align-middle rounded-full'
						src={post.author.photo.url} />

						<p className='inline align-middle text-gray-700 ml-2 text-lg'>
							{post.author.name}
						</p>
						
					</div>
				)}
					<div className='font-medium text-gray-700 flex items-center justify-center'>
						<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-calendar-fill mr-2' viewBox='0 0 16 16'>
							<path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5h16V4H0V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5' />
						</svg>
						<span>{format(parseISO(post.createdAt), 'MMM dd, yyyy')}</span>
					</div>
			</div>
			<p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
        <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
          Continue a ler
        </span>
        </Link>
      </div>
		</div>
	);
};

export default PostCard;
