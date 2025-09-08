/** @type {import('./$types').EntryGenerator} */
import APId from '$lib/datocms/';

const getReads = async () => {
	const data = await APId(`query {
		allArticles(orderBy: _firstPublishedAt_DESC, first: 4) {
			headline
			excerpt
			slug,
			_firstPublishedAt
		  }
		}`);
	if (data) {
		return data.allArticles;
	}
	return {};
};

export function entries() {
	return [
		{ amount: '2' },
		{ amount: '5' },
		{ amount: '10' },
		{ amount: '15' },
		{ amount: '50' },
		{ amount: '100' },
		{ amount: '200' },
		{ amount: '500' },
		{ amount: '1000' }
	];
}

export async function load() {
	let reads = await getReads();

	return {
		title: 'Thanks you for your donation!',
		reads,
	};
}
