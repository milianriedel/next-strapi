import { NextResponse } from 'next/server';

import graphQLClient from '@/app/_graphql/graphql-client';
import { graphql } from '@/app/_graphql';
import { GraphQLClient } from 'graphql-request';

const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY!;
const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL!;

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
	const GET_JOBS = graphql(`
		query jobs {
			jobs {
        data {
          id
          attributes {
            name
          }
        }
      }
		}
	`);

	try {
		const client = new GraphQLClient(GRAPHQL_API_URL, {
      headers: {
        Authorization: `Bearer ${GRAPHQL_API_KEY}`,
      }
    })
		const response = await client.request(GET_JOBS);
		return new NextResponse(JSON.stringify(response.jobs?.data), {
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
