export default async function getJobs() {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_APP_URL}/api/jobs`,
	);

	if (!response.ok) {
		throw new Error('Network response was not ok (getJobsData).');
	}

	return response.json();
}
