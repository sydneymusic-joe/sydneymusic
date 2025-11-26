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
									day.label.split(':')[1].substr(0,3)
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
												}</div>`;
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
            body { background : white; color : black; font-family : Helvetica, Arial, sans-serif; font-size : 18px; }
            .maintable { background : white; }
            .maintable tr td { padding-left : 20px; padding-right : 20px; }
            .maintable tr tr td { padding-left : 0px; padding-right : 0px; }
            .preamble p { margin-top : 12px; }
            p, td { font-family : Helvetica, Arial, sans-serif; font-size : 14px; }
			p { line-height : 150%; }
            .ruby { color : #e02020 }
            .graphite { color : #6d7278 }
			.section { text-transform : uppercase; color : #e02020; font-weight : bold; }
            tr.month td { border-bottom : solid 1px black; padding-bottom : 2px; text-transform : uppercase; font-weight : bold; }
            tr.day td { padding-top : 20px }
            .giglist tr td { font-size : 15px; padding-top : 0; padding-bottom : 16px; text-transform : uppercase;  }
            .giglist tr td div.headliner { padding-bottom : 2px; font-size : 18px; font-weight : bold; }
			.giglist tr td div.headliner span { font-size : 10px; text-transform: lowercase; font-weight : normal; }
			.giglist tr td div.performers { line-height : 120%; padding-bottom : 3px; font-weight : bold; }
            .giglist a { color : #888; text-transform: none; }
            h1 { margin-top : 10px; margin-bottom : 10px; font-size : 30px; font-weight : bold; letter-spacing : -1px; line-height : 100%; }
            .maintable a { color : black; }
            .nav td { font-size : 18px; padding-bottom : 20px; }
            .preamble, .gigcontainer { border-width : 1px 0px 0px 0px; border-color : #666; border-style : solid; padding-bottom : 20px; padding-top : 20px; }
            .preamble li { margin-bottom : 10px; line-height : 150%; }
            .blurb { font-size : 14px; line-height : 140%; margin-top : 5px; text-transform : none; border-left : solid 3px #e02020; padding-left : 10px; }

            .plug { border : solid 2px black; margin-bottom : 10px; }
            .plug p { font-size : 14px; margin : 10px 15px; }
						.plug h2 { margin : 0; font-weight : normal; font-size : 20px; margin : 20px 15px 10px 15px;}
            .subscribeme, .subscribeme a { color : #666; }
        </style>
    </head>
    <body>
    <p class="subscribeme" style="font-size : 12px; text-align : center; margin-bottom : 20px;">Welcome to the SydneyMusic.net gig guide newsletter!<br /><a href="https://sydneymusic.us17.list-manage.com/subscribe?u=33fe15202bc9075111c10636a&id=08cf9e0f0b">Subscribe</a> to get this in your inbox every week.</p>
    <table align="center" style="max-width : 550px" class="maintable">
        <tr>
            <td align="center" style="padding : 15px">
                <a href="https://sydneymusic.net"><img src="https://downloads.sydneymusic.net/email-header.png" alt="SydneyMusic.net" height="100" border="0" /></a>
								<div style="font-size : 12px; margin-top : 5px; font-style : italic; font-weight : bold">• Helping Sydney get out to shows since 2022 •</div>
            </td>
        </tr>
        <tr>
            <td class="preamble">
                <h1>${content.welcomeHeading}</h1>
				${content.preambleContent}

                <div class="plug">
                    <p style="font-size : 130%; text-align : center"><strong>Thank you to our monthly supporters that fund <span class="ruby">24.48%</span> of our monthly budget — and thank you to our one-off donors that saw another <span class="ruby">4.3%</span> of our budget donated last month.</strong></p>
                    <p style="text-align : center">We've made a huge amount of progress in the last 5 months, and we couldn't have done it without our community. <strong>But we still need your help.</strong></p>
                    <div style="text-align : center; padding : 20px 0px"><a href="https://sydneymusic.net/support" style="font-weight : bold;  background : white; color : black; border : solid 2px black; text-decoration : underline; font-size : 18px; padding : 11px 18px; box-shadow : 5px 5px 0px rgba(0,0,0,0.5)">Support the guide here!</a></div>
                    <p>All donations are tax deductible and go towards the hard costs and labour needed to run this resource and secure its future viability.</p>
                    <p><strong>Can you help us?</strong> We plan to be less reliant on reader donations in the future — but if you want to see SydneyMusic become self-sustaining, your donations are crucial to helping us get us there.</p>

                    <h2>Here’s how to help — takes 30 seconds</h2>
                    <p>&raquo; <strong>Become a monthly supporter</strong> for <a href="https://square.link/u/JYzf9LTF">$15</a>, <a href="https://square.link/u/moL86XF5">$50</a> or <a href="https://square.link/u/Dicl3TrR">$200</a> a month.</p>
                    <p>&raquo; You can also <a href="https://square.link/u/eS7bgm8M">choose whatever amount you like</a> as a monthly or one-off donation.</p>
                    <p style="font-size : 11px;"><strong>Prefer to donate via bank transfer?</strong> We can provide you with a Deductible Gift Receipt.<br />E-mail <a href="mailto:joe@sydneymusic.net">Joe</a> for more information.</p>
                </div>
            </td>
        </tr>
        <tr>
            <td class="gigcontainer">
                <h1>Gigs This Week</h1>

                <p>There are <strong>${total}</strong> shows in this week's newsletter.</p>

                <table border="0" cellspacing="0" cellpadding="0">
                   ${template}
                </table>
            </td>
        </tr>
    </table>
</body></html>`;

return template;
}
