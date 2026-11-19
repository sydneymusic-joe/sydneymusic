export const csr = true;

import APId from '#lib/datocms/index.js';
import { formatDate, formatDateLong, groupBy, formatDay } from '#lib/globals.mjs';
import { mds } from '../../lib/donorstats.js';

function formatLastUpdated(date) {
	let lastUpdated = new Date(date);
	return `${lastUpdated.getDate()} ${formatDate(lastUpdated)} @ ${lastUpdated
		.toTimeString()
		.substring(0, 5)}`;
}
function formatLocaleDateString(date) {
	return new Date(date).toLocaleDateString('en-AU', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

// These are the keywords used to match user input
function getEventKeywords(event) {
	if (!event) return '';
	return [
		event.promotedName ?? '',
		(event.performersListJson ?? []).length ? event.performersListJson.join(' ') : '',
		event.venue.venueName ?? '',
		event.venue.suburb ?? '',
		!!event.isFree ? 'free' : '',
		!!event.isPwyc ? 'pwyc' : '',
		formatLocaleDateString(event.date)
	]
		.join(' ')
		.trim();
}

const getLastUpdated = async () => {
	const data = await APId(`{
		allEvents(
			orderBy: [_publishedAt_DESC],
			first : 1
			) {
				_publishedAt
			}
		}
	`);

	if (!data) return null;
	return data.allEvents[0]._publishedAt;
};

const getGigs = async () => {
	const d = new Date();

	const pagesize = 400;
	let iter = 0;

	let data = [];
	let query = '';
	while (iter < 5) {
		query += `
		page${iter + 1}:allEvents(
			orderBy: [gigStartDate_ASC],
			first: ${pagesize},
			skip:${iter * pagesize}
			filter: { gigStartDate : {gte: "${new Date(d.setHours(0)).toISOString()}" }}
		) {
			id
			gigStartDate
			promotedName
			ticketUrl
			performersListJson
			furtherInfo
			furtherInfoContributorInitials
			isFree
			isPwyc
			venue {
				venueName
				address
				suburb
				url,
				slug
			}
		}
		`;

		iter++;
	}

	const page = await APId(`{
		${query}
	}`);

	for (iter = 1; iter < 6; iter++) {
		const p = page['page' + iter];
		if (p.length == 0) break;

		data = data.concat(p);
	}

	let gigs = data.map((event) => {
		const date = new Date(event.gigStartDate);
		const localeDateString = formatLocaleDateString(date);
		const time = date.toLocaleTimeString('en-AU', { timeStyle: 'short' });
		const keywords = [
			localeDateString,
			event.promotedName ?? '',
			(event.performersListJson ?? []).length ? event.performersListJson.join(' ') : '',
			event.venue.venueName ?? '',
			event.venue.suburb ?? '',
			!!event.isFree ? 'free' : '',
			!!event.isPwyc ? 'pwyc' : ''
		]
			.join(' ')
			.trim();

		return {
			date,
			time,
			keywords,
			localeDateString,
			...event
		};
	});
	return { totalCount: gigs.length, items: groupBy(gigs, (g) => g.localeDateString) };
};

export async function load() {
	return {
		gigs: await getGigs(),
		lastUpdated: formatLastUpdated(await getLastUpdated()),
		mds
	};
}
