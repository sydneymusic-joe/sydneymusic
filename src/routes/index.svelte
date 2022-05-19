<script>
	import Event from '$lib/components/event.svelte';
	import Read from '$lib/components/read.svelte';
	import Button from '../lib/components/button.svelte';

	import API from '$lib/contentful/';
	import { groupBy, createCalendarLink, isToday, formatDateLong } from '$lib/globals.mjs';

	const getGigs = async () => {
		// ToDo: We're doing this in the user's (or server's) local timezone.
		// Is this okay? (I think it's okay, but I'm not sure)
		const n = new Date();
		n.setHours(0, 0, 0, 0); // Start of Day
		const d = new Date();
		d.setDate(d.getDate() + 1); // ToDO: For dev only
		d.setHours(23, 59, 59, 999); // End of day

		const data = await API(`{
      eventsCollection(
        order: gigStartDate_ASC, 
        where: { 
          gigStartDate_gte: "${n.toISOString()}", 
          gigStartDate_lte: "${d.toISOString()}" 
        }
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

			let byDay = groupBy(
				event,
				({ date }) => `${isToday(date) ? 'Today' : 'Tomorrow'}:${formatDateLong(date)}`
			);
			console.log(byDay);
			return byDay;
		}
		return {};
	};

	let gigs = getGigs();

	const getReads = async () => {
		const data = await API(`query {
      articlesCollection(order: sys_firstPublishedAt_ASC, limit: 4) {
          items {
            headline
            excerpt
            slug,
            sys {
              firstPublishedAt
            }
          }
        }
      }`);

		if (data) {
			return data.articlesCollection.items;
		}
		return {};
	};

	let reads = getReads();
</script>

<div class="max-w-5xl px-5 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<img src="https://picsum.photos/1500/500?grayscale" alt="" class="aspect-3/1 w-full" />

		<div class="grid lg:grid-cols-2 gap-5">
			<!-- left col -->
			<div class="space-y-10">
				{#await gigs then group}
					<h2 class="notch-left text-xl">Gigs right now</h2>

					<div class="space-y-10 pr-20 lg:pr-28">
						{#each group as { label, items }}
							<div class="space-y-0">
								<h3 class="notch-left text-lg">
									<span class="font-bold text-ruby">{label.split(':')[0]}</span>
									<span class="font-normal text-graphite">{label.split(':')[1]}</span>
								</h3>
								<div class="divide-black divide-y">
									{#each items as event}
										<div class="py-4">
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
						<Button />
					</div>
				{/await}
			</div>

			<!-- Right col -->
			<div class="space-y-10">
				<h2 class="notch-left text-xl">Latest Reads</h2>
				<div class="space-y-5 pr-20 lg:pr-28">
					{#await reads}
						<Read />
						<Read />
						<Read />
						<Read />
					{:then latest}
						{#each latest as { headline, excerpt, slug }}
							<a href="/reads/{slug}" class="block">
								<Read {headline} body={excerpt} />
							</a>
						{/each}
					{:catch e}
						<p style="color: red">Could not find the latest reads. Please panic, and try again!</p>
					{/await}
					<Button />
				</div>
			</div>
		</div>
	</div>

	<!-- Second section -->
	<div class="space-y-10">
		<h2 class="notch-left text-xl">Header</h2>

		<div class="grid lg:grid-cols-2 gap-5">
			<!-- left col -->
			<div class="space-y-10">
				<p class="text-base leading-relaxed pr-20 lg:pr-28">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
					dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore.
				</p>
			</div>
			<!-- right col -->
			<img src="https://picsum.photos/500/500?grayscale" alt="" class="aspect-square w-full" />
		</div>
	</div>

	<!-- Third section -->
	<div class="grid lg:grid-cols-2 gap-5">
		<!-- left col -->
		<div class="space-y-10">
			<h2 class="notch-left text-xl">Header</h2>
			<p class="text-base leading-relaxed pr-20 lg:pr-28">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore.
			</p>
		</div>
		<!-- right col -->
		<div class="space-y-10">
			<h2 class="notch-left text-xl">Header</h2>
			<p class="text-base leading-relaxed pr-20 lg:pr-28">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
				ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore.
			</p>
		</div>
	</div>
</div>
