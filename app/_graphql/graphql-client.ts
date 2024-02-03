import { GraphQLClient } from 'graphql-request';

const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL!;

const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY!;

export default function graphQLClient(token: string = GRAPHQL_API_KEY) {
	return new GraphQLClient(GRAPHQL_API_URL, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}
