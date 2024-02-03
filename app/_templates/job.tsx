'use client'

import { Job } from '@/app/_graphql/graphql';
import getJob from '@/app/request/getJob';
import { useQuery } from '@tanstack/react-query';

export default function Job({id}: {id: string}) {
  const {
		data: job,
		isLoading,
		isError,
		isFetching,
	} = useQuery<Job>({
		queryKey: ['job', id],
		queryFn: () => getJob(id),
    refetchOnWindowFocus: 'always'
	});


	if (isLoading || isFetching) return <p>Loading…</p>;
	if (isError) return <p>Error</p>;

  console.log(job)

  return (
    <div>
      {job?.attributes?.name}
    </div>
  )
}
