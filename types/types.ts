// ─── CATEGORY TYPES ───────────────────────────────────────────────────────────

export type CategoryType = {
  name: string;
  slug: string; // Required for URL/key logic
};

// Props for a single CategoryItem component
export type CategoryItemProps = CategoryType & {
  asLink?: boolean; // If the category should render as a link
};

// Props for the Categories list component
export type CategoriesProps = {
  categories?: CategoryType[]; // Optional to allow fallback fetch
  asLink?: boolean;
};

// ─── HEADER TYPE ───────────────────────────────────────────────────────────────

export type HeaderProps = {
  categories?: CategoryType[];
};

// ─── POST TYPES ───────────────────────────────────────────────────────────────

export type AuthorType = {
  name: string;
  photo: {
    url: string;
  };
  bio?: string;
  id?: string;
};

export type PostType = {
  createdAt: string;
  title: string;
  excerpt: string;
  slug: string;
  featuredImage: {
    url: string;
  };
  url?: string; // Optional override for external or custom URLs
  author?: AuthorType;
};

// ─── POST WIDGET ──────────────────────────────────────────────────────────────

export type PostWidgetProps = {
  categories: string[]; // These are category slugs
  slug?: string;        // Current post slug (optional)
};