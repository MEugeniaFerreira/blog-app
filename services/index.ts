import { request, gql } from 'graphql-request';
import { PostType } from 'types/types';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;

const getPosts = async (): Promise<PostType[]> => {
	const query = gql`
		query MyQuery {
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
						exerpt
						featuredImage {
							url
						}
						category {
							name
							slug
						}
					}
				}
			}
		}
	`;

	const result = await request<{ postsConnection: { edges: { node: PostType }[] } }>(graphqlAPI, query);

	return result.postsConnection.edges.map(({ node }) => ({
		...node,
	}));
};

export default getPosts;
