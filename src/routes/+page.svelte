<script>
	import Event from '$lib/components/event.svelte';
	import Read from '$lib/components/read.svelte';
	import Button from '$lib/components/button.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import { createCalendarLink } from '$lib/globals.mjs';
	import Heading from '$lib/components/heading.svelte';
	import Paragraph from '$lib/components/paragraph.svelte';
	import { mds } from '../lib/donorstats.js';
	import DonationForm from '$lib/components/donation-form.svelte';

	let { data } = $props();
</script>

<SeoSocial />

<div class="max-w-5xl px-5 mx-auto pb-24 space-y-20">

	<!-- First section -->
	<div class="space-y-10">
		<div class="feature-thisweek space-y-8 md:pb-5 text-left">
			<div class="flex flex-col lg:flex-row-reverse gap-0 lg:items-stretch hero-bg">
				<div class="hero-xs w-full lg:w-1/2 lg:h-full">
					<img src="/canman-homehero@1x.png" class="block lg:hidden m-0" alt="" />
				</div>
				<div
					class="bg-white w-full lg:w-1/2 flex flex-col justify-end items-start py-8 gap-4 lg:mt-32"
				>
					<h1 class="text-4xl">
						<span class="text-ruby italic">{data.gigs.thisWeek} shows</span> waiting to be discovered
						in Sydney this week.
					</h1>
					<Button variant="secondary" href="/gig-guide" label="Read the full guide" />
				</div>
			</div>
		</div>
	<div class="bg-merchbrown p-5 text-white space-y-2 flex flex-col xs:items-center">
		<div class="guide-divider" style="margin-bottom : 0rem">
			<div></div>
			<div class="flex flex-row justify-center gap-x-3 mx-3">
				<div><img src="/banksia.svg" class="h-12" alt="Pixelated Banksia icon" /></div>
				<Heading class="text-ruby uppercase font-normal text-center"><div class="stretch leading-[1.9] md:leading-[1.3]">Support us</div></Heading>
				<div><img src="/padlock.svg" class="h-12" alt="Pixelated unlocked padlock icon" /></div>
			</div>
			<div></div>
		</div>

		<div class="text-center  space-y-2">
		<p><strong class="font-semibold">The gig guide critically needs your support before June 30.</strong></p>
		<p>We have raised <strong class="text-ruby">{mds.totalFundedPercent}%</strong> of our monthly recurring budget for FY27. Can you help us get the rest of the way?</p>
		</div>
		<div class="flex flex-col xs:flex-row gap-2 pt-5">
		<Button variant="primary" label="Make a donation" href="https://square.link/u/eS7bgm8M" target="_blank"></Button>
		<Button variant="secondary" label="Learn more" href="/support"></Button>
		</div>
		<p class="text-sm italic">Donations of $2 and over are tax deductible</p>
	</div>


		<div class="grid md:grid-cols-2 gap-10 gap-y-20">
			<!-- left col -->
			<div class="space-y-10">
				<Heading level={1} variant="lg" class="notch-left">Sydney live music this week</Heading>

				<div class="space-y-10 sm:pr-20 lg:pr-28">
					{#each data.gigs as { label, items }, i}
						<!-- Only get the next 2 days -->
						{#if i < 2}
							<div class="space-y-5">
								<Heading level={3} variant="md" class="notch-left">
									<span class="font-bold text-ruby">{label.split(':')[0]}</span>
									<span class="font-normal text-graphite">{label.split(':')[1]}</span>
								</Heading>
								<div>
									{#each items as event, i}
										{#if i < 3}
											<div class="pl-3 py-2">
												<Event
													name={event.promotedName}
													gigId={event.id}
													performers={event.performersListJson}
													calendarLink={createCalendarLink(event)}
													venue={event.venue}
													website={event.ticketUrl}
													time={event.time}
													initials={event.furtherInfoContributorInitials}
												/>
											</div>
										{/if}
									{/each}
									{#if items.length > 3}
										<a
											class="text-gray-700 text-sm my-0 pl-3 block italic hover:underline"
											href="/gig-guide"
										>
											+ {items.length - 3} more
										</a>
									{/if}
								</div>
							</div>
						{/if}
					{/each}
					<Button label="More Gigs" href="/gig-guide" variant="outline" />
				</div>
			</div>

			<!-- Right col -->
			<div class="space-y-10">
				<Heading level={2} variant="md" class="notch-left mt-2">Latest Reads</Heading>
				<div class="space-y-5 sm:pr-20 lg:pr-20">
					{#each data.reads as { headline, excerpt, slug }}
						<a href="/reads/{slug}" class="block">
							<Read {headline} body={excerpt} />
						</a>
					{/each}
					<Button label="More Reads" href="/reads" variant="outline" />
				</div>
			</div>
		</div>
	</div>

	<div class="bg-gray-200 text-sm p-5 border-b-2 grid gap-4 grid-rows-2 md:grid-rows-none md:grid-cols-2 md:grid-flow-col">
		<div>
		<Heading level={2} variant="md" class="stretch font-normal mt-3 mb-2 uppercase"
			>New merch shipping now!</Heading
		>
		<Paragraph class="mb-0 mt-5"
			>If you like what we do, you can support the site by making a donation or buying some merch
			through our new online store.</Paragraph
		>
		<Button class="mt-3" label="Visit store" href="https://store.sydneymusic.net" />
		</div>
		<div class="bg-[url(/merch-tees.jpg)] bg-cover bg-center">
			
		</div>
	</div>

	<!-- Second section -->
	<div class="space-y-10">
		<div class="grid md:grid-cols-2 gap-5">
			<!-- left col -->
			<div class="space-y-6 mb-20 md:mb-0">
				<Heading level={2} variant="md" class="notch-left">Welcome to SydneyMusic!</Heading>
				<div class="text-base leading-relaxed sm:pr-20 lg:pr-28 space-y-4 px-3">
					<p class="font-bold">
						This site exists to promote the community that music creates, with a local focus on
						Sydney, Australia.
					</p>
					<p>
						At its heart is a simple, no-nonsense gig guide that does exactly what it says on the
						tin. We’ll also be publishing the occasional bit of writing, including commentary on
						cultural trends, music reviews, opinion pieces, and round-ups from contributing writers.
						We also have a Discord, to help foster connections, again in the hope that it will make
						it easier to find Sydney’s music community and find your place in it.
					</p>
					<Button label="Read more" href="/about" />
				</div>
			</div>

			<div class="space-y-6">
				<Heading level={2} variant="md" class="notch-left">Join our Discord!</Heading>

				<div class="text-base leading-relaxed sm:pr-20 lg:pr-28 space-y-4 px-3">
					<p>
						<strong>We have a Discord</strong> (online chat server), so we can have a more dynamic and
						discussion-oriented place for Sydney's music community to meet. It's about as Web 2.0 as
						it gets around here.
					</p>
					<img src="/discord-logo-wordmark-black.svg" alt="Discord logo" height="80" width="292" />
					<Button label="Join our Discord!" href="https://discord.gg/jv8VKrXymJ" />
				</div>
			</div>
		</div>
	</div>
</div>
