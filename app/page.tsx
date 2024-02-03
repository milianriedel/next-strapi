import { Job } from '@/app/_graphql/graphql';
import Jobs from '@/app/_templates/jobs';
import getJobs from '@/app/request/getJobs';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Pracovní pozice',
	description: '',
};

export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['jobs'],
    queryFn: getJobs,
  })

  const jobs: Job[] | undefined = queryClient.getQueryData([`jobs`]);

  console.log(`Page ${jobs}`);

  metadata.title = 'asdsad'

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Jobs />
      </main>
    </HydrationBoundary>
  );
}
