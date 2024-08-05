<script>
	import {
		previewMode,
		groupBy,
		createCalendarLink,
		formatDayOfWeek,
		formatDateLong
	} from '$lib/globals.mjs';
	import { render } from 'datocms-structured-text-to-html-string';

	//export let venueData;
	export let data;
	export let venueData = data.venueData;
	export let eventsFuture = data.eventsFuture;
	export let eventsPast = data.eventsPast;
	import Event from '$lib/components/event.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
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
		class="aspect-3/1 sm:aspect-banner object-cover w-full mx-auto lg:max-w-5xl"
	/>
</picture>

<div class="max-w-5xl px-5 mx-auto mt-10 space-y-32 pb-24">
	<!-- First section -->
	<div>
		<div class="space-y-10">
			<div class="prose prose-xl">
				<h3 class="uppercase text-sm text-ruby">Venue Profile</h3>
				<h1 class="uppercase text-xl italic">{venueData.venueName}</h1>

				{#if venueData.isRip}
				<p class="text-sm">🕯️ <strong>Note:</strong> This venue is sadly no longer with us.</p>
				{/if}

				<p>
					<span class="{venueData.address == "" ? 'text-gray-400' : ''}">{venueData.address == "" ? '[Address not provided]' : venueData.address}</span><br />{venueData.suburb ?? ''} NSW {venueData.postcode ?? ''} [<a
						href="https://duckduckgo.com/?va=a&t=hp&q={venueData.address ?? ''},%20{venueData.suburb}&ia=maps&iaxm=maps"
						>see map</a
					>]
				</p>

				{#if venueData.url}
				<p><a href={venueData.url}>{venueData.url}</a></p>
				{/if}

				<p><strong>Capacity:</strong> {venueData.capacity ? venueData.capacity : 'Unknown'}</p>

				{#if venueData.blurb}
				<div class="blurb">
					<h3 class="uppercase text-sm text-ruby">About {venueData.venueName}</h3>
					<div class="prose text-sm">
						{@html render(venueData.blurb)}
					</div>
				</div>
				{/if}

				<div class="bg-gray-200 p-5 rounded-md prose">
					<p class="m-0"><strong>Do you have information about this venue?</strong></p>
					<p class="m-0">We want to build a comprehensive reference of venue specs, accessibility information and much more. If you would like to contribute, please <a href="mailto:contact@sydneymusic.net">get in touch</a>.</p>
				</div>
			</div>

			<div>
				{#if !venueData.isRip}
				<div class="transition">
					<div class="accordion-header cursor-pointer transition flex items-center">
						<h3 class="uppercase text-2xl italic font-bold">Upcoming Gigs <span class="font-normal text-gray-500">({eventsFuture.childCount})</span></h3>
					</div>
					<div class="accordion-content overflow-hidden max-h-0">

					{#if eventsFuture.length === 0}<div class="pl-3 py-2">
						There are no upcoming gigs listed for this venue.
					</div>{/if}

					{#each eventsFuture as month}
					<div class="guide-month space-y-10">
						<h3 class="notch-left text-lg lg:text-xl">
							{month.label}
						</h3>
						<div class="grid">
							{#each month.items as { label, items }}
								<div class="relative day flex items-start">
									<div
										class="sticky top-10 grid text-center items-center justify-center pr-8 sm:pl-3 sm:pr-10 font-bold"
									>
										<p class="text-ruby font-semibold text-base sm:text-lg leading-none uppercase">
											{label.split(':')[1]}
										</p>
										<p class="text-3xl sm:text-4xl leading-none">{label.split(':')[0]}</p>
									</div>
									<div class="w-full mb-5">
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
					<div class="accordion-header cursor-pointer transition flex items-center">
						<h3 class="uppercase text-2xl italic font-bold">Past Gigs <span class="font-normal text-gray-500">({eventsPast.childCount})</span></h3>
					</div>
					<div class="accordion-content overflow-hidden max-h-0">
					{#each data.eventsPast as month}
						<div class="guide-month">
							<h3 class="notch-left text-lg lg:text-xl">
								{month.label}
							</h3>
							<div class="grid">
								{#each month.items as { label, items }}
									<div class="relative day flex items-start">
										<div
											class="sticky top-10 grid text-center items-center justify-center pr-8 sm:pl-3 sm:pr-10 font-bold"
										>
											<p class="text-ruby font-semibold text-base sm:text-lg leading-none uppercase">
												{label.split(':')[1]}
											</p>
											<p class="text-3xl sm:text-4xl leading-none">{label.split(':')[0]}</p>
										</div>
										<div class="w-full mb-5">
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
