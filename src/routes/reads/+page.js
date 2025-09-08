import API from '$lib/datocms/';
import { previewMode, formatDate, groupBy } from '$lib/globals.mjs';

const getReads = async () => {
	const data = await API(`query {
    allArticles(
      orderBy: _firstPublishedAt_DESC,
      first: 100
      ) {
          headline
          excerpt
          slug,
          _firstPublishedAt
      }
    }`);

	if (data) {
		return {
			latest: data.allArticles.slice(0, 4),
			byMonth: groupBy(data.allArticles, (i) => formatDate(i._firstPublishedAt))
		};
	}
	return {};
};

export async function load() {
	let reads = await getReads();

	return {
		reads
	};
}
