<script>
	import Button from '$lib/components/button.svelte';
	import Container from '$lib/components/container.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Paragraph from '$lib/components/paragraph.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import SponsorAppeal from '$lib/components/sponsor-appeal.svelte';
	import Sponsor from '$lib/components/sponsor.svelte';
	import TimelineItem from '$lib/components/timeline-item.svelte';
	import {mds} from '$lib/donorstats.js';

	export let data;
  	const donorStats = mds;
</script>

<SeoSocial title="Wall of Legends" />

<Container>
		<Heading class="text-center mt-8 mb-8" variant="2xl">The Wall of Legends</Heading>
		<div class="mt-5">
			<div class="flex flex-col md:flex-row items-center md:items-end justify-center">
				<img src="/canman-flagman-clifftheglyph.png" class="max-w-40 md:max-w-80 object-contain" alt="Can Man with a flag with Cliff the Glyph on it" />
				<div class="p-5 space-y-3 md:max-w-[50%]">
					<Heading level={1} variant="xl" class="mb-2 normal-case">We exist to <span class="text-ruby">connect Sydney with its scene</span></Heading>
					<p><strong>Our mission is to get more of Sydney out supporting local live music and the artists that make it.</strong></p>
					<p>We know that the best way to make live music more sustainable is to get more people out enjoying it, and the best way to do that is by making it easier to find — in every corner of our city.</p>
					<p>Our guide is read by over 25,000 people every month, but it takes 50 hours of human effort every week to curate and compile the resource.</p>
					<p><strong>Help us keep this project alive:</strong></p>
					<div class="flex flex-col lg:flex-row gap-2">
						<Button size="lg" variant="primary" label="Become a Sponsor" href="/support/commercial/" />
						<Button size="lg" variant="outline" label="Make a Donation" href="/support" />
						<!-- <Button variant="outline" label="License our API" href="/api-license" /> -->
					</div>
				</div>
			</div>
			<div class="bg-white border-2 border-black border-solid">
			</div>

			<div class="max-w-xl mx-auto mt-8">

				<Heading class="text-center">The <a href="/gig-guide" class="text-ruby underline">gig guide</a> is made possible by ...</Heading>

			<div class="relative pl-8 space-y-8">
				<div class="absolute left-0 top-2 bottom-0 w-[1px] bg-gray-400"></div>

				<TimelineItem title="Our Readers" color="black">
					<div class="bg-gray-50 p-8 rounded-lg border border-gray-400 space-y-2 text-center">
					<Paragraph variant="sm">
						SydneyMusic is supported by <strong class="font-medium"> {donorStats.recurringDonorCount} readers</strong>
						that fund
						<strong class="font-medium"
							>{Math.round((donorStats.recurringBudgetPercent + Number.EPSILON) * 100) / 100}% of our monthly minimum viable budget</strong>
						.
					</Paragraph>
											<Button
							href="/support"
							variant="outline"
							size="md"
							class="inline-block"
							label="Become a Supporter"
						/>
					</div>

				</TimelineItem>

				<TimelineItem title="Platinum" color="#c5c4c2">
					<Sponsor logo="/logos/rode.svg" logoSize="lg" name="RØDE" href="https://rode.com">
						Thank you to <a
							href="https://rode.com"
							class="underline"
							target="_blank"
							rel="noopener noreferrer">RØDE</a
						>
						for providing anchor funding for
						<strong class="font-medium">20% of our minimum viable budget</strong>
					</Sponsor>
				</TimelineItem>

				<TimelineItem title="Gold" color="#e5c97b">
					<SponsorAppeal />
				</TimelineItem>

				<TimelineItem title="Silver" color="#e5e5e5">
					<Sponsor logo="/logos/heaps-normal.png" href="https://www.heapsnormal.com/" name="Heaps Normal">
						Thank you to <a href="https://www.heapsnormal.com/" target="_blank" class="underline">Heaps Normal</a> for a significant one-time donation that has enabled us to restart operations.
					</Sponsor>
				</TimelineItem>

				<TimelineItem title="Small Business Supporters" color="#777">
					<Sponsor logo="/logos/crosstalk.svg" href="https://www.crosstalkrecords.com/" name="Crosstalk Records">
						Thank you to <a href="https://www.crosstalkrecords.com/" target="_blank" class="underline">Crosstalk Records</a> for being our first Small Business Supporters.
					</Sponsor>
					<SponsorAppeal />
				</TimelineItem>

				<TimelineItem title="Individual Super Donors" color="#e02020">
					<div class="bg-gray-50 p-8 rounded-lg border border-gray-400 space-y-2 text-center">
						<Paragraph variant="sm">
							Donor pledges of $50/mo or greater for 1 year or one-off donations of $500 or greater
							are recognised on our Super Donor wall (if you want to be). Get in touch for bank
							details and receipt process:
						</Paragraph>
						<Button
							href="mailto:sponsorships@sydneymusic.net"
							variant="outline"
							size="md"
							class="inline-block"
							label="Get In Touch"
						/>
					</div>
				</TimelineItem>
			</div>

			<div class="space-y-12 mt-20 pt-12">
				<div>
					<Heading level={2} variant="lg" class="notch-left">Original Supporters</Heading>
					<Paragraph variant="md">
						We would not be here without the following organisations and individuals that got us
						through our 2024-2025 "bike shop" era:
					</Paragraph>
				</div>

				<div class="relative pl-8 space-y-8">
					<div class="absolute left-0 top-2 bottom-0 w-[1px] bg-gray-400"></div>

					<TimelineItem title="Anchor Supporters" color="#e5c97b">
						<Sponsor logo="/logos/neilson.png" href="https://www.neilson.org.au/" name="Neilson Foundation"></Sponsor>
					</TimelineItem>

					<TimelineItem title="Fundraisers thanks to" color="#777">
						<div class="space-y-2">
							
							<Sponsor logo="/logos/doc-sprocket.svg" logoSize="lg" href="https://www.docsprocket.com.au/" name="Doc Sprocket Cycle Workshop"></Sponsor>
							<Sponsor logo="/logos/crosstalk.svg" logoSize="lg" href="https://www.crosstalkrecords.com" name="Crosstalk Records, Leichhardt"></Sponsor>
							<Sponsor logo="/logos/pbc.png" logoSize="lg" href="https://thepbc.org.au/" name="Petersham Bowling Club"></Sponsor>
							<Sponsor logo="/logos/mbc.png" logoSize="lg" href="https://themusicandboozeco.com.au/" name="Music & Booze Co"></Sponsor>
							<Paragraph>Adam Lewis & Dom Alessio</Paragraph>
							<Paragraph><a href="https://www.instagram.com/monkeydotband/?hl=en" class="underline text-ruby">Monkey Dot</a> & <a href="https://www.instagram.com/inmortal.swag/?hl=en" class="underline text-ruby">Inmortality</a></Paragraph>
						</div>
					</TimelineItem>
				</div>
			</div>
			</div>
		</div>
</Container>
