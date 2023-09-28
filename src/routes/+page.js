import API from '$lib/contentful/';
import { previewMode, groupBy, formatDayOfWeek, formatDateLong } from '$lib/globals.mjs';

const getGigs = async () => {
	// ToDo: We're doing this in the or server's local timezone.
	// Is this okay? (I think it's okay, but I'm not sure)
	const n = new Date();
	n.setHours(0, 0, 0, 0); // Start of Day
	const d = new Date();
	d.setDate(d.getDate() + 6); // 1 week
	d.setHours(23, 59, 59, 999); // End of day
	const data = await API(`{
      eventsCollection(
        order: [gigStartDate_ASC sys_firstPublishedAt_ASC], 
        limit: 50,
        where: { 
          gigStartDate_gte: "${n.toISOString()}"
          gigStartDate_lte: "${d.toISOString()}"
        },
        preview:${previewMode}
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
            url
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
				// Collapse performers into an array of names
				...rest
			};
		});

		let byDay = groupBy(event, ({ date }) => `${formatDayOfWeek(date)}:${formatDateLong(date)}`);

		return byDay;
	}
	return {};
};

const getReads = async () => {
	const data = await API(`query {
      articlesCollection(order: sys_firstPublishedAt_DESC, limit: 4, preview:${previewMode}) {
          items {
            headline
            excerpt
            slug,
            sys {
              firstPublishedAt
            }
          }
        }
      }`);

	if (data) {
		return data.articlesCollection.items;
	}
	return {};
};

export async function load() {
	console.log('here');
	let reads = await getReads();
	let gigs = await getGigs();

	return {
		title: 'Welcome',
		reads,
		gigs
	};
}
