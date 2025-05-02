import { PostType, CategoryType } from 'types/types';

const posts: PostType[] = [
  {
    title: 'React Testing',
    exerpt: 'Learn react testing',
    featuredImage: {
      url: 'https://example.com/image.jpg'
    },
    author: {
      name: '',
      photo: {
        url: ''
      }
    },
    createdAt: ''
  }, 
  {
    title: 'React with tailwind',
    exerpt: 'Learn react with tailwind',
    featuredImage: {
      url: 'https://example.com/image.jpg'
    },
    author: {
      name: '',
      photo: {
        url: ''
      }
    },
    createdAt: ''
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