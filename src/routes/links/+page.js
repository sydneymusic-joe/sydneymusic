import APId from '$lib/datocms/';
import { groupBy } from '../../lib/globals.mjs';

const getLinks = async () => {
	const data = await APId(`{
          allLinks(
            orderBy: [category_ASC, title_ASC]
          ) {
            title
            url
            description,
            category
          }
        }`);

	if (data) {
		let byCategory = groupBy(data.allLinks, ({ category }) => category);

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
