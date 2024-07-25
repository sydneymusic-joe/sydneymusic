import API from '$lib/datocms/';
import { previewMode, formatDate, groupBy, formatDay } from '$lib/globals.mjs';

export async function load({ params }) {
	let data = await API(`query {
		allVenues(filter: { slug: {eq : "${params.id}" } }, first:1 ) {
			venueName
			address
			suburb
			postcode
			url
			slug
			isRip
			capacity
			id
			blurb {
				value
			}
		}
	}`);

	let venueInfo = data.allVenues[0];
	const d = new Date();

	let gigs = await API(`query {
		allVenues(
			first : 1,
			filter : { slug : { eq : "${params.id}"} }
		) {
			_allReferencingEvents(orderBy : [gigStartDate_ASC], first : 100) {
				gigStartDate,
				promotedName,
				performersListJson,
				ticketUrl,
				furtherInfo,
				furtherInfoContributorInitials,
				isFree
			}
		}
	}
	`);

	if (gigs) {
		gigs = gigs.allVenues[0]._allReferencingEvents.map((i) => {
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
	}

	return {
		title : 'Venue Listing',
		venueData: venueInfo,
		eventsFuture: splitAndGroup(gigs, true),
		eventsPast : splitAndGroup(gigs, false)
	};
}

function splitAndGroup(gigs, upcoming) {
	let local = upcoming ? gigs.filter((item) => item.date >= new Date()) : gigs.reverse().filter((item) => item.date <= new Date());
	let byMonth =
		groupBy(
			local,
			(i) => formatDate(i.date)
		);

	// Group by month
	byMonth = byMonth.map((month) => {
		return {
			...month,
			items: groupBy(month.items, (i) => `${i.date.getDate()}:${formatDay(i.date)}`)
		};
	});
	byMonth.childCount = local.length;

	return byMonth;
}