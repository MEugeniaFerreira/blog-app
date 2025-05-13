import { NextResponse } from 'next/server';
import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string;
const hygraphToken = process.env.HYGRAPH_TOKEN as string;

export async function POST(req: Request) {
  const { name, email, comment, slug } = await req.json();

  const client = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${hygraphToken}`,
    },
  });

  const query = gql`
  mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
    createComment(
      data: { name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }
    ) {
      id
      name
      email
      comment
      post {
        slug
      }
    }
  }
`;

/* 	console.log('Request body:', { name, email, comment, slug }); */


  try {
    const result = await client.request(query, { name, email, comment, slug });
    return NextResponse.json({ message: 'Comment submitted successfully', result });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
  console.error('GraphQL request failed:', error.response || error);
  return NextResponse.json({ error: 'Failed to submit comment' }, { status: 500 });
  }
}

