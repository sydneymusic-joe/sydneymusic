import API from '$lib/contentful/';
import { formatDate, formatDateLong, groupBy, formatDay } from '$lib/globals.mjs';

const getLastUpdated = async () => {
	const data = await API(`{
		eventsCollection(
			order: sys_publishedAt_DESC,
			limit : 1
			) {
				items {
					sys {
						publishedAt
					}
				}
			}
	}
	`);

	if (data) {
		return data.eventsCollection.items[0].sys.publishedAt;
	}

	return null;
}

const getGigs = async () => {
	const d = new Date();

	const data = await API(`{
      eventsCollection(
        order: gigStartDate_ASC,
        limit: 1000, 
        where: { gigStartDate_gte: "${new Date(d.setHours(0)).toISOString()}" }
      ) {
        items {
          gigStartDate
          promotedName
          ticketUrl
          performersList
          furtherInfo
          furtherInfoContributorInitials
		  isFree
          venue {
            venueName
            address
            suburb
            url,
			slug
          }
        }
      }
    }`);

	if (data) {
		let event = data.eventsCollection.items.map((i) => {
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
	let lastUpdated = new Date(await getLastUpdated());

	lastUpdated = `${lastUpdated.getDate()} ${formatDate(lastUpdated)} @ ${lastUpdated.toTimeString().substring(0, 5)}`;

	return {
		gigs,
		lastUpdated
	};
}
