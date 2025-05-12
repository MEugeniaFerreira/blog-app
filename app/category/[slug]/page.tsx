import { getCategories, getCategoryPosts } from '@services';
import { PostCard, Categories } from '@components/index';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export default async function CategoryPost({ params }: Props) {
  // Fetch posts for the given category slug
  const posts = await getCategoryPosts(params.slug);

  if (!posts || posts.length === 0) {
    notFound(); // Show 404 page if no posts are found
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

// Generates static paths for all category slugs
export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export const revalidate = 60;