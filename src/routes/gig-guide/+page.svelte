<script>
	import Event from '$lib/components/event.svelte';
	import Button from '$lib/components/button.svelte';
	import Feedprompt from '../../lib/components/feedprompt.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import { createCalendarLink } from '../../lib/globals.mjs';
	import PlaylistPromo from '$lib/components/playlist.svelte';
	import PromotionButton from '../../lib/components/promotion-button.svelte';

	export let data;

	let gigCounter = 0;
	let whichPrompt = 0;
	const increment = () => {
		gigCounter++;
		return '';
	};
	const resetCounter = () => {
		if (gigCounter > 9) gigCounter = 0;
		return '';
	};
	const incrementDisplay = () => {
		whichPrompt++;
		return '';
	};
</script>

<SeoSocial title="Gig Guide" />

<div class="max-w-5xl px-5 mt-5 mx-auto overflow-x-hidden">
	<div
		class="flex relative border-b border-black border-dashed mb-7 pb-14 lg:pb-20 flex-col md:flex-row justify-between"
	>
		<div class="mt-5 md:mt-14">
			<div class="font-semibold text-[32px] leading-[1.75rem] sm:text-4xl sm:leading-8 lg:text-5xl">
				<h1>You’re on</h1>
				<h1>the Gig Guide</h1>
			</div>
			<p class="text-xs md:text-base max-w-40 sm:max-w-56 pt-2 sm:pt-5">
				If it’s out there, it’s in here.
			</p>
			<div class="prose max-w-44 sm:max-w-56 my-5">
				<p class="text-xs md:text-base">
					Last updated: <span class="">{data.lastUpdated}</span>
					<a href="/gig-guide/latest/" class="text-ruby">View latest updates</a>.
				</p>
			</div>
		</div>
		<div class="mt-5 md:pb-8 flex flex-col justify-end items-stretch pr-8 md:max-w-56">
			<p class="text-xs mb-2 md:mb-4 max-w-52">
				SydneyMusic.net is crowd-supported. Help us keep the Guide in peak condition!
			</p>
			<div class="flex gap-4 text-sm md:flex-col">
				<PromotionButton
					label="Become a supporter"
					href="https://store.sydneymusic.net"
					variant="primary"
				/>
				<PromotionButton
					label="make a donation"
					href="https://store.sydneymusic.net"
					variant="secondary"
				/>
			</div>
		</div>

		<picture
			class="absolute -top-2 -right-11 xs:right-0 sm:right-[5%] lg:right-[28%] md:right-[30%]"
		>
			<img
				src="/hero-character.png"
				alt="SydneyMusic.net mascot Can Man loves a gig"
				class="w-full max-w-52 xs:max-w-64 sm:max-w-72 md:max-w-[328px] lg:max-w-sm"
			/>
		</picture>
	</div>

	<div class="filterbox w-full my-5">
		<label for="toggle-freegigs" class="flex items-center cursor-pointer relative">
			<span class="mr-2">FREE GIGS ONLY</span>
			<input type="checkbox" id="toggle-freegigs" class="sr-only" />
			<div
				class="toggle-bg border border-black h-5 w-9 rounded-full"
				style="box-shadow: 1px 1px 0px 0px #000;"
			/>
		</label>
	</div>

	<!-- First section -->
	<div class="space-y-10">
		<div class="grid md:grid-cols-sidebar-right-wide">
			<!-- left col -->
			<div class="space-y-10 sm:pr-20">
				{#each data.gigs as month}
					<div class="guide-month space-y-10">
						<h3 class="notch-left text-lg lg:text-xl">
							{month.label}
						</h3>
						<div class="grid space-y-10">
							{#each month.items as { label, items }}
								<div class="relative day flex items-start">
									<div
										class="sticky top-10 grid text-center items-center justify-center pr-8 sm:pl-3 sm:pr-10 font-bold"
									>
										<p class="text-ruby font-semibold text-base sm:text-lg leading-none uppercase">
											{label.split(':')[1]}
										</p>
										<p class="text-3xl sm:text-4xl leading-none">{label.split(':')[0]}</p>
									</div>
									<div class="w-full">
										{#each items as event}
											<Event
												name={event.promotedName}
												gigId={event.id}
												performers={event.performersListJson}
												calendarLink={createCalendarLink(event)}
												venue={event.venue}
												website={event.ticketUrl}
												comment={event.furtherInfo}
												initials={event.furtherInfoContributorInitials}
												time={event.time}
												isFree={event.isFree}
											/>
											{increment()}
										{/each}
									</div>
								</div>
								{#if gigCounter > 9}
									<Feedprompt Index={whichPrompt} />
									{resetCounter()}
									{incrementDisplay()}
								{/if}
							{/each}
						</div>
					</div>
				{/each}
			</div>
			<!-- right col -->
			<div class="space-y-10 mt-20 md:mt-0">
				<PlaylistPromo showtitle="true" />

				<h3 class="notch-left text-lg lg:text-xl">about the guide</h3>
				<div class="prose prose-sm">
					<p>
						This guide is as simple as we can practically get away with. We’ll include some
						occasional commentary (feel free to submit your own!) to help give you context on what
						can be a dizzyingly complex network of musicians, collectives, communities, and spaces,
						or just make sure you don’t miss out on catching your next favourite act.
					</p>
					<p>
						Got a gig you think should be listed here? <a href="mailto:gigs@sydneymusic.net"
							>Send our friendly team of Gig Researchers an email!</a
						>
					</p>
				</div>
				<div class="space-y-3">
					<Button label="Submit a gig" href="mailto:gigs@sydneymusic.net" />
				</div>

				<div class="prose prose-sm">
					<p>
						<span class="font-bold text-sm">Artists, managers, promoters, and venues:</span><br />
						Self-promo is fine — we love it when you let us know what you’ve got going on! But we won’t
						publish your marketing/social copy verbatim or give you special consideration in the guide.
						We generally don’t list cover/tribute bands or background-music sets at hospitality venues.
						All listings are at our own discretion. We will also graciously refuse any offer of door
						spots for shows where we can buy tickets.
					</p>
				</div>
				<div class="space-y-3">
					<Button label="Join the Discord!" href="https://discord.gg/jv8VKrXymJ" />
					<Button label="Other links" href="/links" />
				</div>
			</div>
		</div>
	</div>
</div>
