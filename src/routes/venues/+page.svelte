<script>
	import SeoSocial from '$lib/components/seo-social.svelte';
	export let data;
</script>

<SeoSocial title="Live Music Venues in Sydney" />

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
	<h1 class="notch-left text-xl">Live Music Venues in Sydney</h1>

	<div class="text-base leading-relaxed sm:pr-20 lg:pr-28 space-y-4 px-3">
		<p>Here they are. As many as 'em as we could find.</p>

		<p>
			We hope this is a useful resource to see an overview of the places and spaces that we've
			featured hosting live music in our guide.
		</p>

		<p>
			If you see any errors or ommissions we always welcome feedback. And we want this to cover all
			of Sydney - not just the CBD/inner west!
		</p>
	</div>

	<h3 class="mb-0 notch-left text-lg lg:text-xl">Dear Venue Operators:</h3>

	<div class="text-base leading-relaxed sm:pr-20 lg:pr-28 space-y-4 px-3">
		<p>We love you!</p>

		<p>
			If your venue is listed here, we're happy to hear feedback about your listing. This is a
			curated guide and while we intend for SydneyMusic to broadly represent the entire scene
			without promoting some places over others, this is also a not-for-profit project that is run
			entirely by volunteers. We may not get to every gig you're putting on, only because we have
			finite resources to do what is quite a time consuming and manual task. Feel free to contact us
			if you have any questions.
		</p>
	</div>

	<div class="venues">
		{#each data.venues as { label, items }, i}
			<div class="venue">
				<h4
					class="-ml-3 border-l-2 pl-3 border-ruby text-lg font-bold uppercase italic leading-tight"
				>
					{label}
				</h4>
				<dl class="pb-10">
					{#each items as { venueName, slug, isRip, linkedFrom }}
						<dt>
							<a href="/venues/{slug}" style="hover:text-ruby;" class={!isRip ? '' : 'rip'}>
								{venueName} <span class="gigcount">({linkedFrom.eventsCollection.total})</span>
							</a>
						</dt>
					{/each}
				</dl>
			</div>
		{/each}
	</div>
</div>
