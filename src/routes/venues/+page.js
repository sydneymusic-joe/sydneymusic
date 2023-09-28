import API from '$lib/contentful/';
import { groupBy } from '../../lib/globals.mjs';

const getVenues = async () => {
	const dataLinks = await API(`{
		venuesCollection(
			order : [suburb_ASC, venueName_ASC],
			limit : 1000
		) {
			items {
				venueName,
				suburb,
				slug,
				isRip,
				linkedFrom {
					eventsCollection(limit : 1) { 
						total
					}
				}
			}
		}
	}`);

	if (dataLinks) {
		let bySuburb = groupBy(dataLinks.venuesCollection.items, ({ suburb }) => suburb);
		return bySuburb;
	}
};

export async function load() {
	let venues = await getVenues();

	return {
		venues
	};
}