import { PostType, CategoryType } from 'types/types';

const posts: PostType[] = [
  {title:'React Testing', excerpt: 'Learn react testing'}, 
  {title:'React with tailwind', excerpt: 'Learn react with tailwind'},
]

const categories: CategoryType[] = [
  { name: 'React', slug: 'react' },
  { name: 'GraphQL', slug: 'graphql' },
  { name: 'Next.js', slug: 'nextjs' },
];


export { posts, categories };