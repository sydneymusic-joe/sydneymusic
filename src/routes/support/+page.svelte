<script>
	import Button from '$lib/components/button.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import DonationForm from '$lib/components/donation-form.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Paragraph from '$lib/components/paragraph.svelte';
	import Support from '$lib/components/support-page.svelte';
</script>

<SeoSocial title="Support Sydney's most comprehensive gig guide" />
	<Support />

<div class="max-w-5xl px-5 mx-auto mt-10 pb-24 space-y-8 md:space-y-10 lg:space-y-12">

	<div class="text-center space-y-3">
		<div class="italic text-4xl">84.3% of surveyed readers say they see more live music because of the SydneyMusic gig guide</div>
		<div class="italic text-gray-600">from SydneyMusic’s annual survey (363 respondents, February 2026)</div>
	</div>

	<div class="support grid grid-cols-1 md:grid-cols-2 gap-x-10 md:gap-x-20 gap-y-20">
		<div>
			<Heading level={3} variant="lg">Wall of Legends</Heading>
			<Paragraph>
				See the individuals and organisations that are keeping SydneyMusic running:
			</Paragraph>
			<Button
				variant="secondary"
				label="View the Wall"
				href="/support/wall-of-legends"
				target="_blank"
			/>
		</div>
		<div>
			<Heading level={3} variant="lg">Buy some merch</Heading>
			<Paragraph>
				Represent your favourite local gig guide while looking awesome and supporting us
				financially.
			</Paragraph>
			<Button
				variant="secondary"
				label="Visit our shop"
				href="https://store.sydneymusic.net"
				target="_blank"
			/>
		</div>
		<div>
			<Heading level={3} variant="lg">Commercial Sponsorship</Heading>
			<Paragraph>
				Become a commercial sponsor and help us keep SydneyMusic running:
			</Paragraph>
			<Button
				variant="secondary"
				label="Become a sponsor"
				href="/support/commercial"
				target="_blank"
			/>
		</div>
		<div>
			<Heading level={3} variant="lg">License our API</Heading>
			<Paragraph>
				Get access to our high fidelity feed covering all of Sydney's live music.
			</Paragraph>
			<Button
				variant="secondary"
				label="License our API"
				href="/api-license"
				target="_blank"
			/>
		</div>
	</div>

	<div class="border-t border-gray-400 pt-10 mt-10 flex flex-col gap-y-5">
		<Heading level={3} variant="lg" class="mb-0">SydneyMusic.net will always remain free</Heading>

		<div class="flex flex-col sm:flex-row gap-y-8">
			<div class="basis-1/2">
				<p>Your support helps with:</p>
				<ul class="list-disc list-outside ml-4">
					<li>Ongoing basic operational costs</li>
					<li>Fairly paying researchers and writers</li>
					<li>Improving our guide</li>
					<li>Developing a sustainability model</li>
				</ul>
			</div>
			<div class="basis-1/2 md:pr-32">
				<p>
					You can also support us by sharing the site, sending in blurbs or gig listings, or
					volunteering your expertise and/or time.
				</p>
			</div>
		</div>
		<div class="flex flex-row items-start">
			<Button variant="secondary" href="/about" label="Learn more about SydneyMusic.net"></Button>
		</div>
	</div>
</div>
