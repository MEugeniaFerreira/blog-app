import { getCategories, getPosts } from '@services';
import { CategoryType, PostType } from 'types/types';

import HomeContent from '@components/HomeContent';

export default async function Home() {
  const posts: PostType[] = await getPosts(); // Server-side fetching
  const categories: CategoryType[] = await getCategories(); // Server-side fetching

  return <HomeContent posts={posts} categories={categories} />;
}