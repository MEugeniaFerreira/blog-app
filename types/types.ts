type Header = {
	categories: Category[];
};

type Category = {
	name: string;
	slug?: string;
};

type CategoryItem = Category & {
	asLink?: boolean;
};

type Categories = {
	categories: Category[];
	asLink?: boolean;
};

type Post =  {
  createdAt: string;
  title: string;
	exerpt: string;
	featuredImage: {
		url: string; // Define featuredImage as an object with a url property
	};
	url?: string; // Add url property to Post type
	slug?: string;
	author: {
		name: string;
		photo: {
			url: string;
		};
		bio?: string;
		id?: string;
	};
};

type PostWidget = {
	categories: string[];
	slug: string;
};

export type { Header as HeaderType, Category as CategoryType, CategoryItem as CategoryItemType, Categories as CategoriesType, Post as PostType, PostWidget as PostWidgetType};
