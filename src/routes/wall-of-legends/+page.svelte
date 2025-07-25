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
	<div class="grid md:grid-cols-[2fr_1fr] gap-12 lg:gap-20">
		<!-- left col - Wall of Legends -->
		<div class="space-y-12">
			<div class="pt-10">
				<Heading level={1} variant="2xl" class="-mb-2">Wall of Legends</Heading>
				<Paragraph variant="2xl" class="text-gray-700">Class of FY26</Paragraph>
			</div>

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

		<div class="pt-10 lg:pt-40 space-y-24">
			<div class="">
				<Heading level={2} variant="lg" class="notch-left">Thank you</Heading>

				<Paragraph variant="sm">
					Thank you to the incredible organisations, businesses and individuals that have made a
					commitment to support SydneyMusic in the upcoming FY26 year.
				</Paragraph>

				<Paragraph variant="sm">
					Your support helps us to "connect Sydney with its scene" and get more people out seeing
					local, community-first underground live music.
				</Paragraph>

				<Paragraph variant="sm">
					SydneyMusic.net is a much loved resource, read by over 25,000 people every month. We
					aspire to be Sydney's most accurate and comprehensive gig guide: human-edited,
					fact-checked, peer-reviewed and given to you, the reader, as the most high-quality source
					of intel on exactly what is going on in the soup.
				</Paragraph>

				<Paragraph variant="sm">
					This page is under construction. We are in the process of building a sponsorship model to
					help us sustain SydneyMusic in the year ahead, but if you want to get in early you can
					beat the queue and get in touch with us right now to start a conversation.
				</Paragraph>

				<Paragraph variant="sm">
					We are a not-for-profit organisation — founded in March 2022, registered with the ACNC in
					November 2022, and all donations to our organisation are tax deductible.
				</Paragraph>
			</div>

			<div class="space-y-12">
				<div class="space-y-6">
					<Heading level={3} variant="md">Commercial sponsorship enquiries</Heading>
					<Paragraph variant="sm">
						If you are a business or organisation and would like to express your interest in our
						upcoming commercial sponsorship program:
					</Paragraph>
					<Button
						href="mailto:sponsorships@sydneymusic.net"
						variant="outline"
						size="md"
						class="inline-block"
						label="Get In Touch"
					/>
				</div>

				<div class="space-y-6">
					<Heading level={3} variant="md">API Feed</Heading>
					<Paragraph variant="sm">
						Our entire gig guide is available as an API feed by license agreement.
					</Paragraph>
					<Paragraph variant="sm">
						Getting access to our data gives you incredibly comprehensive, high quality information
						about every gig we could find taking place across Greater Sydney, vetted to maximum
						accuracy by humans — covering backyard shows, art spaces and warehouses through to
						commercial live music at all levels.
					</Paragraph>
					<Paragraph variant="sm">
						Our data contains 16,000 live music events in a simple but robust data set, giving you
						the power to explore our grassroots creative ecosystem over the last 3+ years with high
						fidelity but accessible data.
					</Paragraph>
					<Paragraph variant="sm">
						Or if you want you can just use it to start your own gig guide with our data and run ads
						on it. It's up to you!
					</Paragraph>
					<Paragraph variant="sm">
						For licensing enquiries, contact Joe Hardy at <a
							href="mailto:joe@sydneymusic.net"
							class="underline font-medium">joe@sydneymusic.net</a
						>
					</Paragraph>
				</div>
			</div>
		</div>
	</div>
</Container>
