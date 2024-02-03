import { NextResponse } from 'next/server';

import { GraphQLClient } from 'graphql-request';

import { graphql } from '@/app/_graphql';
import { NextApiResponseContext } from '@/app/_types/next-api-response.context';

const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY!;
const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL!;

// eslint-disable-next-line import/prefer-default-export
export async function GET(_req: Request, context: NextApiResponseContext) {
	const { id } = context.params;

	const GET_JOB = graphql(`
		query GetJob($id: ID!) {
			job(id: $id) {
        id
        attributes {
          name
        }
			}
		}
	`);

	try {
		const client = new GraphQLClient(GRAPHQL_API_URL, {
			headers: {
				Authorization: `Bearer ${GRAPHQL_API_KEY}`,
			},
		});
		const response = await client.request(GET_JOB, { id });
		return new NextResponse(JSON.stringify(response.job), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	} catch (error: any) {
		return new NextResponse(JSON.stringify({ message: error.message }), {
			status: 500,
			headers: {
				'Content-Type': 'application/json',
			},
		});
	}
}
