<script>
	import SeoSocial from '$lib/components/seo-social.svelte';
	import Button from '$lib/components/button.svelte';
	import Heading from '$lib/components/heading.svelte';

	let { data } = $props();
	let job = data.allJobs[0];
</script>


<SeoSocial title={"JOIN OUR TEAM: " + job.roleTitle} description={job.shortDescription} image="https://sydneymusic.net/merch-tees.jpg" />
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
		<div class="text-sm mb-3 text-gray-500"><a href="/" class="underline">Home</a> &gt; <a href="/jobs" class="underline">Jobs</a> &gt;</div>
		<Heading level={1} variant="lg" class="text-ruby uppercase stretch font-medium">
			{job.roleTitle}
		</Heading>
		<p>{job.subheadSpecs.join(" • ")}</p>
		<p>
			<strong
				>{job.shortDescription}</strong
			>
		</p>
		<div class="max-w-[50%] py-8 space-y-3">
			<Button
				label="Apply Now"
				href={job.applicationUrl}
				target="_blank" variant="primary"
			/>
			<Button
				label="Read the position description" variant="secondary"
				href={job.positionDescriptionUrl}
				target="_blank"
			/>
		</div>

		<Heading level={2} variant="sm" class="font-medium stretch uppercase">At a glance</Heading>
		<ul>
			<li><strong>Job applications close:</strong> {Intl.DateTimeFormat("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Australia/Sydney",
  }).format(Date.parse(job.applicationsClose))}</li>
			<li>{@html job.atAGlance.join("</li><li>")}</li>
		</ul>

		<Heading level={2} variant="sm" class="font-medium stretch uppercase">About the gig</Heading>
		{@html job.aboutTheGig}

		<Heading level={2} variant="sm" class="font-medium stretch uppercase">Who this role is for</Heading>

		{@html job.whoThisRoleIsFor}


		<Heading level={2} variant="sm" class="font-medium stretch uppercase">About SydneyMusic</Heading>
		<p>
			SydneyMusic.net is a not-for-profit organisation that maintains a local, 100% human researched
			and edited gig guide to help solve the problem of discoverability for our grassroots music
			community. The guide is available through our <a href="https://sydneymusic.net">website</a>,
			<a href="https://instagram.com/sydneymusicdotnet">Instagram Stories</a>, an
			<a
				href="https://sydneymusic.us17.list-manage.com/subscribe?u=33fe15202bc9075111c10636a&amp;id=08cf9e0f0b"
				>e-mail newsletter</a
			>
			and a <a href="https://sydneymusic.net/playlist">streaming playlist</a>.
		</p>

		<Heading level={2} variant="sm" class="font-medium stretch uppercase">Got questions?</Heading>

		<p>
			Talk to Joe Hardy at
			<a href="mailto:joe@sydneymusic.net">joe@sydneymusic.net</a>
		</p>
	</div>


	
	<div class="w-48">
		<Button
			label="Apply Now" variant="primary"
			href="{job.applicationUrl}"
			target="_blank"
		/>
	</div>

	<div class="space-y-3">
		<img src="/Logo-NSWGovSoundNSW.png" class="w-48" />
		<div class="text-xs">This role is entirely funded by a Contemporary Music Local Audience Development Grant from Sound NSW.</div>
	</div>
</div>