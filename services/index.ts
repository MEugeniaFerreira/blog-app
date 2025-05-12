import { request, gql } from 'graphql-request';
import { PostType, CategoryType, CommentType } from 'types/types';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;

// Get All Posts
const getPosts = async (): Promise<PostType[]> => {
	const query = gql`
		query GetAllPosts {
			postsConnection {
				edges {
					node {
						author {
							bio
							name
							id
							photo {
								url
							}
						}
						createdAt
						slug
						title
						excerpt
						featuredImage {
							url
						}
						categories {
							name
							slug
						}
					}
				}
			}
		}
	`;

	const result = await request<{ postsConnection: { edges: { node: PostType }[] } }>(graphqlAPI, query);

	return result.postsConnection.edges.map(({ node }) => node);
};

const getPostDetails = async (slug: string): Promise<PostType> => {
	const query = gql`
		query GetPostDetails($slug: String!) {
			post(where: { slug: $slug }) {
				author {
					bio
					name
					id
					photo {
						url
					}
				}
				createdAt
				slug
				title
				excerpt
				featuredImage {
					url
				}
				categories {
					name
					slug
				}
				content {
					raw
				}
			}
		}
	`;

	const result = await request<{ post: PostType }>(graphqlAPI, query, { slug });

	return result.post;
};

// Get Recent Posts (excluding a slug)
const getRecentPosts = async (slugToExclude?: string): Promise<PostType[]> => {
	const query = gql`
		query GetRecentPosts($slug: String!) {
			posts(where: { slug_not: $slug }, orderBy: createdAt_ASC, last: 3) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;

	const result = await request<{ posts: PostType[] }>(graphqlAPI, query, {
		slug: slugToExclude || '',
	});

	return result.posts.map((post) => post);
};

// Get Similar Posts by category
const getSimilarPosts = async (categories: string[], slug: string): Promise<PostType[]> => {
	const query = gql`
		query GetSimilarPosts($slug: String!, $categories: [String!]) {
			posts(where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories } } }, last: 3) {
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;

	const result = await request<{ posts: PostType[] }>(graphqlAPI, query, {
		slug,
		categories,
	});

	return result.posts.map((post) => post);
};

const getCategories = async (): Promise<CategoryType[]> => {
	const query = gql`
		query GetCategories {
			categories {
				name
				slug
			}
		}
	`;
	const result = await request<{ categories: CategoryType[] }>(graphqlAPI, query);
	return result.categories;
};

const submitComment = async (commentObj: { name: string; email: string; comment: string; slug: string }) => {
	const result = await fetch('/api/comments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(commentObj),
	});

	return result.json();
};

const getComments = async (slug: string) => {
	const query = gql`
		query GetComments($slug: String!) {
			comments(where: { post: { slug: $slug } }) {
				name
				createdAt
				comment
			}
		}
	`;
	const result = await request<{ comments: CommentType[] }>(graphqlAPI, query, { slug });
	return result.comments;
};

const getFeaturedPosts = async (): Promise<PostType[]> => {
	const query = gql`
		query GetFeaturedPosts {
			posts(where: { featuredPost: true }) {
				author {
					name
					photo {
						url
					}
				}
				featuredImage {
					url
				}
				title
				slug
				createdAt
			}
		}
	`;

	const result = await request<{ posts: PostType[] }>(graphqlAPI, query);
	return result.posts;
};

const getCategoryPosts = async (slug: string): Promise<PostType[]> => {
  const query = gql`
    query GetCategoryPosts($slug: String!) {
      posts(where: { categories_some: { slug: $slug } }) {
        title
        slug
        excerpt
        featuredImage {
          url
        }
        createdAt
        author {
          name
          photo {
            url
          }
        }
      }
    }
  `;

  const result = await request<{ posts: PostType[] }>(graphqlAPI, query, { slug });
  return result.posts;
}

export { getPosts, getRecentPosts, getSimilarPosts, getCategories, getPostDetails, submitComment, getComments, getFeaturedPosts, getCategoryPosts };
