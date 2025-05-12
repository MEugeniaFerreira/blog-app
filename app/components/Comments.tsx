'use client';
import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CommentType } from 'types/types';
import { getComments } from '@services';

const Comments = ({ slug }: { slug: string }) => {
	const [comments, setComments] = useState<CommentType[]>([]);

	useEffect(() => {
		//getComments(slug)
		getComments(slug)
			.then((result) => {
				setComments(result);
			})
			.catch((error) => {
				console.error('Error fetching comments:', error);
			});
	}, [slug]);

	return (
		<>
			{comments.length > 0 && (
				<div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
					<h3 className='text-xl mb-8 font-semibold border-b-2 pb-4'>{comments.length} Comentários</h3>
					{comments.map((comment) => (
						<div key={comment.createdAt} className='border-b-2 border-gray-100 mb-4 pb-4'>
							<p className='mb-4'>
								<span className='font-semibold'>
									{comment.name} </span> 
                em {format(parseISO(comment.createdAt), "d 'de' MMM 'de' yyyy", { locale: ptBR })}								
							</p>
							<p className='whitespace-pre-line text-gray-600 w-full'>{comment.comment}</p>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Comments;
