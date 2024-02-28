<script>
	import SeoSocial from '$lib/components/seo-social.svelte';
	import { formatDay, formatDateLong, createCalendarLink } from '../../../lib/globals.mjs';
	import Event from '$lib/components/event.svelte';

	export let data;
</script>

<SeoSocial title="Gig Guide - Latest Feed" />


<div class="max-w-5xl px-5 mt-10 mx-auto space-y-4">
	<h1 class="notch-left text-xl">Gig Guide <span class="text-ruby">Latest 50 Updates</span></h1>
</div>

<div class="max-w-5xl px-5 mt-5 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<div class="grid md:grid-cols-sidebar-right-wide">
			<!-- left col -->
			<div class="sm:pr-20">
				<div class="space-y-8 ml-3">
					<div class="prose">
					<p>This is a list of our last 50 updates to the guide, with the most recent upupdates shown first. If you'd like to make a submission or a correction, please <a href="/contact">contact us</a>.</p>
				</div>

					{#each data.gigs as event }
					<div>
						<div class="flex items-center space-x-2">
							{#if event.isNew}
							<div class="bg-red-500 text-[10px] font-semibold text-white px-3 py-px rounded-lg">NEW</div>
							{:else}
							<div class="bg-blue-500 text-[10px] font-semibold text-white px-3 py-px rounded-lg">UPDATED</div>
							{/if}
							<div class="text-[10px]">published at {event.updatedNice}</div>
						</div>
						<div class="uppercase mt-2 text-sm font-bold">{formatDay(event.date)}, <span class="text-ruby">{formatDateLong(event.date)}</span> {1900 + event.date.getYear()}</div>
						<Event
						name={event.promotedName}
						performers={event.performersList}
						calendarLink={createCalendarLink(event)}
						venue={event.venue}
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
			<!-- right col -->
			<div class="space-y-10 mt-20 md:mt-0">
				<h3 class="notch-left text-lg lg:text-xl">about the archive</h3>
				<div class="prose prose-sm">
					<p>This is just what's in the database. It may have errors.</p>

					<p>
						We're interested in the notion of creating a more complete archive of gigs that have
						taken place in Sydney over the years... but we're not there just yet. For now, enjoy
						this!
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
