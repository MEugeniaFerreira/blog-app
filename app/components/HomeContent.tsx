'use client';

import { FeaturedPosts } from '@sections/index';
import { PostCard, PostWidget, Categories } from '@components/index';
import { PostType, CategoryType } from 'types/types';

type Props = {
  posts: PostType[];
  categories: CategoryType[];
};

export default function HomeContent({ posts, categories }: Props) {
  return (
    <div className="container mx-auto px-10 py-8 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>

        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget categories={[]} slug="" />
            <Categories categories={categories} asLink={true} />
          </div>
        </div>
      </div>
    </div>
  );
}