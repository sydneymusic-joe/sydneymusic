import dotenv from 'dotenv';
dotenv.config();

import { formatDate, groupBy, formatDay, createCalendarLink } from '../src/lib/globals.mjs';

import { GraphQLClient, gql } from 'graphql-request';

export const client = new GraphQLClient(
	`https://graphql.datocms.com/`,
	{
		headers: {
			authorization: `Bearer ${process.env.VITE_DATOCMS_TOKEN}`
		}
	}
);

const getGigs = async () => {
	const d = new Date();

    const dateFrom = new Date("2024-08-15T00:00:00+1000");
    const dateTo = new Date("2024-08-22T00:00:00+1000");

	let data = await client.request(gql`{
        getCount : _allEventsMeta(filter: {
        gigStartDate : { gte : "${dateFrom.toISOString()}", lt : "${dateTo.toISOString()}" }
    }) {
        count
    }}`);

    const total = data.getCount.count;

    let allEvents = [];
    let idx = 0;
    while (idx < Math.ceil(total/100)) {
        data = await client.request(gql`{allEvents(
            orderBy: gigStartDate_ASC,
            skip:${idx*100},
            first: 100, 
            filter: {
                gigStartDate : { gte : "${dateFrom.toISOString()}", lt : "${dateTo.toISOString()}" }
            }
        ) {
            gigStartDate
            promotedName
            ticketUrl
            performersListJson
            furtherInfo
            furtherInfoContributorInitials
            venue {
                venueName
                address
                suburb
                url,
                slug
            }
        }
        }
        `);

        allEvents = allEvents.concat(data.allEvents);
        idx++;
    }

	if (allEvents.length > 0) {
		let event = allEvents.map((i) => {
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
	return [];
};

async function main() {
	let gigs = await getGigs();

	var template = '';
	for (const month of gigs) {
		template += `<tr class="month"><td colspan="2">${month.label}</td></tr>`;
		for (const day of month.items) {
			template += `
            <tr class="day">
                <td valign="top" align="center" width="80" class="daylabel"><strong style="text-transform : uppercase;" class="ruby">${
									day.label.split(':')[1]
								}</strong><br /><font style="font-size : 36px; font-weight : bold">${
				day.label.split(':')[0]
			}</font></td>
                <td>
                    <table border="0" cellspacing="0" cellpadding="0" class="giglist">`;

			for (const gig of day.items) {
				template += `<tr>
                    <td style="">
                        <div class="headliner">${gig.promotedName || gig.performersListJson[0]}</div>`;
				if (gig.performersListJson != null && gig.performersListJson.length > 0) {
					template += `<strong>w/ ${gig.performersListJson.join(', ')}</strong><br />`;
				}
				template += `${gig.time} &nbsp;| &nbsp;<a href="https://sydneymusic.net/gig-guide/venues/${gig.venue.slug}">${gig.venue.venueName}</a>`;
				if (gig.furtherInfo) {
					template += `<div class="blurb">${gig.furtherInfo} &mdash; ${
						gig.furtherInfoContributorInitials ? gig.furtherInfoContributorInitials : 'SMn'
					}</div>`;
				}
				template += `</td>
                </tr>`;
			}
			template += `</table>
            </td>
        </tr>`;
		}
	}

	template = `
    <!DOCTYPE html><html>
    <head>
        <meta charset="utf-8" />
        <style>
            body { background : white; color : black; font-family : "IBM Plex Sans Condensed", Helvetica, Arial, sans-serif; font-size : 14px; }
            .maintable tr td { padding-left : 20px; padding-right : 20px; }
            .maintable tr tr td { padding-left : 0px; padding-right : 0px; }
            .preamble p { margin-top : 12px; line-height : 150% }
            .ruby { color : #e02020 }
            .graphite { color : #6d7278 }
            tr.month td { border-bottom : solid 1px black; padding-bottom : 2px; text-transform : uppercase; font-weight : bold; }
            tr.day td { padding-top : 20px }
            .giglist tr td { font-size : 13px; padding-top : 0; padding-bottom : 16px; text-transform : uppercase;  }
            .giglist tr td div.headliner { font-size : 16px; font-weight : bold; font-style : italic }
            h1 { margin-top : 20px; font-size : 26px; text-transform : uppercase; font-weight : bold; font-style : italic; }
            a { color : #6d7278}
            .nav td { font-size : 13px; padding-bottom : 20px; }
            .preamble { border-width : 1px 0px 1px 0px; border-color : #666; border-style : solid; padding-bottom : 20px; }
            .preamble li { margin-bottom : 10px; line-height : 150%; }
            .blurb { font-size : 12px; font-style : italic; margin-top : 5px; text-transform : none; }
        </style>
    </head>
    <body>
    <p style="font-size : 12px; text-align : center; margin-bottom : 20px">Welcome to the SydneyMusic.net gig guide newsletter!<br />Want to get this in your inbox every week? <a href="https://sydneymusic.us17.list-manage.com/subscribe?u=33fe15202bc9075111c10636a&id=08cf9e0f0b">You can subscribe over here.</a></p>
    <table align="center" style="max-width : 550px" class="maintable">
        <tr>
            <td align="center">
                <img src="https://downloads.sydneymusic.net/lockup_1.png" vspace="20" height="100" />
            </td>
        </tr>
        <tr class="nav">
            <td align="center">
                <a href="https://sydneymusic.net">go to sydneymusic.net</a> • <a href="https://sydneymusic.net/gig-guide">gig guide</a> • <a href="https://sydneymusic.net/gig-guide/venues">venue directory</a> • <a href="https://sydneymusic.net/reads">reads</a> • <a href="https://sydneymusic.net/links">links</a>
            </td>
        </tr>
        <tr>
            <td class="preamble">
            </td>
        </tr>
        <tr>
            <td>
                <h1>Gigs This Week</h1>

                <p>Don't forget nearly all of these bands can be found in the <a href="https://sydneymusic.net/playlist">Gig Guide Playlist</a>.</p><p>You can also view more information about the shows and links to ticket sales via the <a href="https://sydneymusic.net/gig-guide">gig guide</a> on our website.</p>

                <table border="0" cellspacing="0" cellpadding="0">
                   ${template}
                </table>
            </td>
        </tr>
    </table>
</body></html>`;

	console.log(template);
}

main().catch(console.error);
