<script>
	import Button from '$lib/components/button.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import Heading from '$lib/components/heading.svelte';
	import { mds } from '../../../lib/donorstats.js';
</script>

<SeoSocial title="FY27 Fundraiser: The Ultimate Sydney Music Tote Bag" description="SydneyMusic needs to raise funds for FY27. We’re putting together the ultimate Sydney music tote bag to keep the gig guide online!" image="/pdtote-og.jpg" />

<div class="bg-merchbrown">
	<div class="flex flex-col md:flex-row">
		<div class="min-h-[300px] flex flex-col p-12 space-y-5">
			<video controls class="mx-auto aspect-9/16 h-full max-h-[500px]" poster="/video/PartyDozen-thumb.png">
				<source src="/video/PartyDozen.webm" type="video/webm" />
			</video>
			<Button variant="primary" label="E-mail us to contribute!" href="mailto:contact@sydneymusic.net" />
		</div>
		<div class="flex-1 text-white p-12 flex items-center">
			<div class="space-y-8">
				<Heading class="text-2xl font-normal uppercase stretch leading-[1.0]">The ultimate Sydney music tote bag!</Heading>
				<div class="space-y-3">
					<p>We’ve got the <strong>last-ever Can Man tote bag from our first merch drop in 2022</strong>.</p>
					<p>In the next few weeks we’re going to fill it with donated items from Sydney artists — creating an incredible one-of-a-kind collection for one lucky winner.</p>
					<p>The tote will be raffled at our free <a href="https://events.humanitix.com/sydneymusic-fy27-fundraiser-and-merch-launch-party" target="_blank" class="underline">Merch Launch &amp; Fundraiser Party</a> in Chippendale on the <strong>3rd of June, 2026</strong>. <a href="https://events.humanitix.com/sydneymusic-fy27-fundraiser-and-merch-launch-party" class="underline" target="_blank">RSVP now!</a></p>
					<p>Thank you to <strong>Party Dozen</strong> for kicking things off!</p>
				</div>
				<Heading variant="md" class="uppercase font-normal stretch">What’s in the bag?</Heading>
				<div class="space-y-3">
					<p>We’ll keep updating this list as we go. So far we have:</p>
					<ul class="space-y-3">
						<li><strong>Party Dozen — The Living Man</strong><br /><span class="text-sm">Vinyl LP • Original pressing • Last copy of 275</span></li>
						<li><strong>Krystal Rivvers — Arora</strong><br /><span class="text-sm">Vinyl EP • Limited pressing of 200</span></li>
						<li><strong>Lady Lyon — Cub</strong><br /><span class="text-sm">Vinyl LP • with Teeth bandana</span></li>
						<li><strong>BAYANG x BRACT — REDBRICKGOTHIK</strong><br /><span class="text-sm">Vinyl LP • One of last copies of 150</span></li>
						<li><strong>KL(AÜS) — self-titled debut</strong><br /><span class="text-sm">Vinyl LP (transparent green) • Last copy of 250 • Castles In Space UK pressing</span></li>
						<li><strong>12 Point Buck — Slow Release</strong><br /><span class="text-sm">Vinyl LP (pink) • Last copy of 160</span></li>
					</ul>
					<p>Want to contribute? <a href="mailto:contact@sydneymusic.net" class="underline">Get in touch</a> for more information.</p>
				</div>
				<Heading variant="md" class="uppercase font-normal stretch">Support SydneyMusic!</Heading>
				<div class="space-y-3">
					<p><strong>Sydney’s most comprehensive gig guide needs your help!</strong></p>
					<p>We need to raise $30,000 to help cover our operating expenses for the first half of FY27.</p>
					<div class="flex flex-col gap-y-2 md:w-[50%]">
					<Button variant="primary" href="https://square.link/u/eS7bgm8M" label="Make a donation" />
					<Button variant="secondary" href="https://store.sydneymusic.net" label="Buy some merch" />
					<Button variant="secondary" href="/support" label="Learn more" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>