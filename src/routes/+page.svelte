<script>
	import Event from '$lib/components/event.svelte';
	import Read from '$lib/components/read.svelte';
	import Button from '../lib/components/button.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import { createCalendarLink } from '$lib/globals.mjs';
	import PromotionButton from '../lib/components/promotion-button.svelte';

	let { data } = $props();
</script>

<SeoSocial />

<div class="max-w-5xl px-5 mx-auto space-y-20 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<div class="feature-thisweek space-y-8 md:pb-5 text-left prose">
			<div class="flex flex-col lg:flex-row-reverse gap-0 lg:items-stretch hero-bg">
				<div class="hero-xs w-full lg:w-1/2 lg:h-full">
					<img src="/canman-homehero@1x.png" class="block lg:hidden m-0" alt="" />
				</div>
				<div class="bg-white w-full lg:w-1/2 flex flex-col justify-end items-start py-8 gap-4 lg:mt-32">
					<p class="bigtext">
						<span class="text-ruby">{data.gigs.thisWeek} shows</span> waiting to be discovered in Sydney
						this week.
					</p>
					<Button href="/gig-guide" label="Read the full guide" />
				</div>
			</div>
		</div>

		<div class="grid md:grid-cols-2 gap-5 gap-y-20">
			<!-- left col -->
			<div class="space-y-10">
				<h1 class="notch-left text-xl">Sydney live music this week</h1>

				<div class="space-y-10 sm:pr-20 lg:pr-28">
					{#each data.gigs as { label, items }, i}
						<!-- Only get the next 2 days -->
						{#if i < 2}
							<div class="space-y-5">
								<h3 class="notch-left text-lg">
									<span class="font-bold text-ruby">{label.split(':')[0]}</span>
									<span class="font-normal text-graphite">{label.split(':')[1]}</span>
								</h3>
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
					<Button label="More Gigs" href="/gig-guide" />
				</div>
			</div>

			<!-- Right col -->
			<div class="space-y-10">
				<h1 class="notch-left text-xl">Latest Reads</h1>
				<div class="space-y-10 sm:pr-20 lg:pr-28">
					{#each data.reads as { headline, excerpt, slug }}
						<a href="/reads/{slug}" class="block">
							<Read {headline} body={excerpt} />
						</a>
					{/each}
					<Button label="More Reads" href="/reads" />
				</div>
			</div>
		</div>
	</div>

	<div class="home-storelink rounded bg-slate-200 text-sm p-5 border-b-2">
		<p class="prose max-w-none">
			<strong>The SydneyMusic store is now open!</strong><br />If you like what we do, you can
			support the site by making a donation or buying some merch through
			<a href="https://store.sydneymusic.net">our new online store</a>.
		</p>
	</div>

	<!-- Second section -->
	<div class="space-y-10">
		<div class="grid md:grid-cols-2 gap-5">
			<!-- left col -->
			<div class="space-y-6 mb-20 md:mb-0">
				<h2 class="notch-left text-xl">Welcome to SydneyMusic!</h2>
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
				<h2 class="notch-left text-xl">Join our Discord!</h2>

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
