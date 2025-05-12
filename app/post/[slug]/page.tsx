import { getPosts, getPostDetails } from '@services';
import { PostDetail, Comments, CommentsForm, PostWidget, Categories, Author } from '@components/index';
import { CategoryType } from 'types/types';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props) {
  const post = await getPostDetails(params.slug);

  if (!post) {
    notFound(); //will trigger the 404 page
  }

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} comment="" email="" name="" />
          <Comments slug={post.slug} />
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="relative lg:sticky top-8">
            <PostWidget
              categories={post.categories?.map((category: CategoryType) => category.slug)}
              slug={post.slug}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// static params for each post slug at build time
export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// revalidate every 60 seconds
export const revalidate = 60;