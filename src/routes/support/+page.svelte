<script>
	import Button from '../../lib/components/button-dark.svelte';
</script>
<div class="max-w-5xl px-5 mx-auto mt-10 pb-24 space-y-20">
	<div class="flex flex-row">
		<div>
			<h1 class="text-3xl font-bold">SydneyMusic.net needs your support.</h1>
			<h1 class="text-3xl font-bold">Help keep us running, support the scene, and get more people out to shows.</h1>
			<p class="mt-8">Sydneymusic.net is a not-for-profit initiative, built and maintained by a small team of volunteers and music lovers. We don't receive any government funding or run advertising - we run this site because we love this city and its incredible music scene.</p>
		</div>
		<div><img src="/hero-character.png" width="400" /></div>
	</div>

	<div class="cta support grid grid-flow-row sm:grid-flow-col gap-x-8 md:gap-x-24 gap-y-8">
		<div>
			<h3>Make a donation</h3>
			<p>Make a one off or recurring donation today. Any small amount helps keeps us running.</p>
			<Button variant="primary" label="Make a donation" href="https://square.link/u/eS7bgm8M" target="_blank" />
		</div>
		<div>
			<h3>Become a monthly supporter</h3>
			<p>Subscribe to our Patreon for as little as $5 per month. Access mixtapes, merch discounts and more goodies.</p>
			<Button variant="secondary" label="Subscribe to Patreon" href="https://patreon.com/sydneymusic" target="_blank" />
		</div>
		<div>
			<h3>Buy some merch</h3>
			<p>Represent your favourite local gig guide while looking awesome and supporting us financially.</p>
			<Button variant="secondary" label="Visit our shop" href="https://store.sydneymusic.net" target="_blank" />
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
				<p>You can also support us by sharing the site, sending in blurbs or gig listings, or volunteering your expertise and/or time.</p>	
			</div>
		</div>
	</div>

	<div class="flex place-content-center cta">
		<div>
			<Button variant="secondary" label="Learn more about SydneyMusic.net"></Button>
		</div>
	</div>
</div>