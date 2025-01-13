import APId from '$lib/datocms/';
import { formatDate, formatDateLong, groupBy, formatDay } from '$lib/globals.mjs';

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

	if (data) {
		return data.allEvents[0]._publishedAt;
	}

	return null;
};

const getGigs = async () => {
	const d = new Date();

	const pagesize = 100;
	let iter = 0;
	let ret = 100;

	let data = [];
	let query = '';
	while (iter < 10) {
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

	for (iter = 1; iter < 11; iter++) {
		const p = page['page' + iter];
		if (p.length == 0) break;

		data = data.concat(p);
	}
	ret = data.length;

	if (data) {
		let event = data.map((i) => {
			let { gigStartDate, ...rest } = i;
			let d = new Date(gigStartDate);
			let hours = d.getHours() != 12 ? d.getHours() % 12 : 12;
			return {
				date: d,
				time:
					hours +
					':' +
					d.getMinutes().toString().padStart(2, '0') +
					(d.getHours() >= 12 ? 'pm' : 'am'),
				...rest
			};
		});

		let byMonth = groupBy(event, (i) => formatDate(i.date));

		// Group by month
		return byMonth.map((month) => {
			return {
				...month,
				items: groupBy(month.items, (i) => `${i.date.getDate()}:${formatDay(i.date)}`)
			};
		});
	}
	return {};
};

export async function load() {
	let gigs = await getGigs();
	let lastUpdated = new Date(await getLastUpdated());

	lastUpdated = `${lastUpdated.getDate()} ${formatDate(lastUpdated)} @ ${lastUpdated
		.toTimeString()
		.substring(0, 5)}`;

	return {
		gigs,
		lastUpdated
	};
}
