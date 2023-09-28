import API from '$lib/contentful/';
import { groupBy } from '../../lib/globals.mjs';

const getLinks = async () => {
	const data = await API(`{
          linkCollection(
            order: [category_ASC, title_ASC]
          ) {
            items {
              title
              url
              description,
              category
            }
          }
        }`);

	if (data) {
		let byCategory = groupBy(data.linkCollection.items, ({ category }) => category);

		return byCategory;
	}

	return {};
};

const getVenues = async () => {
	const dataLinks = await API(`{
			venuesCollection(
				order : [suburb_ASC, venueName_ASC]
			) {
				items {
					venueName,
					suburb,
					url
				}
			}
		}`);

	if (dataLinks) {
		let bySuburb = groupBy(dataLinks.venuesCollection.items, ({ suburb }) => suburb);
		return bySuburb;
	}
};

export async function load() {
	let links = await getLinks();
	let venues = await getVenues();

	return {
		links,
		venues
	};
}
