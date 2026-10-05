import APId from '$lib/datocms/';
import { formatDateLong, formatDay } from '$lib/globals.mjs';

function transformGigs(gigs) {
	return gigs.map((gig) => {
		let { gigStartDate, performersListJson, promotedName } = gig;

		let startDate = new Date(gigStartDate);

		return {
			formattedTime:
				(startDate.getHours() % 12) +
				':' +
				startDate.getMinutes().toString().padStart(2, '0') +
				(startDate.getHours() >= 12 ? 'pm' : 'am'),
			formattedDate: `${formatDay(startDate)}, ${formatDateLong(startDate)} ${1900 + startDate.getYear()}`,
			performers: performersListJson?.length ? performersListJson.join(', ') : '',
			promotedName
		};
	});
}

async function getGigs() {
	const now = new Date();

	const data = await APId(`{
    allEvents(
      orderBy: [gigStartDate_ASC],
      first: 10, 
      filter: { gigStartDate : { gte: "${new Date(now.setHours(0)).toISOString()}" } }
    ) {
      gigStartDate
      promotedName
      performersListJson
    }
  }`);

	if (!data) {
		return [];
	}

	return transformGigs(data.allEvents);
}

export async function load() {
	const gigs = await getGigs();

	return { gigs };
}
