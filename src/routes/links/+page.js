import APId from '$lib/datocms/';
import { groupBy } from '../../lib/globals.mjs';

const getLinks = async () => {
	const pagesize = 100;
	let iter = 0;
	let ret = 100;

	let data = [];
	let query = '';
	while (iter < 10) {
		query += `
		page${iter + 1}:allLinks(
            orderBy: [category_ASC, title_ASC],
			first: ${pagesize},
			skip:${iter * pagesize}
          ) {
            title
            url
            description,
            category
          }
		`;

		iter++;
	}

	const page = await APId(`{
		${query}
	}`);

	for (iter = 1; iter < 11; iter++) {
		const p = page['page' + iter];
		if (p.length == 0) break;

		data = data.concat(p);
	}
	ret = data.length;

	if (data) {
		let byCategory = groupBy(data, ({ category }) => category);

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
