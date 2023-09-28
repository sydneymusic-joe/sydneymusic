import API from '$lib/contentful/';
import { formatDate, groupBy, formatDay } from '$lib/globals.mjs';

const getGigs = async () => {
  const d = new Date();

  const data = await API(`{
      eventsCollection(
        order: gigStartDate_ASC,
        limit: 1000, 
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
            url
          }
        }
      }
    }`);

  if (data) {
    let event = data.eventsCollection.items.map((i) => {
      let { gigStartDate, ...rest } = i;
      let d = new Date(gigStartDate);
      return {
        date: d,
        time:
          (d.getHours() % 12) +
          ':' +
          d.getMinutes().toString().padStart(2, '0') +
          (d.getHours() >= 12 ? 'pm' : 'am'),
        ...rest
      };
    });

    let byMonth = groupBy(event, (i) => formatDate(i.date));

    // Group by month
    return byMonth.map((month) => {
      return {
        ...month,
        items: groupBy(month.items, (i) => `${i.date.getDate()}:${formatDay(i.date)}`)
      };
    });
  }
  return {};
};

export async function load() {
  let gigs = await getGigs();

  return {
    gigs
  };
}
