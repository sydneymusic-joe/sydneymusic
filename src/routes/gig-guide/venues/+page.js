import API from '$lib/contentful/';
import APId from '$lib/datocms/';
import { groupBy } from '../../../lib/globals.mjs';

const getVenues = async () => {
	const pagesize=100;
	let iter=0;
	let ret = 100;

	let data = null;
	while (ret == 100) {
		const dataLinks = await APId(`{
			allVenues(
				filter : { hideFromDirectory : {eq : false}, suburb : {isPresent : true} },
				orderBy : [suburb_ASC, venueName_ASC],
				first : ${pagesize},
				skip : ${pagesize*iter}
			) {
				venueName,
				suburb,
				slug,
				isRip,
				_allReferencingEventsMeta { 
					count
				}
			}
		}`);
		ret = dataLinks.allVenues.length;
		iter++;

		if (data) {
			data.allVenues = data.allVenues.concat(dataLinks.allVenues);
			continue;
		}

		data = dataLinks;
	}

	if (data) {
		let bySuburb = groupBy(data.allVenues, ({ suburb }) => suburb);
		return bySuburb;
	}
};

export async function load() {
	let venues = await getVenues();

	return {
		venues
	};
}