import {  QueryClient, QueryFunction, QueryKey } from '@tanstack/react-query';

export default async function prefetchQuery(
	queryKey: QueryKey,
	queryFn: QueryFunction,
) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey,
    queryFn,
  });
}
