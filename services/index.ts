import { request, gql } from 'graphql-request';
import { PostType, CategoryType } from 'types/types';

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

// Get Recent Posts (excluding a slug)
const getRecentPosts = async (slugToExclude?: string): Promise<PostType[]> => {
	const query = gql`
		query GetRecentPosts($slug: String!) {
			posts(
				where: { slug_not: $slug }
				orderBy: createdAt_ASC
				last: 3
			) {
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
			posts(
				where: {
					slug_not: $slug
					AND: { categories_some: { slug_in: $categories } }
				}
				last: 3
			) {
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

		

export { getPosts, getRecentPosts, getSimilarPosts, getCategories };