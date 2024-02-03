import { GraphQLClient } from 'graphql-request';

export default function graphQLClient() {
	return new GraphQLClient('https://shark-app-72s48.ondigitalocean.app/graphql', {
		headers: {
			"Authorization": `Bearer 57ae9a2bab31d328cbe7fbc15582caf6631a7b172f86f15424953dc1b34a5e1eceacb1634144714e6fd417b62601141a575ab87a9873cb84bae88e3815c71c8fde7e402fb23c70ba960909a107f440a30a778fcb3a657739b72a2a9deccc9b2d28d1249831c8e2a7e39c5ac430d2683213c0b62c54ec354c66cb2bfdeed09c1c`,
		},
	});
}
