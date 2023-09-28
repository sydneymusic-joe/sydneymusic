import API from '$lib/contentful/';
import { previewMode, formatDate, groupBy } from '$lib/globals.mjs';

const getReads = async () => {
	const data = await API(`query {
    articlesCollection(
      order: sys_firstPublishedAt_DESC,
      limit: 20,
	  preview : ${previewMode}
      ) {
        items {
          headline
          excerpt
          slug,
          sys {
            firstPublishedAt
          }
        }
      }
    }`);

	if (data) {
		return {
			latest: data.articlesCollection.items.slice(0, 4),
			byMonth: groupBy(data.articlesCollection.items, (i) => formatDate(i.sys.firstPublishedAt))
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
