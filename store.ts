import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import filterReducer, { JobFilterState } from '@/app/_slices/filter-slice';

export interface RootState {
	filter: JobFilterState,
}

const store = configureStore({
	reducer: {
		filter: filterReducer,
	},
	devTools: process.env.NODE_ENV !== 'production',
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
