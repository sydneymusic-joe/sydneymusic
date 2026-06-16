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
					<p>The tote will be raffled at our free <a href="https://events.humanitix.com/sydneymusic-fy27-fundraiser-and-merch-launch-party" target="_blank" class="underline">Merch Launch &amp; Fundraiser Party</a> in Chippendale on the <strong>17th of June, 2026</strong>. <a href="https://events.humanitix.com/sydneymusic-fy27-fundraiser-and-merch-launch-party" class="underline" target="_blank">RSVP now!</a></p>
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
						<li><strong>BELIEVE — Nature’s God</strong><br /><span class="text-sm">Pre-release test pressing • Album out August 21!</span></li>
						<li><strong>Youth Group — “Skeleton Jar” badges</strong><br /><span class="text-sm">3x original badges from 2004</span></li>
						<li><strong>sleepmakeswaves — ...and so we destroyed everything</strong><br /><span class="text-sm">Pre-release test pressing of 15th anniversary remaster (2LP)</span></li>
						<li><strong>The Buoys — signed merch</strong><br /><span class="text-sm">“I Want You” longsleeve t-shirt</span></li>
						<li><strong>Dougal Gorman — Crowded</strong><br /><span class="text-sm">Live music photography book • 1 of 75</span></li>
						<li><strong>Lo Carmen & The Great Beyond — Transatlantic Light</strong><br /><span class="text-sm">Limited pressing of 200</span></li>
						<li><strong>Ben Lee & Ione Skye</strong><br /><span class="text-sm">Weirder Together “one-of-a-kind” t-shirt</span></li>
						<li><strong>Red Riders — “Replica Replica” tee</strong><br /><span class="text-sm">Original t-shirt from 2006!</span></li>
						<li><strong>Palms — multiple items</strong><br /><span class="text-sm">Palms hoodie, “Intensity Sunshine” LP and “Crazy Rack” album t-shirt</span></li>
						<li><strong>Yasmina Sadiki — Sydney Opera House items</strong><br /><span class="text-sm">1x signed poster for May 2025 Opera House show<br />1x copy of “Singles” 3-track CD EP</span></li>
					</ul>
					<p>Want to contribute? <a href="mailto:contact@sydneymusic.net" class="underline">Get in touch</a> for more information.</p>
				</div>

				<Heading variant="md" class="uppercase font-normal stretch">Also up for grabs ...</Heading>

				<div class="space-y-3">
					<p>Thank you to these labels for donating additional packs to be won in the raffle:</p>
					
					<ul class="space-y-3">
						<li><strong>Last Ride Records — 4x releases</strong><br /><span class="text-sm">SPEED — All My Angels 12” EP (clear w/ metallic gold)<br />Histamine — Quality of Life CD<br />Phantoms — All The Devils Are Here 7"<br />No Apologies — Survival 12” LP</span></li>
						<li><strong>EMI Music (Universal) Australia — 3x releases</strong><br /><span class="text-sm">Calum Hood — ORDER chaos ORDER 12” LP<br />Nick Ward — House With The Blue Door 12” LP <br />Meg Mac — It’s My Party<br />Alison Wonderland — Ghost World t-shirt</span></li>
						<li><strong>Sony Music Australia — 2x releases</strong><br /><span class="text-sm">The Kid LAROI — The First Time (deluxe 12” LP)<br />MAY-A — Apricots 7” (white)</span></li>
					</ul>

					<p>But wait! There’s more:</p>
					<ul class="space-y-3">
						<li><strong>Jimmy Barnes and co prize pack</strong><br /><span class="text-sm">4x books by Jimmy Barnes: “Highways and Byways”, “Killing Time”, “Working Class Man” and “Rosie The Rhinocerous”<br />1x book by Jimmy & Janes Barnes: “Where The River Bends”<br />1x Elly-May Barnes “No Good” CD<br />1x Jimmy Barnes “Flesh And Blood” CD<br />1x Don Walker “Lightning In A Clear Blue Sky” CD</span></li>
						<li><strong>A family pass to see and meet The Wiggles</strong><br /><span class="text-sm">Donated by Murray Cook</span></li>
						<li><strong>Petersham Bowling Club merch</strong><br /><span class="text-sm">1x PBC Hat<br />1x PBC stubby cooler</span></li>
						<li><strong>2x SydneyMusic.net merch packs featuring:</strong><br /><span class="text-sm">Our LAST EVER “Every Corner” tote bags<br />1x 2026 “Hot Shows” t-shirt<br />1x 2026 “Hot Shows” fan<br />Full set of 2026 stickers including “Hearts”, “Hot Shows“ and the “Pixels” bumper sticker</span></li>
					</ul>
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