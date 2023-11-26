<script>
	import SeoSocial from '$lib/components/seo-social.svelte';
	import { createCalendarLink } from '$lib/globals.mjs';
	import Event from '$lib/components/event.svelte';

	export let data;
</script>

<SeoSocial title="Gig Guide Archive" />

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

<div class="max-w-5xl px-5 mt-10 mx-auto space-y-4">
	<h1 class="notch-left text-xl">Gig Guide <span class="text-ruby">Archive</span></h1>
	<div class="px-3 space-y-5">
		<p>Yes, this is time travel.</p>
		<p>There are <strong>{data.gigs.totalGigs.toLocaleString()}</strong> gigs in the archive.</p>
	</div>
</div>

<div class="max-w-5xl px-5 mt-10 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<div class="grid md:grid-cols-sidebar-right-wide">
			<!-- left col -->
			<div class="space-y-10 sm:pr-20">
				{#each data.gigs.byMonth as month}
					<div class="guide-month space-y-10">
						<h3 class="notch-left text-lg lg:text-xl">
							{month.label}
						</h3>
						<div class="grid space-y-10">
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
									<div class="w-full">
										{#each items as event}
											<Event
												name={event.promotedName}
												performers={event.performersList}
												venue={event.venue}
												website={event.ticketUrl}
												comment={event.furtherInfo}
												initials={event.furtherInfoContributorInitials}
												time={event.time}
											/>
										{/each}
									</div>
								</div>
							{/each}
						</div>
					</div>
				{/each}
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
