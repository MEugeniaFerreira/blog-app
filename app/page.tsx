import { Categories, PostWidget, PostCard, Header } from '@components/index';
import { categories, posts } from '@data/mocks';


export default function Home() {
  return (
    <>
      <Header categories={ categories } />

      <div className="container mx-auto px-10 py-8 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
        {posts.map((post) => (
          < PostCard post = { post } key={ post.title } />
        ))}
        </div>

      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">
          <PostWidget categories={[]} slug="" />
          <Categories name="Categories" slug="categories" />
        </div> 
      </div>

      </div>
      </div>
    </>

  );
}
