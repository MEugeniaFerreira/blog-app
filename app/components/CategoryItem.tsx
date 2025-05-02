import React from 'react'
import Link from 'next/link'
import { CategoryItemType } from 'types/types';


const CategoryItem = ({ name, slug, asLink = true } : CategoryItemType) => {
  return asLink ? 
    ( <Link href={`/category/${slug}`}> {name} </Link>
    ) : (
      <>{name}</>
  ) 
}

export default CategoryItem