<script>
	import Button from '$lib/components/button.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import DonationForm from '$lib/components/donation-form.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Paragraph from '$lib/components/paragraph.svelte';
</script>	

<SeoSocial title="Support Sydney's most comprehensive gig guide" />
<div class="max-w-5xl px-5 mx-auto mt-10 pb-24 space-y-8 md:space-y-10 lg:space-y-12">
	<div class="flex flex-col lg:flex-row-reverse lg:items-end">
		<img src="/hero-character.png" class="w-full h-auto max-w-64 my-auto" />
		<div>
			<h1 class="text-lg lg:text-3xl font-semibold mb-4">
				SydneyMusic.net needs your support.<br />
				Help keep us running, support the scene, and get more people out to shows.
			</h1>
			<p>
				Sydneymusic.net is a not-for-profit initiative, built and maintained by a small team of
				volunteers and music lovers. We don't receive any government funding or run advertising - we
				run this site because we love this city and its incredible music scene.
			</p>
		</div>
	</div>

	<DonationForm
		showPromotionalContent={false}
		align="left"
		shadow={false}
	/>

	<div class="support grid grid-flow-row sm:grid-flow-col gap-x-8 md:gap-x-24 gap-y-8">
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
	</div>

	<div class="border-t border-black">
		<h3 class="font-bold text-center my-10">SydneyMusic.net will always remain free</h3>

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
	</div>

	<div class="flex place-content-center">
		<div>
			<Button variant="secondary" href="/about" label="Learn more about SydneyMusic.net"></Button>
		</div>
	</div>
</div>
