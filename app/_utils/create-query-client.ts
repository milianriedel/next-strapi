import { QueryClient } from '@tanstack/react-query';

const createQueryClient = () => new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 60 * 60 * 1000,
		},
	},
});

export default createQueryClient;
