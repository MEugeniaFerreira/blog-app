type Post = {
  title: string;
  excerpt: string;
};

type Category = {
  name: string;
  slug: string;
};


export type { Post as PostType, Category as CategoryType }