<script>
	import SeoSocial from '$lib/components/seo-social.svelte';
	import Button from '$lib/components/button.svelte';
	import Heading from '$lib/components/heading.svelte';
	import { formatDate, formatDateLong, groupBy, formatDay } from '$lib/globals.mjs';

	let { data } = $props();
</script>

<SeoSocial title="Jobs" description="See current roles available at SydneyMusic, Sydney’s most comprehensive gig guide" image="https://sydneymusic.net/merch-tees.jpg" />

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
<div class="max-w-5xl px-5 mt-5 mx-auto space-y-5 pb-24">
	<div class="prose">

		<Heading level={2} variant="lg" class="font-medium stretch uppercase">Join the team</Heading>

		<p>Welcome to our jobs board! Here’s what we’ve got on offer at the moment.</p>

		<div class="grid grid-cols-2 gap-5">
		{#each data.allJobs as job}
			<div class="border rounded-lg p-3">
				<div class="text-lg"><a href="/jobs/{job.permalink}">{job.roleTitle}</a></div>
				<div class="text-xs text-gray-700 mt-2">Applications close: {formatDateLong(job.applicationsClose)}</div>
			</div>
		{/each}
		</div>

	</div>
</div>