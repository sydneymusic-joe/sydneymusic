<script>
	import SeoSocial from '$lib/components/seo-social.svelte';
	import Heading from '$lib/components/heading.svelte';
	let { data } = $props();
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

<div class="max-w-5xl px-5 mt-10 mx-auto">
	<Heading level={1} variant="xl" class="notch-left mb-5">Live Music Venues in Sydney</Heading>

	<div class="px-3 prose max-w-[100%] mb-10">
		<p>
			Here’s every live music venue in Sydney that's hosted gigs since SydneyMusic's inception in
			2022.
		</p>
		<p>
			Whether you’re looking for the best gigs in your neighbourhood, planning an Inner West music
			crawl across the free front bar shows of Newtown, or scoping out potential stages for your
			band's EP launch, the live venue that's right for you is right here.*
		</p>
		<p>
			Scroll by suburb, click the venue name to see gig listings for this week and beyond, and don't
			forget to pour one out for the Sydney live music venues that have closed their doors (marked
			with a 🕯️).
		</p>
		<p class="text-xs">
			* Unless it's not! If we're missing your venue or don't have a gig listing, please <a
				href="/contact">let us know</a
			>. Venues will appear here once at least one gig has been listed in the guide.
		</p>
	</div>

	<div class="venues">
		{#each data.venues as { label, items }, i}
			<div class="venue">
				<h4
					class="-ml-3 border-l-2 pl-3 border-ruby text-lg font-bold uppercase italic leading-tight"
				>
					{label != 'null' ? label : 'Unknown Suburb'}
				</h4>
				<dl class="pb-10">
					{#each items as { venueName, slug, isRip, _allReferencingEventsMeta }}
						{#if _allReferencingEventsMeta.count > 0}
							<dt>
								<a
									href="/gig-guide/venues/{slug}"
									class={`hover:text-ruby transition-colors duration-100 ease-in-out ${
										isRip && 'rip'
									}`}
								>
									{venueName} <span class="gigcount">({_allReferencingEventsMeta.count})</span>
								</a>
							</dt>
						{/if}
					{/each}
				</dl>
			</div>
		{/each}
	</div>
</div>
