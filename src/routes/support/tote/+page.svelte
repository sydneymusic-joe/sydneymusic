<script>
	import Button from '$lib/components/button.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import Heading from '$lib/components/heading.svelte';
	import { mds } from '../../../lib/donorstats.js';
</script>

<SeoSocial title="SydneyMusic FY27 Fundraiser" />

<div class="bg-merchbrown">
	<div class="flex flex-col md:flex-row">
		<div class="min-h-[300px] flex flex-col p-12 space-y-5">
			<video controls class="mx-auto aspect-9/16 h-full max-h-[500px]" poster="/video/PartyDozen-thumb.png">
				<source src="/video/PartyDozen.webm" type="video/webm" />
			</video>
			<Button variant="primary" label="E-mail us to contribute!" href="mailto:contact@sydneymusic.net" />
		</div>
		<div class="flex-1 text-white p-12 flex items-center">
			<div class="space-y-5">
				<Heading class="text-2xl stretch">The ultimate Sydney music tote bag!</Heading>
				<p>We’ve got the <strong>last-ever Can Man tote bag from our first merch drop in 2022</strong>.</p>
				<p>In the next few weeks we’re going to fill it with donated items from Sydney artists — creating an incredible one-of-a-kind collection for one lucky winner.</p>
				<p>The tote will be raffled at a very special event soon — stay tuned for more info!</p>
				<p>Thank you to <strong>Party Dozen</strong> for kicking things off!</p>
				<Heading class="text-xl stretch">What’s in the bag?</Heading>
				<p>We’ll keep updating this list as we go. So far we have:</p>
				<ul>
					<li><strong>Party Dozen — The Invisible Man</strong><br /><span class="text-sm">Vinyl LP • Original pressing • Last copy of 275</span></li>
				</ul>
				<p>Want to contribute? <a href="mailto:contact@sydneymusic.net" class="underline">Get in touch</a> for more information.</p>
				<Heading class="text-xl stretch">Support SydneyMusic!</Heading>
				<p><strong>Sydney’s most comprehensive gig guide needs your help!</strong></p>
				<p>We need to raise $30,000 to help cover our operating expenses for the first half of FY27.</p>
				<Button variant="primary" label="Make a donation" />
				<Button variant="secondary" label="Buy some merch" />
			</div>
		</div>
	</div>
</div>