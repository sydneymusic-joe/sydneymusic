<script>
	import Event from '$lib/components/event.svelte';
	import Button from '$lib/components/button.svelte';
	import Feedprompt from '../../lib/components/feedprompt.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import { createCalendarLink } from '../../lib/globals.mjs';
	import PlaylistPromo from '$lib/components/playlist.svelte';

	export let data;

	let gigCounter = 0;
	let whichPrompt = 0;
	const increment = () => {
		gigCounter++;
		return '';
	};
	const resetCounter = () => {
		if (gigCounter > 9) gigCounter = 0;
		return '';
	};
	const incrementDisplay = () => {
		whichPrompt++;
		return '';
	};
</script>

<SeoSocial title="Gig Guide" />

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

<div class="max-w-5xl px-5 mt-5 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<div class="grid md:grid-cols-sidebar-right-wide">
			<!-- left col -->
			<div class="space-y-5 sm:pr-20">
				<div>
				<h1 class="special">Welcome to the <span class="text-ruby">gig guide</span>!</h1>

				<div class="prose text-center max-w-5xl px-5">
					<p class="text-xs">Last updated: <span class="text-ruby">{data.lastUpdated}</span>. <a href="/gig-guide/latest/">View latest updates</a>.</p>
				</div>
			</div>

			<div class="p-3 text-center text-xs space-y-2 bg-amber-50 border-black border-2" style="box-shadow : 3px 3px 0px rgba(0,0,0,0.5)">
				<div><strong class="text-ruby">SydneyMusic.net is not-for-profit and 100% reader-supported.</strong></div>
				<div>Do you find this guide useful? It can be even better with your help:</div>
				<div class="prose text-xs m-auto space-x-5">
					<a href="https://patreon.com/sydneymusic" target="_blank">Become a SydneyMusic Supporter</a>
					<a href="https://store.sydneymusic.net" target="_blank">Make a one-off donation</a>
				</div>
		</div>

				<div class="filterbox">
					<label for="toggle-freegigs" class="flex items-center cursor-pointer relative">
						<input type="checkbox" id="toggle-freegigs" class="sr-only" />
						<div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full" />
						<span class="ml-2">FREE GIGS ONLY</span>
					</label>
				</div>

				{#each data.gigs as month}
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
											{increment()}
										{/each}
									</div>
								</div>
								{#if gigCounter > 9}
									<Feedprompt Index={whichPrompt} />
									{resetCounter()}
									{incrementDisplay()}
								{/if}
							{/each}
						</div>
					</div>
				{/each}
			</div>
			<!-- right col -->
			<div class="space-y-10 mt-20 md:mt-0">

				<div class="blinddate-host">
					<div class="blinddate-plug">
						<div>Discover something new! Try:</div>
						<a href="https://genres.sydneymusic.net" target="_blank" class="text-ruby text-xl">Blind Date With A Band</a>
					</div>
				</div>

				<PlaylistPromo showtitle="true" />

				<h3 class="notch-left text-lg lg:text-xl">about the guide</h3>
				<div class="prose prose-sm">
					<p>
						This guide is as simple as we can practically get away with. We’ll include some
						occasional commentary (feel free to submit your own!) to help give you context on what
						can be a dizzyingly complex network of musicians, collectives, communities, and spaces,
						or just make sure you don’t miss out on catching your next favourite act.
					</p>
					<p>
						Got a gig you think should be listed here? <a href="mailto:gigs@sydneymusic.net"
							>Send our friendly team of Gig Researchers an email!</a
						>
					</p>
				</div>
				<div class="space-y-3">
					<Button label="Submit a gig" href="mailto:gigs@sydneymusic.net" />
				</div>

				<div class="prose prose-sm">
					<p>
						<span class="font-bold text-sm">Artists, managers, promoters, and venues:</span><br />
						Self-promo is fine — we love it when you let us know what you’ve got going on! But we won’t
						publish your marketing/social copy verbatim or give you special consideration in the guide.
						We generally don’t list cover/tribute bands or background-music sets at hospitality venues.
						All listings are at our own discretion. We will also graciously refuse any offer of door
						spots for shows where we can buy tickets.
					</p>
				</div>
				<div class="space-y-3">
					<Button label="Join the Discord!" href="https://discord.gg/jv8VKrXymJ" />
					<Button label="Other links" href="/links" />
				</div>
			</div>
		</div>
	</div>
</div>
