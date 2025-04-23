import React from 'react'
import { CategoryType } from 'types/types'


const Categories = ({ name, slug } : CategoryType) => {
  return (
    <div>
      {name}
      {slug}
    </div>
  )
}

export default Categories