import React from 'react'
import CategoryItem from '@components/CategoryItem'
import { CategoriesType } from 'types/types'

const Categories = ({ categories, asLink = true } : CategoriesType) => {
  return (
    <div>
      <div className="categories-list">
        {categories.map((category) => (
            <CategoryItem key={category.slug} {...category} asLink = { asLink } />
        ))}
      </div>
    </div>
  )
}

export default Categories