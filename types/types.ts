// category types
export type CategoryType = {
  name: string;
  slug: string; // Required for URL/key logic
};

// props for a single CategoryItem component
export type CategoryItemProps = CategoryType & {
  asLink?: boolean; // if it must render as a link
};

// props for the Categories list component
export type CategoriesProps = {
  categories?: CategoryType[];
  asLink?: boolean;
};

export type CategoryPostProps = {
  posts: { node: PostType }[]; // Define the type for the posts prop
};

// header 
export type HeaderProps = {
  categories?: CategoryType[];
};

// posts
export type AuthorType = {
  name: string;
  photo: {
    url: string;
  };
  bio?: string;
  id?: string;
};

export type AuthorProps = {
  author: AuthorType;
};

export type PostType = {
  categories: CategoryType[];
  createdAt: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage: {
    url: string;
  };
  content: {
    raw: {
      children: ContentType[];
    };
  };
  url?: string;
  author: AuthorType;
};

export type PostProps = {
  post: PostType;
};

//post widget
export type PostWidgetProps = {
  categories: string[];
  slug?: string;// current post slug (optional)
};

//content types

export type ContentType = {
  type: string;
  children: ContentChildType[];
  src: string;
  title: string;
  height?: number;
  width?: number;
};

export type ContentChildType = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};


//comments

export type CommentType = {
  name: string;
  createdAt: string;
  comment: string;
  slug: string;
}

export type CommentsFormProps = {
  name: string;
  comment: string;
  email: string;
  slug: string;
};

