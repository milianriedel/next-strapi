import { Job } from '@/app/_graphql/graphql';
import Jobs from '@/app/_templates/jobs';
import getJobs from '@/app/request/getJobs';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

export async function metadata() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['jobs'],
    queryFn: getJobs,
  });

  const jobs: Job[] | undefined = queryClient.getQueryData(['jobs']);

  const title = jobs && jobs.length > 0 ? jobs[0].attributes?.name : 'Pracovní pozice';

  return {
    title,
    description: 'A description of the page',
  };
}

export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['jobs'],
    queryFn: getJobs,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Jobs />
    </HydrationBoundary>
  );
}
