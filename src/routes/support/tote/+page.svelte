<script>
	import Button from '$lib/components/button.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
</script>

<SeoSocial title="SydneyMusic FY27 Fundraiser" />

<div class="bg-merchbrown">
	<div class="flex flex-col md:flex-row">
		<div class="min-h-[300px] flex p-12">
			<video controls class="mx-auto aspect-9/16 h-full max-h-[500px]" poster="/video/PartyDozen-thumb.png">
				<source src="/video/PartyDozen.webm" type="video/webm" />
			</video>
		</div>
		<div class="flex-1 text-white p-12 flex items-center">
			<div class="space-y-5">
				<h1 class="text-2xl stretch">The ultimate Sydney music tote bag!</h1>
				<p>The SydneyMusic gig guide is a labour of love that takes 60 hours per week to maintain. To keep the guide in good health, we need to raise our FY27 operational budget.</p>
				<p>To help raise funds for our survival, we have the <strong>last-ever Can Man tote bag from our first merch drop in 2022</strong>, and we’re filling it with an incredible one-of-a-kind collection of merch from Sydney artists &mdash; and it could be yours to win!</p>
				<p>Thank you to Party Dozen for kicking things off!</p>
				<h2 class="text-xl stretch">What’s in the bag?</h2>
				<p>We’ll keep updating this list as we go. So far we have:</p>
				<ul>
					<li><strong>Party Dozen — The Invisible Man</strong><br /><span class="text-sm">Vinyl LP • Original pressing • Last copy of 275</span></li>
				</ul>
				<p>Want to contribute? <a href="mailto:contact@sydneymusic.net" class="underline">Get in touch</a> for more information.</p>
				<Button variant="primary" label="Enquire about donating some merch" href="mailto:contact@sydneymusic.net" />
				<h2 class="text-xl stretch">Support SydneyMusic!</h2>
				<p><strong>Your gig guide needs your help!</strong></p>
				<Button variant="primary" label="Make a donation" />
				<Button variant="secondary" label="Buy some merch" />
			</div>
		</div>
	</div>
</div>