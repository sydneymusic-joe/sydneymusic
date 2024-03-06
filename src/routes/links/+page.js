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

export async function load() {
	let links = await getLinks();

	return {
		links
	};
}
