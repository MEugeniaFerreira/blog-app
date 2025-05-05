import React from 'react'
import Link from 'next/link'
import { CategoryItemProps } from 'types/types';


const CategoryItem = ({ name, slug, asLink = true } : CategoryItemProps) => {
  return asLink ? 
    ( <Link href={`/category/${slug}`} className="block pb-3"> {name} </Link>
    ) : (
      <>{name}</>
  ) 
}

export default CategoryItem