import React from 'react'
import Image from 'next/image'
import { AuthorProps } from 'types/types'

const Author = ({ author }: AuthorProps) => {
  return (
    <div>
      <h1>   
        {author.name}
        <Image
          src={author.photo.url} alt={author.name}
          className="align-middle rounded-full"
          width={30}
          height={30} />
      </h1>
    </div>
  )
}

export default Author