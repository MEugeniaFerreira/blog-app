import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { getPosts, getPostDetails } from '@services';
import {PostDetail, Castegories, PostWidget, Author, Comments, CommentsForm} from '@components/index';

import { PostType } from 'types/types';

const PostPage = ( post : PostType) => {

  const [fetchedPost, setFetchedPost] = useState<PostType[]>([]);

  useEffect(() => {
      if (!post || post.length === 0) {
        getPosts().then(setFetchedPost);
      }
    }, [post]);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <PostDetail />
          <Author />
          <CommentsForm />
          <Comments />
        </div>
      </div>
      <p>{fetchedPost.title}</p>
    </div>
  );
};

export default PostPage;