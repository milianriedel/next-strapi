import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

import { JobFilter } from '@/app/_types/job-filter';

export type JobFilterState = Omit<JobFilter, 'active' | 'start' | 'limit'> & {
	step: number | null;
};

const initialState: JobFilterState = {
	grades: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('grades') || 'null') : null,
	jobTypes: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('jobTypes') || 'null') : null,
	regions: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('regions') || 'null') : null,
	subjects: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('subjects') || 'null') : null,
	workingHours: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('workingHours') || 'null') : null,
	step: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('step') || 'null') : null,
};

const jobFilterSlice = createSlice({
	name: 'jobFilter',
	initialState,
	reducers: {
		setWorkingHours(state, action: PayloadAction<string[] | null>) {
			const draft = state as Draft<typeof state>;
			draft.workingHours = action.payload;
			localStorage.setItem('workingHours', JSON.stringify(draft.workingHours));
		},
		setRegions(state, action: PayloadAction<string[] | null>) {
			const draft = state as Draft<typeof state>;
			draft.regions = action.payload;
			localStorage.setItem('regions', JSON.stringify(draft.regions));
		},
		setSubjects(state, action: PayloadAction<string[] | null>) {
			const draft = state as Draft<typeof state>;
			draft.subjects = action.payload;
			localStorage.setItem('subjects', JSON.stringify(draft.subjects));
		},
		setGrades(state, action: PayloadAction<string[] | null>) {
			const draft = state as Draft<typeof state>;
			draft.grades = action.payload;
			localStorage.setItem('grades', JSON.stringify(draft.grades));
		},
		setJobTypes(state, action: PayloadAction<string[] | null>) {
			const draft = state as Draft<typeof state>;
			draft.jobTypes = action.payload;
			localStorage.setItem('jobTypes', JSON.stringify(draft.jobTypes));
		},
		setStep(state, action: PayloadAction<number | null>) {
			const draft = state as Draft<typeof state>;
			draft.step = action.payload;
			localStorage.setItem('step', JSON.stringify(draft.step));
		},
	},
});

export const {
	setWorkingHours,
	setRegions,
	setSubjects,
	setGrades,
	setJobTypes,
	setStep,
} = jobFilterSlice.actions;

export default jobFilterSlice.reducer;
