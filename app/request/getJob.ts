export default async function getJob(id: string) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_APP_URL}/api/jobs/${id}`,
	);

	if (!response.ok) {
		throw new Error('Network response was not ok (getJobsData).');
	}

	return response.json();
}
