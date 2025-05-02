import { PostType, CategoryType } from 'types/types';

const posts: PostType[] = [
  {
    title: 'React Testing',
    excerpt: 'Learn react testing',
    featuredImage: {
      url: 'https://example.com/image.jpg'
    }
  }, 
  {
    title: 'React with tailwind',
    excerpt: 'Learn react with tailwind',
    featuredImage: {
      url: 'https://example.com/image.jpg'
    }
  },
]

const categories: CategoryType[] = [
  { name: 'React', slug: 'react' },
  { name: 'GraphQL', slug: 'graphql' },
  { name: 'Next.js', slug: 'nextjs' },
];

const headerCategories: CategoryType[] = [
  { name: 'React', slug: 'react' },
  { name: 'GraphQL', slug: 'graphql' },
  { name: 'Next.js', slug: 'nextjs' },
];


export { posts, categories, headerCategories };