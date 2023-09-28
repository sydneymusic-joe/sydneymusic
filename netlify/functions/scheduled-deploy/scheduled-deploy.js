const { schedule } = require('@netlify/functions');
const fetch = require('node-fetch');

const REBUILD_URL = process.env.BUILD_TRIGGER_URL;

// To learn about scheduled functions and supported cron extensions,
// see: https://ntl.fyi/sched-func
module.exports.handler = schedule('10 14-15 * * *', async (event) => {
	if (event.body) {
		const eventBody = JSON.parse(event.body);
		console.log(`Next function run at ${eventBody.next_run}.`);
	}

	await fetch(REBUILD_URL, { method: 'POST' });

	return {
		statusCode: 200
	};
});
