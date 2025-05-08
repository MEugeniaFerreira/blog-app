import React from 'react'
import { CommentsFormProps } from 'types/types'

const CommentsForm = ({ comment }: CommentsFormProps) => {
  return (
    <div>
      <h1>
        {comment.name}
      </h1>
    </div>
  )
}

export default CommentsForm