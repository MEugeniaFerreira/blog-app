import React, {  } from 'react'
import Link from 'next/link'
import { HeaderType } from 'types/types';
import { headerCategories } from '@data/mocks';
import CategoryItem from '@components/CategoryItem';

const Header = ({  }: HeaderType )=> {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {headerCategories.map((hCategory) => (
            <span key={hCategory.slug} className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
              <CategoryItem name={hCategory.name} slug={hCategory.slug} asLink={true} key={hCategory.slug} />
            </span>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Header