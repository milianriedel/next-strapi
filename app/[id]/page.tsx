import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';

import { Job as JobType } from '@/app/_graphql/graphql';
import getJob from '@/app/request/getJob';
import Job from '@/app/_templates/job';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
		queryKey: ['job', id],
		queryFn: () => getJob(id),
	});

	const job: JobType | undefined = queryClient.getQueryData(['job', id]);

	const title = job && job?.attributes?.name!;

	return {
		title,
		description: 'A description of the page',
	};
}

export default async function Page({ params }: { params: { id: string } }) {
	const { id } = params;
	const queryClient = new QueryClient();

	await queryClient.prefetchQuery({
		queryKey: ['job', id],
		queryFn: () => getJob(id),
	});

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Job id={id} />
		</HydrationBoundary>
	);
}
