<script>
import { createCalendarLink } from '#lib/globals.mjs';
import { render } from 'datocms-structured-text-to-html-string';

import Event from '#lib/components/event.svelte';
import SeoSocial from '#lib/components/seo-social.svelte';
import Heading from '#lib/components/heading.svelte';
/**
 * @typedef {Object} Props
 * @property {any} data - export let venueData;
 * @property {any} [venueData]
 * @property {any} [eventsFuture]
 * @property {any} [eventsPast]
 */

/** @type {Props} */
let {
	data,
	venueData = data.venueData,
	eventsFuture = data.eventsFuture,
	eventsPast = data.eventsPast
} = $props();
</script>

<SeoSocial title="{venueData.venueName} venue information" />

<picture>
	<source
		srcset="/canman-gigs@2x.png 2560w, /canman-gigs@1x.png 1280w"
		media="(min-width : 640px)"
	/>
	<source srcset="/canman-gigs-mobile.png" media="(max-width : 640px)" />
	<img
		src="/canman-gigs@1x.png"
		alt="SydneyMusic.net mascot Can Man loves a gig"
		class="mx-auto aspect-3/1 w-full object-cover sm:aspect-banner lg:max-w-5xl"
	/>
</picture>

<div class="mx-auto mt-10 max-w-5xl space-y-32 px-5 pb-24">
	<!-- First section -->
	<div>
		<div class="space-y-10">
			<div class="prose prose-xl">
				<h3 class="text-sm text-ruby uppercase">Venue Profile</h3>
				<h1 class="text-xl uppercase italic">{venueData.venueName}</h1>

				{#if venueData.isRip}
					<p class="text-sm">🕯️ <strong>Note:</strong> This venue is sadly no longer with us.</p>
				{/if}

				<p>
					<span class={venueData.address == '' ? 'text-gray-400' : ''}
						>{venueData.address == '' ? '[Address not provided]' : venueData.address}</span
					><br />{venueData.suburb ?? ''} NSW {venueData.postcode ?? ''} [<a
						target="_blank"
						href="https://duckduckgo.com/?va=a&t=hp&q={venueData.address ??
							''},%20{venueData.suburb}&ia=maps&iaxm=maps"
						>see map</a
					>]
				</p>

				{#if venueData.url}
					<p><a href={venueData.url} target="_blank">{venueData.url}</a></p>
				{/if}

				<p><strong>Capacity:</strong> {venueData.capacity ? venueData.capacity : 'Unknown'}</p>

				{#if venueData.blurb}
					<div class="blurb">
						<h3 class="text-sm text-ruby uppercase">About {venueData.venueName}</h3>
						<div class="prose text-sm">
							{@html render(venueData.blurb)}
						</div>
					</div>
				{/if}

				<div class="prose rounded-md bg-gray-200 p-5">
					<p class="m-0"><strong>Do you have information about this venue?</strong></p>
					<p class="m-0">
						We want to build a comprehensive reference of venue specs, accessibility information and
						much more. If you would like to contribute, please <a
							href="mailto:contact@sydneymusic.net">get in touch</a
						>.
					</p>
				</div>
			</div>

			<div>
				{#if !venueData.isRip}
					<div class="transition">
						<div class="accordion-header flex cursor-pointer items-center transition">
							<h3 class="text-2xl font-bold uppercase italic">
								Upcoming Gigs <span class="font-normal text-gray-500"
									>({eventsFuture.childCount})</span
								>
							</h3>
						</div>
						<div class="accordion-content max-h-0 overflow-hidden">
							{#if eventsFuture.length === 0}<div class="py-2 pl-3">
									There are no upcoming gigs listed for this venue.
								</div>{/if}

							{#each eventsFuture as month}
								<div class="guide-month space-y-10">
									<Heading level={3} variant="md" class="notch-left">
										{month.label}
									</Heading>
									<div class="grid">
										{#each month.items as { label, items }}
											<div class="day relative flex items-start">
												<div
													class="sticky top-10 grid items-center justify-center pr-8 text-center font-bold sm:pr-10 sm:pl-3"
												>
													<p
														class="text-base leading-none font-semibold text-ruby uppercase sm:text-lg"
													>
														{label.split(':')[1].substr(0,3)}
													</p>
													<p class="text-3xl leading-none sm:text-4xl">{label.split(':')[0]}</p>
												</div>
												<div class="mb-5 w-full">
													{#each items as event}
														<Event
															name={event.promotedName}
															gigId={event.id}
															performers={event.performersListJson}
															calendarLink={createCalendarLink(event, venueData)}
															venue={venueData}
															website={event.ticketUrl}
															comment={event.furtherInfo}
															initials={event.furtherInfoContributorInitials}
															time={event.time}
															isFree={event.isFree}
														/>
													{/each}
												</div>
											</div>
										{/each}
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>

			<div>
				<div class="transition">
					<div class="accordion-header flex cursor-pointer items-center transition">
						<h3 class="text-2xl font-bold uppercase italic">
							Past Gigs <span class="font-normal text-gray-500">({eventsPast.childCount})</span>
						</h3>
					</div>
					<div class="accordion-content max-h-0 overflow-hidden">
						{#each data.eventsPast as month}
							<div class="guide-month">
								<Heading level={3} variant="md" class="notch-left">
									{month.label}
								</Heading>
								<div class="grid">
									{#each month.items as { label, items }}
										<div class="day relative flex items-start">
											<div
												class="sticky top-10 grid items-center justify-center pr-8 text-center font-bold sm:pr-10 sm:pl-3"
											>
												<p
													class="text-base leading-none font-semibold text-ruby uppercase sm:text-lg"
												>
													{label.split(':')[1].substr(0,3)}
												</p>
												<p class="text-3xl leading-none sm:text-4xl">{label.split(':')[0]}</p>
											</div>
											<div class="mb-5 w-full">
												{#each items as event, i}
													<Event
														name={event.promotedName}
														gigId={event.id}
														performers={event.performersListJson}
														calendarLink={createCalendarLink(event, venueData)}
														venue={venueData}
														website={event.ticketUrl}
														comment={event.furtherInfo}
														initials={event.furtherInfoContributorInitials}
														time={event.time}
														isFree={event.isFree}
													/>
												{/each}
											</div>
										</div>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
