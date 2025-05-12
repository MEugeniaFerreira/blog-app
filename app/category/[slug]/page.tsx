import { getCategories, getCategoryPosts } from '@services';
import { PostCard, Categories } from '@components/index';
import { notFound } from 'next/navigation';
import { CategoryType } from 'types/types';

type Props = {
  params: {
    slug: string;
  };
};

export default async function CategoryPostPage({ params }: Props) {
  const posts = await getCategoryPosts(params.slug);


  if (!posts || posts.length === 0) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// generating static params for dynamic routes
export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category: CategoryType) => ({
    slug: category.slug,
  }));
}

// isr
export const revalidate = 60;