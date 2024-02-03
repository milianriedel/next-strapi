import { NextApiResponse } from 'next';

export interface NextApiResponseContext extends NextApiResponse {
	params: {
		id: string
	}
}
