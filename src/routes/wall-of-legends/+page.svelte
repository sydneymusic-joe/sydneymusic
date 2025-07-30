<script>
	import SeoSocial from '$lib/components/seo-social.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Paragraph from '$lib/components/paragraph.svelte';
	import Container from '$lib/components/container.svelte';
	import TimelineItem from '$lib/components/timeline-item.svelte';
	import SponsorAppeal from '$lib/components/sponsor-appeal.svelte';
	import Sponsor from '$lib/components/sponsor.svelte';
	import Button from '$lib/components/button.svelte';

	const data = {
		readers: 824,
		readersBudget: 17
	};
</script>

<SeoSocial title="Wall of Legends" />

<Container>
		<div class="mt-5">
			<div class="flex flex-col md:flex-row items-end justify-center">
				<img src="/canman-flagman-clifftheglyph.png" class="max-w-40 md:max-w-80 object-contain" alt="Can Man with a flag with Cliff the Glyph on it" />
				<div class="p-5 space-y-5 md:max-w-[50%]">
					<Heading level={1} variant="xl" class="-mb-2 normal-case">We exist to <span class="text-ruby">connect Sydney with its scene</span></Heading>
					<p><strong>Since 2022 we've researched and published information on more than 16,000 gigs.</strong></p><p>Our guide is read by over 25,000 people every month — we exist to get more people out supporting local live music.</p>
					<Button variant="outline" label="Become a Sponsor"> </Button>
					<Button variant="outline" label="Data API, Insights & Analysis, and Other Services"> </Button>
				</div>
			</div>
			<div class="bg-white border-2 border-black border-solid">
			</div>

			<Heading class="text-center my-5" variant="2xl">The Wall of Legends</Heading>

				<Heading>This project is made possible by ...</Heading>

			<div class="relative pl-8 space-y-8">
				<div class="absolute left-0 top-2 bottom-0 w-[1px] bg-gray-400"></div>

				<TimelineItem title="Our Readers" color="black">
					<Sponsor>
						SydneyMusic is supported by <strong class="font-medium"> {data.readers} readers</strong>
						that fund
						<strong class="font-medium"
							>{data.readersBudget}% of our monthly minimum viable budget</strong
						>.
					</Sponsor>
				</TimelineItem>

				<TimelineItem title="Platinum" color="#c5c4c2">
					<Sponsor logo="/logos/rode.svg" logoSize="lg">
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
					<Sponsor logo="/logos/heaps-normal.png"></Sponsor>
				</TimelineItem>

				<TimelineItem title="Small Business Supporters" color="#777">
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
						With heartfelt thanks to the following organisations and individuals for getting us
						through our FY25 "bike shop" era:
					</Paragraph>
				</div>

				<div class="relative pl-8 space-y-8">
					<div class="absolute left-0 top-2 bottom-0 w-[1px] bg-gray-400"></div>

					<TimelineItem title="Key Era Anchors" color="#e5c97b">
						<Paragraph>Nielson Foundation</Paragraph>
					</TimelineItem>

					<TimelineItem title="Thank you to" color="#e5e5e5">
						<Paragraph>APRA AMCOS</Paragraph>
					</TimelineItem>

					<TimelineItem title="Fundraisers thanks to" color="#777">
						<div class="space-y-2">
							<Paragraph>Doc Sprocket Cycle Workshop</Paragraph>
							<Paragraph>Crosstalk Records</Paragraph>
							<Paragraph>Adam Lewis & Dom Alessio</Paragraph>
							<Paragraph>Petersham Bowling Club</Paragraph>
							<Paragraph>Monkey Dot & Inmortality</Paragraph>
							<Paragraph>Jack Rule & Music and Booze Co</Paragraph>
						</div>
					</TimelineItem>
				</div>
			</div>
		</div>
</Container>
