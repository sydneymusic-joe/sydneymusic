import API from "$lib/contentful/" 
import { previewMode, formatDateLong } from '$lib/globals.mjs';


export async function get({ params }) {
    data = await API(`query {
		venuesCollection(where: { slug: "${params.id}" }, limit:1, preview : ${previewMode} ) {
		  items {
			venueName,
			address,
			suburb,
			postcode,
			url,
			isRip,
			sys {
				id
			}
		  }
		}
	}`)

	venueInfo = data.venuesCollection.items[0];
	const d = new Date();

	/*gigs = await API(`query {
		eventsCollection(
			limit : 50,
			order : [gigStartDate_ASC],
			where : {gigStartDate_gte : "${new Date(d.setHours(0)).toISOString()}"},
			preview : ${previewMode}
			) {
				items {
					gigStartDate,
					promotedName,
					performersList,
					venue(where: {slug : "the-oxford-tavern"}) {
						slug
					},
					ticketUrl,
					furtherInfo,
					furtherInfoContributorInitials,
					isFree
				}
			}
		}`)
		*/
	gigs = await API(`query {
		venuesCollection(
			limit : 1,
			where : { slug : "${params.id}" }
		) {
			items {
				linkedFrom {
					eventsCollection {
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
	`)

	if (gigs){
		gigs = gigs.venuesCollection.items[0].linkedFrom.eventsCollection.items.map((i) => {
			let { gigStartDate, ...rest } = i;
			let d = new Date(gigStartDate);
			return {
				date: d,
				time:(d.getHours() % 12) + ":" + d.getMinutes().toString().padStart(2, "0") + (d.getHours() >= 12 ? "pm" : "am"),
				...rest
			};
		});
	}

	return {
		body: {
			venueData : data.venuesCollection.items[0],
			events : gigs
		}
	}
}
