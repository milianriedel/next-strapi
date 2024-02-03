import { NextResponse } from 'next/server';

import graphQLClient from '@/app/_graphql/graphql-client';
import { graphql } from '@/app/_graphql';

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
		const client = graphQLClient();
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
