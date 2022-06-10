<script context="module">
  import API from '$lib/contentful/';
  import { formatDate, groupBy, formatDay, createCalendarLink } from '$lib/globals.mjs';

	const getGigs = async () => {
		const d = new Date();

		const data = await API(`{
      eventsCollection(
        limit : 1000, order: gigStartDate_ASC, 
        where: { gigStartDate_gte: "${d.toISOString()}" }
      ) {
        items {
          gigStartDate
          promotedName
          ticketUrl
          performersList
          furtherInfo
          furtherInfoContributorInitials
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
				return {
          date: new Date(gigStartDate),
          // Collapse performers into an array of names
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
			props: {
				gigs
			}
		};
	}
</script>

<script>
import Event from '$lib/components/event.svelte';
import Button from '$lib/components/button.svelte';
export let gigs;  
</script>

<div class="max-w-5xl px-5 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<img src="https://picsum.photos/1000/150?grayscale" alt="" class="aspect-banner w-full" />

		<div class="grid lg:grid-cols-sidebar-right gap-5">
			<!-- left col -->
			<div class="space-y-10 pr-20 lg:pr-28">
        {#each gigs as month}
          <div class="space-y-10">
            <h3 class="notch-left text-lg lg:text-xl">
              {month.label}
            </h3>
            <div class="grid space-y-10">
              {#each month.items as { label, items }}
                <div class="day flex items-start">
                  <div class="grid text-center items-center justify-center pl-3 pr-10 font-bold">
                    <p class="text-ruby font-semibold text-lg leading-none uppercase">
                      {label.split(':')[1]}
                    </p>
                    <p class="text-4xl leading-none">{label.split(':')[0]}</p>
                  </div>
                  <div class="space-y-5">
                    {#each items as event}
                      <div>
                        <Event
                          name={event.promotedName}
                          performers={event.performersList}
                          calendarLink={createCalendarLink(event)}
                          venue={event.venue}
                          website={event.ticketUrl}
                          comment={event.furtherInfo}
                        />
                      </div>
                    {/each}
                  </div>
                </div>
              {/each}
            </div>
          </div>
        {/each}
			</div>
			<!-- right col -->
			<div class="space-y-3">
        <h3 class="notch-left text-lg lg:text-xl">gig guide</h3>
        <p>Welcome to Sydney’s finest gig guide — the most comprehensive, curated, ardently sponcon-free listing of musical activity in the local area.</p>
        <p>This guide is as simple as we can practically get away with. We’ll include some occasional commentary (feel free to submit your own!) to help give you context on what can be a dizzyingly complex network of musicians, collectives, communities, and spaces, or just make sure you don’t miss out on catching your next favourite act.</p>
        <p>There are no social sharing buttons, but there is one to download a super basic calendar entry file for each individual gig so you can add it to your personal calendar. This doesn’t track you, or nick your data — it’s literally just the info in the listing in a handy file that saves you 40 seconds or so compared to entering it manually.</p>
        <p>Got a gig you think should be listed here? <a href="mailto:contact@sydneymusic.net">Drop us an email</a>.</p>
        
        <p class="text-sm">
          <span class="font-bold text-sm">NB for artists, managers, promoters, and venues:</span>
          Self-promo is fine — we love it when you let us know what you’ve got going on! Just so you know: we won’t publish your marketing/social copy verbatim or give you any special consideration in the guide, we generally don’t list cover/tribute bands or background-music sets at hospitality venues, and all listings are at our own discretion. We will also graciously refuse any offers of door spots for shows we could still buy a ticket to.
        </p>
				<Button label="Submit a gig" href="mailto:contact@sydneymusic.net" />
				<Button label="Join the Discord!" href="https://discord.gg/jv8VKrXymJ" />
				<Button label="Other links" href="/links" />
			</div>
		</div>
	</div>
</div>
