import API from '$lib/contentful/';
import { previewMode, formatDate, groupBy, formatDay } from '$lib/globals.mjs';

export async function load({ params }) {
	let data = await API(`query {
		venuesCollection(where: { slug: "${params.id}" }, limit:1, preview : ${previewMode} ) {
		  items {
			venueName,
			address,
			suburb,
			postcode,
			url,
			slug,
			isRip,
			capacity,
			sys {
				id
			}
		  }
		}
	}`);

	let venueInfo = data.venuesCollection.items[0];
	const d = new Date();

	let gigs = await API(`query {
		venuesCollection(
			limit : 1,
			where : { slug : "${params.id}" }
		) {
			items {
				linkedFrom {
					eventsCollection(order : [gigStartDate_ASC], limit : 1000) {
						total
						items {
							gigStartDate,
							promotedName,
							performersList,
							ticketUrl,
							furtherInfo,
							furtherInfoContributorInitials,
							isFree
						}
					}
				}
			}
		}
	}
	`);

	if (gigs) {
		gigs = gigs.venuesCollection.items[0].linkedFrom.eventsCollection.items.map((i) => {
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