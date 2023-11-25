import API from '$lib/contentful/';
import { formatDate, groupBy, formatDay } from '$lib/globals.mjs';

const getGigs = async () => {
	const d = new Date();

	let fullSet = null;
	let ret = 1000;
	let iter = 0;
	while (ret == 1000) {
		console.log(`{
			eventsCollection(
				order: gigStartDate_DESC,
				limit: 1000, 
				skip:${iter*1000},
				where: { gigStartDate_lt: "${new Date(d.setHours(0)).toISOString()}" }
			) {
				items {
				gigStartDate
				promotedName
				ticketUrl
				performersList
				furtherInfo
				furtherInfoContributorInitials
				venue {
					venueName
					address
					suburb
					url
				}
				}
			}
			}`);
		const data = await API(`{
		eventsCollection(
			order: gigStartDate_DESC,
			limit: 1000, 
			skip:${iter*1000},
			where: { gigStartDate_lt: "${new Date(d.setHours(0)).toISOString()}" }
		) {
			items {
			gigStartDate
			promotedName
			ticketUrl
			performersList
			furtherInfo
			furtherInfoContributorInitials
			venue {
				venueName
				address
				suburb
				url
			}
			}
		}
		}`);

		console.log(iter);
		iter++;
		ret = data.eventsCollection.items.length;
		console.log(ret);

		if (fullSet) {
			fullSet.eventsCollection.items = fullSet.eventsCollection.items.concat(data.eventsCollection.items);
			continue;
		}

		fullSet = data;
	}

	if (fullSet) {
		let event = fullSet.eventsCollection.items.map((i) => {
			let { gigStartDate, ...rest } = i;
			let d = new Date(gigStartDate);
			return {
				date: d,
				time:
					(d.getHours() % 12) +
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

	return {
		gigs
	};
}
