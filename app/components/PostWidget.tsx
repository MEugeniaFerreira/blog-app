import React from 'react'
import { PostWidgetType } from 'types/types'

const PostWidget = ({ categories, slug } : PostWidgetType) => {
  return (
    <>
      <div>PostWidget</div>
      <div>from widget: {categories}</div>
      <div>from widget: {slug}</div>
    </>
  )
}

export default PostWidget