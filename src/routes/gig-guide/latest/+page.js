import API from '$lib/contentful/';
import { formatDate, groupBy, formatDay } from '$lib/globals.mjs';

const getGigs = async () => {
	const d = new Date();

	const data = await API(`{
		eventsCollection(
		  order: sys_publishedAt_DESC,
		  limit: 50, 
		  where: { gigStartDate_gte: "${new Date(d.setHours(0)).toISOString()}" }
		) {
		  items {
			gigStartDate
			promotedName
			ticketUrl
			performersList
			furtherInfo
			furtherInfoContributorInitials
			isFree
			venue {
			  venueName
			  address
			  suburb
			  url,
			  slug
			}
			sys {
				publishedAt
				firstPublishedAt
			}
		  }
		}
	  }`);
  
	  if (data) {
		  let event = data.eventsCollection.items.map((i) => {
			  let { gigStartDate, sys, ...rest } = i;

			  let dU = new Date(sys.publishedAt);
			  let d = new Date(gigStartDate);
			  return {
				  updatedNice : `${dU.toTimeString().substring(0, 5)} on ${dU.getDate()} ${formatDate(dU)}`,
				  isNew : sys.publishedAt == sys.firstPublishedAt,
				  date: d,
				  time:
					  (d.getHours() % 12) +
					  ':' +
					  d.getMinutes().toString().padStart(2, '0') +
					  (d.getHours() >= 12 ? 'pm' : 'am'),
				  ...rest
			  };
		  });
  
		  return event;
	  }
	  return {};
};

export async function load() {
	let gigs = await getGigs();

	return {
		gigs
	};
}
