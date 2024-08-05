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
			id
			_allReferencingEventsMeta {
				count
			}
		}
	}
	`);

	const total = gigs.allVenues[0]._allReferencingEventsMeta.count;
	let q = '';
	let i = 0;
	while (i*100 < total) {
		q += `
			page${i+1}:allEvents(orderBy : [gigStartDate_ASC], skip : ${i*100}, first : 100, filter : { venue : { eq : "${venueInfo.id}"}}) {
				id,
				gigStartDate,
				promotedName,
				performersListJson,
				ticketUrl,
				furtherInfo,
				furtherInfoContributorInitials,
				isFree
			}
		`;
		i++;
	}

	let sourcePages = await API(`query {
		${q}
	}`);

	let combinedGigs = [];
	for (i=0;i<=total%100;i++) {
		const p = sourcePages['page'+(i+1)];
		if (!p || p.length == 0)
			break;
		combinedGigs = combinedGigs.concat(sourcePages['page'+(i+1)]);
	}

	if (combinedGigs.length > 0) {
		combinedGigs = combinedGigs.map((i) => {
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
		eventsFuture: splitAndGroup(combinedGigs, true),
		eventsPast : splitAndGroup(combinedGigs, false)
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