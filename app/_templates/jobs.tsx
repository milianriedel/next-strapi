'use client'

import { Job, JobsQuery } from '@/app/_graphql/graphql';
import getJobs from '@/app/request/getJobs';
import { useQuery } from '@tanstack/react-query';

export default function Jobs() {
  const {
		data: jobs,
		isLoading,
		isError,
		isFetching,
	} = useQuery<Job[]>({
		queryKey: ['jobs'],
		queryFn: getJobs,
    refetchOnWindowFocus: 'always'
	});


	if (isLoading || isFetching) return <p>Loading…</p>;
	if (isError) return <p>Error</p>;

  console.log(jobs)

  return (
    <div>
      {jobs && jobs?.map((job) => (
        <div key={job?.id}>{job?.attributes?.name}</div>
      ))}
    </div>
  )
}
