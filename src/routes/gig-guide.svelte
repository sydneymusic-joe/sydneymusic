<script context="module">
	import API from '$lib/contentful/';
	import { formatDate, groupBy, formatDay, createCalendarLink } from '$lib/globals.mjs';

	const getGigs = async () => {
		const d = new Date();

		const data = await API(`{
      eventsCollection(
        order: gigStartDate_ASC,
        limit: 1000, 
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
		<img src="https://picsum.photos/1000/150?grayscale" alt="" class="aspect-3/1 sm:aspect-banner object-cover w-full" />

		<div class="grid lg:grid-cols-sidebar-right-wide">
			<!-- left col -->
			<div class="space-y-10 sm:pr-20">
				{#each gigs as month}
					<div class="space-y-10">
						<h3 class="notch-left text-lg lg:text-xl">
							{month.label}
						</h3>
						<div class="grid space-y-10">
							{#each month.items as { label, items }}
								<div class="relative day flex items-start">
									<div
										class="sticky top-5 grid text-center items-center justify-center pr-8 sm:pl-3 sm:pr-10 font-bold"
									>
										<p class="text-ruby font-semibold text-base sm:text-lg leading-none uppercase">
											{label.split(':')[1]}
										</p>
										<p class="text-3xl sm:text-4xl leading-none">{label.split(':')[0]}</p>
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
                          initials={event.furtherInfoContributorInitials}
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
			<div class="space-y-10">
        <h3 class="notch-left text-lg lg:text-xl">gig guide</h3>
				<div class="prose prose-sm">
					<p>
						Welcome to Sydney’s finest gig guide — the most comprehensive, curated, ardently
						sponcon-free listing of musical activity in the local area.
					</p>
					<p>
						This guide is as simple as we can practically get away with. We’ll include some
						occasional commentary (feel free to submit your own!) to help give you context on what
						can be a dizzyingly complex network of musicians, collectives, communities, and spaces,
						or just make sure you don’t miss out on catching your next favourite act.
					</p>
					<p>
						There are no social sharing buttons, but there is one to download a super basic calendar
						entry file for each individual gig so you can add it to your personal calendar. This
						doesn’t track you, or nick your data — it’s literally just the info in the listing in a
						handy file that saves you 40 seconds or so compared to entering it manually.
					</p>
					<p>
						Got a gig you think should be listed here? <a href="mailto:contact@sydneymusic.net"
							>Drop us an email</a
						>.
					</p>
				</div>
				<div class="space-y-3">
					<Button label="Submit a gig" href="mailto:contact@sydneymusic.net" />
					<Button label="Join the Discord!" href="https://discord.gg/jv8VKrXymJ" />
					<Button label="Other links" href="/links" />
				</div>

        <p class="text-sm">
          <span class="font-bold text-sm">Artists, managers, promoters, and venues:</span><br/>
          Self-promo is fine —we love it when you let us know what you’ve got going on! But we won’t 
          publish your marketing/social copy verbatim or give you special consideration
          in the guide. We generally don’t list cover/tribute bands or background-music sets at hospitality
          venues. All listings are at our own discretion. We will also graciously refuse any offer
          of door spots for shows where we can buy tickets.
        </p>
			</div>
		</div>
	</div>
</div>
