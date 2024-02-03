'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
	Suspense, lazy, useEffect, useState,
} from 'react';

// eslint-disable-next-line import/extensions
const ReactQueryDevtoolsProduction = lazy(() => import('@tanstack/react-query-devtools/build/modern/production.js').then(
	(d) => ({
		default: d.ReactQueryDevtools,
	}),
));

interface TanstackProviderProps {
	children: React.ReactNode,
}

export default function TanstackProvider({ children }: TanstackProviderProps) {
	const [showDevtools, setShowDevtools] = useState<Boolean>(false);

	useEffect(() => {
		// @ts-ignore
		window.toggleDevtools = () => setShowDevtools((old) => !old);
	}, []);

	const [queryClient] = useState(
		() => new QueryClient({
			defaultOptions: {
				queries: {
					staleTime: 60 * 60 * 1000,
				},
			},
		}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools />
			{showDevtools && (
				<Suspense fallback={null}>
					<ReactQueryDevtoolsProduction />
				</Suspense>
			)}
		</QueryClientProvider>
	);
}
