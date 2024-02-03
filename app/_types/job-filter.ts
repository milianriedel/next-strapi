export interface JobFilter {
	workingHours: string[] | null,
	regions: string[] | null,
	subjects: string[] | null,
	grades: string[] | null,
	jobTypes: string[] | null
	start: number,
	limit: number,
}
