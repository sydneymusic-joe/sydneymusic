import { formatDate, groupBy, formatDay, createCalendarLink } from '../../../src/lib/globals.mjs';
import { GraphQLClient, gql } from 'graphql-request';
import {marked} from 'marked';

export default async (req, context) => {
    let ret = await generate();
    return new Response(ret, {
        headers: { "content-type": "text/html"},
      });
};

export const client = new GraphQLClient(`https://graphql.datocms.com/`, {
	headers: {
		authorization: `Bearer ${Netlify.env.get("VITE_DATOCMS_TOKEN")}`
	}
});

const getGigs = async () => {
	const d = new Date();

	const dateFrom = new Date();
	const dateTo = new Date();
    dateTo.setDate(dateFrom.getDate() + 7);

	let data = await client.request(gql`{
        getCount : _allEventsMeta(filter: {
        gigStartDate : { gte : "${dateFrom.toISOString()}", lt : "${dateTo.toISOString()}" }
    }) {
        count
    }}`);

	const total = data.getCount.count;

	let allEvents = [];
	let idx = 0;
	while (idx < Math.ceil(total / 100)) {
		data = await client.request(gql`{allEvents(
            orderBy: gigStartDate_ASC,
            skip:${idx * 100},
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
				time: d.toLocaleTimeString('en-AU', {
					timeZone: 'Australia/Sydney',
					hour12: true,
					timeStyle: 'short'
				}),
				...rest
			};
		});

		let byMonth = groupBy(event, (i) => formatDate(i.date));

		// Group by month
		return { 'total' : total, 'gigs' : byMonth.map((month) => {
			return {
				...month,
				items: groupBy(month.items, (i) => `${i.date.getDate()}:${formatDay(i.date)}`)
			};
		})};
	}
	return [];
};

async function generate() {
	const obj = await getGigs();
    const total = obj.total;
    const gigs = obj.gigs;

    let content = await client.request(gql`{
        emailnewsletter {
            welcomeHeading,
            preambleContent,
            newsletterDate
        }}`);
    content = content.emailnewsletter;

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
                        <div class="headliner">${
													gig.promotedName || gig.performersListJson[0]
												} <span><a href="#">more info</a> &raquo;</span></div>`;
				if (gig.performersListJson != null && gig.performersListJson.length > 0) {
					template += `<div class="performers">w/ ${gig.performersListJson.join(', ')}</div>`;
				}
				template += `${gig.time}&nbsp; • &nbsp;<a href="https://sydneymusic.net/gig-guide/venues/${gig.venue.slug}">${gig.venue.venueName}</a>`;
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
            body { background : black; color : black; font-family : Helvetica, Arial, sans-serif; font-size : 18px; }
            .maintable { background : white; }
            .maintable tr td { padding-left : 20px; padding-right : 20px; }
            .maintable tr tr td { padding-left : 0px; padding-right : 0px; }
            .preamble p { margin-top : 12px; }
			p { line-height : 150%; }
            .ruby { color : #344A2F }
            .graphite { color : #6d7278 }
			.section { text-transform : uppercase; color : #344A2F; font-weight : bold; }
            tr.month td { border-bottom : solid 1px black; padding-bottom : 2px; text-transform : uppercase; font-weight : bold; }
            tr.day td { padding-top : 20px }
            .giglist tr td { font-size : 15px; padding-top : 0; padding-bottom : 16px; text-transform : uppercase;  }
            .giglist tr td div.headliner { padding-bottom : 2px; font-size : 18px; font-weight : bold; }
			.giglist tr td div.headliner span { font-size : 10px; text-transform: lowercase; font-weight : normal; }
			.giglist tr td div.performers { line-height : 120%; padding-bottom : 3px; font-weight : bold; }
            .giglist a { color : #888; text-transform: none; }
            h1 { margin-top : 10px; margin-bottom : 10px; font-size : 60px; font-weight : bold; letter-spacing : -2px; line-height : 100%; }
            .maintable a { color : black; }
            .nav td { font-size : 18px; padding-bottom : 20px; }
            .preamble, .gigcontainer { border-width : 1px 0px 0px 0px; border-color : #666; border-style : solid; padding-bottom : 20px; padding-top : 20px; }
            .preamble li { margin-bottom : 10px; line-height : 150%; }
            .blurb { font-size : 14px; line-height : 140%; margin-top : 5px; text-transform : none; border-left : solid 3px #344A2F; padding-left : 10px; }

            .plug { background :#eee; padding : 15px; margin-bottom : 10px; }
            .plug p { font-style : italic; font-size : 14px; margin : 0; text-align : center }
            .subscribeme, .subscribeme a { color : white; }
        </style>
    </head>
    <body>
    <p class="subscribeme" style="font-size : 12px; text-align : center; margin-bottom : 20px;">Welcome to the SydneyMusic.net gig guide newsletter!<br />Want to get this in your inbox every week? <a href="https://sydneymusic.us17.list-manage.com/subscribe?u=33fe15202bc9075111c10636a&id=08cf9e0f0b">You can subscribe over here.</a></p>
    <table align="center" style="max-width : 550px" class="maintable">
        <tr>
            <td>
                <img src="https://downloads.sydneymusic.net/newlogo.png" vspace="20" height="100" />
            </td>
        </tr>
        <tr class="nav">
            <td>
                &raquo; <a href="https://sydneymusic.net">go to sydneymusic.net</a> (it's a nice place)
            </td>
        </tr>
        <tr>
            <td class="preamble">
				<h1>${content.welcomeHeading}</h1>
				${content.preambleContent}

                <div class="plug">
                    <p><strong>This project is made possible thanks to the financial support of our community</strong>. If you like the work we do, please consider supporting us via our <a href="https://patreon.com/sydneymusic">Patreon</a> or <a href="https://store.sydneymusic.net">merch store</a>.</p>
                </div>
            </td>
        </tr>
        <tr>
            <td class="gigcontainer">
                <h1>Gigs This Week</h1>

                <p>There are <strong>${total}</strong> shows in this week's newsletter.</p>

                <p>Don't forget nearly all of these bands can be found in the <a href="https://sydneymusic.net/playlist">Gig Guide Playlist</a>.</p><p>You can also view more information about the shows and links to ticket sales via the <a href="https://sydneymusic.net/gig-guide">gig guide</a> on our website.</p>

                <table border="0" cellspacing="0" cellpadding="0">
                   ${template}
                </table>
            </td>
        </tr>
    </table>
</body></html>`;

return template;
}
