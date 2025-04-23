import React from 'react'

type PostWidgetProps = {  
  categories: string[];
  slug: string; 
}

const PostWidget = ({ categories, slug } : PostWidgetProps) => {
  return (
    <>
      <div>PostWidget</div>
      <div>from widget: {categories}</div>
      <div>from widget: {slug}</div>
    </>
  )
}

export default PostWidget