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

<div class="max-w-5xl px-5 mt-10 mx-auto space-y-10">
	<h1 class="notch-left text-xl">Live Music Venues in Sydney</h1>

	<div class="venues">
		{#each data.venues as { label, items }, i}
			<div class="venue">
				<h4
					class="-ml-3 border-l-2 pl-3 border-ruby text-lg font-bold uppercase italic leading-tight"
				>
					{label != 'null' ? label : 'Unknown Suburb'}
				</h4>
				<dl class="pb-10">
					{#each items as { venueName, slug, isRip, linkedFrom }}
						{#if linkedFrom.eventsCollection.total > 0}
						<dt>
							<a href="/gig-guide/venues/{slug}" style="hover:text-ruby;" class={!isRip ? '' : 'rip'}>
								{venueName} <span class="gigcount">({linkedFrom.eventsCollection.total})</span>
							</a>
						</dt>
						{/if}
					{/each}
				</dl>
			</div>
		{/each}
	</div>
</div>
