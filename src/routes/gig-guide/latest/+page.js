import APId from '$lib/datocms/';
import { formatDate, groupBy, formatDay } from '$lib/globals.mjs';

const getGigs = async () => {
	const d = new Date();

	const data = await APId(`{
		allEvents(
		  orderBy: [_publishedAt_DESC],
		  first: 50, 
		  filter: { gigStartDate : { gte: "${new Date(d.setHours(0)).toISOString()}" } }
		) {
			gigStartDate
			promotedName
			ticketUrl
			performersListJson
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
			_publishedAt
			_firstPublishedAt
		}
	  }`);

	if (data) {
		let event = data.allEvents.map((i) => {
			let { gigStartDate, ...rest } = i;

			let dU = new Date(i._publishedAt);
			let d = new Date(gigStartDate);
			return {
				updatedNice: `${dU.toTimeString().substring(0, 5)} on ${dU.getDate()} ${formatDate(dU)}`,
				isNew: i._publishedAt == i._firstPublishedAt,
				date: d,
				time:
					(d.getHours() % 12) +
					':' +
					d.getMinutes().toString().padStart(2, '0') +
					(d.getHours() >= 12 ? 'pm' : 'am'),
				...rest
			};
		});

		return event;
	}
	return {};
};

export async function load() {
	let gigs = await getGigs();

	return {
		gigs
	};
}
