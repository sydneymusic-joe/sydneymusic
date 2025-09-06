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

export async function load() {
	let reads = await getReads();

	return {
		title: 'Thanks you for your donation!',
		reads,
	};
}
