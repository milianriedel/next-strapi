'use client'

import { Job } from '@/app/_graphql/graphql';
import getJobs from '@/app/request/getJobs';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

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
    <div className='flex flex-col gap-y-2'>
      {jobs && jobs?.map((job) => (
        <Link href={`/${job.id}`} key={job?.id}>{job?.attributes?.name}</Link>
      ))}
    </div>
  )
}
