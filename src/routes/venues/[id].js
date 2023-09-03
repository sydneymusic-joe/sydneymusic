import API from "$lib/contentful/" 
import { previewMode, formatDateLong } from '$lib/globals.mjs';

export async function get({ params }) {
	let data=false;
	let gigs = null

	try {
		const d = new Date();

		data = await API(`query {
			venuesCollection(
				limit : 1,
				where : { slug : "${params.id}" }
			) {
				items {
					venueName,
					address,
					suburb,
					postcode,
					url,
					isRip,
					sys {
						id
					},
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
	} catch (e) {
		console.log(e);

		return {
			status: 404
		};
	}

	if (data){
		gigs = data.venuesCollection.items[0].linkedFrom.eventsCollection.items.map((i) => {
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
