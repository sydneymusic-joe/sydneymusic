<script>
	import {
		previewMode,
		groupBy,
		createCalendarLink,
		formatDayOfWeek,
		formatDateLong
	} from '$lib/globals.mjs';

	//export let venueData;
	export let data;
	export let venueData = data.venueData;
	export let events = data.events;
	import Event from '$lib/components/event.svelte';
</script>

<div class="max-w-5xl px-5 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div>
		<div class="space-y-10">
			<div class="prose prose-xl">
				<h3 class="uppercase text-sm text-ruby">Venue Profile</h3>
				<h1 class="uppercase text-xl italic">{venueData.venueName}</h1>

				<p>
					{venueData.address}<br />{venueData.suburb} NSW {venueData.postcode} [<a
						href="https://duckduckgo.com/?va=a&t=hp&q={venueData.address},%20{venueData.suburb}&ia=maps&iaxm=maps"
						>see map</a
					>]
				</p>

				<p><a href={venueData.url}>{venueData.url}</a></p>
			</div>

			<div>
				<h3 class="notch-left text-lg lg:text-xl">Upcoming Gigs</h3>

				{#if events.filter((item) => item.date >= new Date()).length == 0}<div class="pl-3 py-2">
						There are no upcoming gigs listed for this venue.
					</div>{/if}

				{#each events.filter((item) => item.date >= new Date()) as event, i}
					<div class="pl-3 py-2">
						<Event
							name={event.promotedName}
							performers={event.performersList}
							calendarLink={createCalendarLink(event, venueData)}
							venue={venueData}
							website={event.ticketUrl}
							comment={event.furtherInfo}
							initials={event.furtherInfoContributorInitials}
							time={event.time}
							isFree={event.isFree}
						/>
					</div>
				{/each}
			</div>

			<div>
				<h3 class="notch-left text-lg lg:text-xl">Past Gigs</h3>

				{#each events.filter((item) => item.date <= new Date()) as event, i}
					<div class="pl-3 py-2">
						<Event
							name={event.promotedName}
							performers={event.performersList}
							calendarLink={createCalendarLink(event, venueData)}
							venue={venueData}
							website={event.ticketUrl}
							comment={event.furtherInfo}
							initials={event.furtherInfoContributorInitials}
							time={event.time}
							isFree={event.isFree}
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
