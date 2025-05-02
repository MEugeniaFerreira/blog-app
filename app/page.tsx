import getPosts from 'services/index';
import { categories } from '@data/mocks';
import { PostType } from 'types/types';
import HomeContent from '@components/HomeContent';

export default async function Home() {
  const posts: PostType[] = await getPosts(); // Server-side fetching

  return <HomeContent posts={posts} categories={categories} />;
}