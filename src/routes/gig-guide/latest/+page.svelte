<script>
	import SeoSocial from '$lib/components/seo-social.svelte';
	import { formatDay, formatDateLong, createCalendarLink } from '../../../lib/globals.mjs';
	import Event from '$lib/components/event.svelte';

	let { data } = $props();
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
						<p>
							If you like to stay <em>really</em> up-to-the-second on gig announcements, this (currently
							beta) feature lets you see the most recent changes we've made to the guide.
						</p>
						<p>
							If you'd like to make a submission or a correction, please <a href="/contact"
								>contact us</a
							>. If you have any feedback on this feature, feel free to drop us a note as well!
						</p>
					</div>

					{#each data.gigs as event}
						<div>
							<div class="flex items-center space-x-2">
								{#if event.isNew}
									<div
										class="bg-red-500 text-[10px] font-semibold text-white px-3 py-px rounded-lg"
									>
										NEW
									</div>
								{:else}
									<div
										class="bg-blue-500 text-[10px] font-semibold text-white px-3 py-px rounded-lg"
									>
										UPDATED
									</div>
								{/if}
								<div class="text-[10px]">published at {event.updatedNice}</div>
							</div>
							<div class="uppercase mt-2 text-sm font-bold">
								{formatDay(event.date)}, <span class="text-ruby">{formatDateLong(event.date)}</span>
								{1900 + event.date.getYear()}
							</div>
							<Event
								name={event.promotedName}
								gigId={event.id}
								performers={event.performersListJson}
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
				<h3 class="notch-left text-lg lg:text-xl">This is a beta feature</h3>
				<div class="prose prose-sm">
					<p>
						You can send feedback to <a href="mailto:contact@sydneymusic.net"
							>contact@sydneymusic.net</a
						>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
