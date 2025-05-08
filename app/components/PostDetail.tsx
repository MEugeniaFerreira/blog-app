import React from 'react';
import Image from 'next/image';
import { PostProps, ContentChildType, ContentType } from 'types/types';
import { format, parseISO } from 'date-fns';

const PostDetail = ({ post }: PostProps) => {
	const renderElementByType = (index: number, content: React.ReactNode, type: string, obj: ContentType) => {
    const types: Record<string, React.ReactNode> = {
			'heading-three': (
				<h3 key={index} className='text-xl font-semibold mb-4'>
					{content}
				</h3>
			),
			'heading-four': (
				<h4 key={index} className='text-md font-semibold mb-4'>
					{content}
				</h4>
			),
			paragraph: (
				<p key={index} className='mb-8'>
					{content}
				</p>
			),
			image: <Image key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />,
		};

		return types[type] || content;
	};

	const getContentFragment = (index: number, text: string | React.ReactNode, obj: ContentChildType): React.ReactNode => {
		let modifiedText: React.ReactNode = text;

		if (obj.bold) modifiedText = <b key={index}>{modifiedText}</b>;
		if (obj.italic) modifiedText = <i key={index}>{modifiedText}</i>;
		if (obj.underline) modifiedText = <u key={index}>{modifiedText}</u>;

		return modifiedText;
	};

	return (
		<div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
			<div className='relative overflow-hidden shadow-md mb-6'>
				<Image src={post.featuredImage?.url /*  || '/fallback.jpg' */} alt={post.title} width={800} height={400} className='object-top h-full w-full rounded-t-lg' />
			</div>

			<div className='px-4 lg:px-0'>
				<div className='flex items-center mb-8 w-full'>
					<div className='flex items-center mr-8 w-full lg:w-auto'>
						<Image unoptimized alt={post.author.name} width={40} height={40} className='align-middle rounded-full' src={post.author.photo?.url /*  || '/fallback-avatar.jpg' */} />
						<p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
					</div>
					<div className='font-medium text-gray-700'>
						<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 inline mr-2 text-pink-500' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
							<path d='M12 8v4l3 3m7 5a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v16z' />
						</svg>
						<span>{format(parseISO(post.createdAt), 'MMM dd, yyyy')}</span>
					</div>
				</div>
				<h1 className='mb-8 text-3xl font-semibold'>{post.title}</h1>
				<p>{post.excerpt}</p>
				{post.content.raw.children.map((typeObj: ContentType, index: number) => {
					const children = typeObj.children.map((item: ContentChildType, itemIndex: number) => getContentFragment(itemIndex, item.text, item));

					return renderElementByType(index, children, typeObj.type, typeObj);
				})}
			</div>
		</div>
	);
};

export default PostDetail;
