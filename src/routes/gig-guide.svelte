<script>
	import Event from '$lib/components/event.svelte';
	import Button from '$lib/components/button.svelte';
	import API from '$lib/contentful/';
	import { formatDate, groupBy, formatDay, createCalendarLink } from '$lib/globals.mjs';

	const getGigs = async () => {
		const d = new Date();
		d.setMonth(d.getMonth() - 6); // ToDO: should remove -6 to only get current events in production

		const data = await API(`{
      eventsCollection(
        order: gigStartDate_ASC, 
        where: { gigStartDate_gte: "${d.toISOString()}" }
      ) {
        items {
          gigStartDate
          promotedName
          ticketUrl
          performersCollection {
            items {
              name
            }
          }
        }
      }
    }`);

		if (data) {
      let event = data.eventsCollection.items.map((i) => {
        let { gigStartDate, performersCollection, ...rest } = i;
				return {
          date: new Date(gigStartDate),
          // Collapse performers into an array of names
					performers: performersCollection.items.map(({ name }) => name),
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

	let gigs = getGigs();
  
</script>

<div class="max-w-5xl px-5 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<img src="https://picsum.photos/1000/150?grayscale" alt="" class="aspect-banner w-full" />

		<div class="grid lg:grid-cols-sidebar-right gap-5">
			<!-- left col -->
			<div class="space-y-10 pr-20 lg:pr-28">
				{#await gigs then byMonth}
					{#each byMonth as month}
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
														performers={event.performers}
														calendarLink={createCalendarLink(event)}
														website={event.ticketUrl}
													/>
												</div>
											{/each}
										</div>
									</div>
								{/each}
							</div>
						</div>
					{/each}
				{/await}
			</div>
			<!-- right col -->
			<div class="space-y-3">
				<Button />
				<Button />
				<Button />
			</div>
		</div>
	</div>
</div>
