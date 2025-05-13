import { PostType, CategoryType } from 'types/types';

const posts: PostType[] = [
  {
    title: 'React with Tailwind',
    excerpt: 'Learn React with Tailwind CSS',
    categories: [
      { name: 'React', slug: 'react' },
      { name: 'CSS', slug: 'css' },
    ],
    content: {
      raw: {
        children: [
          {
            type: 'paragraph',
            src: '',
            title: '',
            children: [
              { text: 'This is the content of the post about React with Tailwind.' },
            ],
          },
        ],
      },
    },
    featuredImage: {
      url: 'https://example.com/image.jpg',
    },
    author: {
      name: 'John Doe',
      photo: {
        url: 'https://example.com/author-photo.jpg',
      },
    },
    createdAt: '2023-05-01T00:00:00Z',
    slug: 'react-with-tailwind',
  },
  {
    title: 'GraphQL Basics',
    excerpt: 'Learn the basics of GraphQL',
    categories: [
      { name: 'GraphQL', slug: 'graphql' },
      { name: 'API', slug: 'api' },
    ],
    content: {
      raw: {
        children: [
          {
            type: 'paragraph',
            src: '',
            title: '',
            children: [
              { text: 'This is the content of the post about GraphQL basics.' },
            ],
          },
        ],
      },
    },
    featuredImage: {
      url: 'https://example.com/graphql-image.jpg',
    },
    author: {
      name: 'Jane Smith',
      photo: {
        url: 'https://example.com/author-photo2.jpg',
      },
    },
    createdAt: '2023-05-02T00:00:00Z',
    slug: 'graphql-basics',
  },
];

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