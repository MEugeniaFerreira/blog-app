import React from 'react';
import Image from 'next/image';
import { AuthorProps } from 'types/types';

const Author = ({ author }: AuthorProps) => {
	return (
		<div className='text-center mb-8 mt-20 p-12 relative rounded-lg bg-black/40'>
			<div className='absolute left-0 right-0 -top-14'>
				<Image unoptimized src={author.photo.url} alt={author.name} className='mx-auto rounded-full' width={100} height={100} />
			</div>
			<h3 className='text-white mt-4 mb-2 text-xl font-bold'>{author.name}</h3>
			<p className='text-white text-ls'>{author.bio}</p>
		</div>
	);
};

export default Author;
