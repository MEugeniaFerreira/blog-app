'use client'
import React, {useState, useEffect, useRef} from 'react'
import {CommentsFormProps } from 'types/types'
import { submitComment } from '@services'

const CommentsForm = ({ slug }: CommentsFormProps) => {

  const [error, setError] = useState(false);
/*   const [storage, setstorage] = useState(null); */
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // ref for the form elements
  const commentEl = useRef<HTMLTextAreaElement>(null);
  const nameEl = useRef<HTMLInputElement>(null);
  const emailEl = useRef<HTMLInputElement>(null);
  const storeDataEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      nameEl.current!.value = localStorage.getItem('name') || '';
      emailEl.current!.value = localStorage.getItem('email') || '';
    }
  }, []); /* only when mounted and making sure that the values are comming from browser*/

  const handleCommentSubmission = () => {
    setError(false);

    const comment = commentEl.current?.value;
    const name = nameEl.current?.value;
    const email = emailEl.current?.value;
    const storeData = storeDataEl.current?.checked;

    if (!comment || !name || !email) {
        setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };
  
    if (storeData) {
      localStorage.setItem('name', name); 
      localStorage.setItem('email', email);     
    }else {
      localStorage.removeItem('name'); 
      localStorage.removeItem('email'); 
    }

    // sending comment to own api
    submitComment(commentObj)
      .then(() => {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      })
      .catch((err) => {
        console.error('Error submitting comment:', err);
        setError(true);
      });
  };
  
    
  return (
		<div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
			<h3 className='text-xl mb-8 font-semibold border-b-2 pb-4'>Deixe um comentário</h3>

			<div className='grid grid-cols-1 gap-4 mb-4'>
				<textarea ref={commentEl} className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='Comment' name='comment' id='comment' cols={30} rows={10} required></textarea>
			</div>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
				<input ref={nameEl} 
        type='text' 
        placeholder='Name' name='name' id='name' className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' required />
				<input ref={emailEl} 
        type='email' 
        placeholder='e-mail' name='email' id='email' className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' required />
			</div>

			{error && <p className='text-xs text-blue-500'>Todos os campos são obrigatórios</p>}
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div className='flex items-center mb-4'>
          <input ref={storeDataEl} type='checkbox' id='storeData' name='storeData' value='true' className='mr-2 cursor-pointer' />
          <label htmlFor='storeData' className='text-gray-500 cursor-pointer ml-2'>Salvar meus dados para a próxima vez que eu comentar</label>
        </div>
      </div>
			<div className='mt-8'>
				<button type='button' onClick={handleCommentSubmission} className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
					<span className='text-s text-white'>Enviar comentário</span>
				</button>

        {showSuccessMessage && (
          <span className='text-sm float-right font-semibold mt-3 text-green-700 '>Obrigada! Seu comentário será revisado antes de ser postado</span>)}
			</div>

		</div>
	);
}


export default CommentsForm