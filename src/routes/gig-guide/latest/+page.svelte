<script>
import SeoSocial from '#lib/components/seo-social.svelte';
import { formatDay, formatDateLong, createCalendarLink } from '#lib/globals.mjs';
import Event from '#lib/components/event.svelte';
import Heading from '#lib/components/heading.svelte';
let { data } = $props();
</script>

<SeoSocial title="Gig Guide - Latest Feed" />

<div class="mx-auto mt-10 max-w-5xl space-y-4 px-5">
	<Heading level={1} variant="xl" class="notch-left"
		>Gig Guide <span class="text-ruby">Latest 50 Updates</span></Heading
	>
</div>

<div class="mx-auto mt-5 max-w-5xl space-y-32 px-5 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<div class="grid md:grid-cols-sidebar-right-wide">
			<!-- left col -->
			<div class="sm:pr-20">
				<div class="ml-3 space-y-8">
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
										class="rounded-lg bg-red-500 px-3 py-px text-[10px] font-semibold text-white"
									>
										NEW
									</div>
								{:else}
									<div
										class="rounded-lg bg-blue-500 px-3 py-px text-[10px] font-semibold text-white"
									>
										UPDATED
									</div>
								{/if}
								<div class="text-[10px]">published at {event.updatedNice}</div>
							</div>
							<div class="mt-2 text-sm font-bold uppercase">
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
			<div class="mt-20 space-y-10 md:mt-0">
				<Heading level={3} variant="md" class="notch-left">This is a beta feature</Heading>
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
