import { schedule } from '@netlify/functions';
import fetch from 'node-fetch';

const REBUILD_URL = process.env.BUILD_TRIGGER_URL;

// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func
export const handler = schedule('10 14-15 * * *', async (event) => {
	if (event.body) {
		const eventBody = JSON.parse(event.body);
		console.log(`Next function run at ${eventBody.next_run}.`);
	}

	if (!REBUILD_URL) {
		console.error('BUILD_TRIGGER_URL is not configured.');
		return {
			statusCode: 500,
			body: 'BUILD_TRIGGER_URL is not configured.'
		};
	}

	await fetch(REBUILD_URL, { method: 'POST' });

	return {
		statusCode: 200
	};
});
