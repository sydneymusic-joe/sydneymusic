<script>
	import Event from '$lib/components/event.svelte';
	import Button from '$lib/components/button.svelte';
	import Feedprompt from '../../lib/components/feedprompt.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import { createCalendarLink } from '../../lib/globals.mjs';
	import PlaylistPromo from '$lib/components/playlist.svelte';
	import PromotionButton from '../../lib/components/promotion-button.svelte';
	import AboriginalFlag from '$lib/components/aboriginal-flag.svelte';

	let { data } = $props();

	let gigCounter = $state(0);
	let whichPrompt = $state(0);
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

<div class="max-w-5xl px-5 mt-5 mx-auto overflow-x-clip">
	<div class="pb-7 mb-7 border-b border-dashed border-black">
		<div class="flex flex-col md:flex-row justify-between sm:px-4 md:px-8">
			<div class="flex justify-between md:gap-6 md:w-2/3">
				<div class="relative">
					<div
						class="absolute top-6 xs:top-8 left-0 font-semibold w-72 text-[32px] leading-[1.75rem] xs:text-[42px] xs:leading-9 lg:text-5xl"
					>
						<h1>You’re on</h1>
						<h1>the Gig Guide</h1>
					</div>
					<div class="xs:mt-24 mt-20">
						<p class="text-xs md:text-base max-w-40 sm:max-w-52 pt-2 xs:pt-6 lg:pt-10">
							If it’s out there, it’s in here.
						</p>
						<div class="max-w-44 md:max-w-56 my-5">
							<p class="text-xs md:text-base">
								Last updated: <span class="">{data.lastUpdated}</span>
								<a href="/gig-guide/latest/" class="text-ruby">View latest updates</a>.
							</p>
						</div>
					</div>
				</div>
				<picture class="w-[60%] xs:w-[50%] sm:w-[48%] md:[w-60%] -mr-8 xs:-mr-3 sm:mr-0">
					<img
						src="/hero-character.png"
						alt="SydneyMusic.net mascot Can Man loves a gig"
						class="w-full"
					/>
				</picture>
			</div>
			<div
				class="flex flex-col justify-end items-stretch -mt-2 sm:-mt-16 md:mt-0 md:max-w-52 md:pb-4 lg:pr-6"
			>
				<p class="text-xs">SydneyMusic.net is crowd-supported.</p>
				<p class="text-xs mb-2 md:mb-4">Help us keep the Guide in peak condition!</p>
				<div class="flex gap-4 text-sm md:flex-col">
					<PromotionButton
						label="Become a supporter"
						href="https://www.patreon.com/sydneymusic"
						variant="primary"
					/>
					<PromotionButton
						label="make a donation"
						href="https://store.sydneymusic.net/#jVJaYW"
						variant="secondary"
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="filterbox w-full my-5">
		<label for="toggle-freegigs" class="flex items-center cursor-pointer relative">
			<span class="mr-2">FREE / PAY-WHAT-YOU-CAN GIGS ONLY</span>
			<input type="checkbox" id="toggle-freegigs" class="sr-only" />
			<div
				class="toggle-bg border border-black h-5 w-9 rounded-full"
				style="box-shadow: 1px 1px 0px 0px #000;"
			></div>
		</label>
	</div>

	<!-- First section -->
	<div class="space-y-10">
		<div class="grid md:grid-cols-sidebar-right-wide">
			<!-- left col -->
			<div class="sm:pr-20">
				<div class="relative">
					<div class="mb-10 mt-4 text-xs max-[400px]:text-red" style="border : solid 2px black">
						<a href="https://www.patreon.com/posts/124667971" target="_blank" class="hover:opacity-75 transition-opacity block">
							<div class="p-4">
								<div class="font-instrumentSans text-lg lg:text-2xl font-bold uppercase">Super Supporter Mixtape</div>
								<div class="font-instrumentSerif text-xl lg:text-2xl">Volume 6 out now on Patreon! <u>Get it now</u></div>
								<div class="mt-3 font-instrumentSerif uppercase text-lg">Featuring new music by:</div>
								<div class="font-instrumentSans text-sm lg:text-md artists">
									<ul>
										<li>Paste</li>
										<li>koreancrashout</li>
										<li>Annabelle Scobie</li>
										<li>Jennifers Last Name</li>
										<li>Twelve Point Buck</li>
										<li>O.M.R & Busted Head Racket</li>
										<li>Chloe Parché</li>
										<li>Ant Gallery</li>
										<li>Soma</li>
										<li>B WISE</li>
										<li>Jerome Blazé ft. Dylan Atlantis & Miles Nautu</li>
										<li>calm tyson</li>
										<li>Global Rations ft. Threatnique</li>
										<li>RAGEFLOWER</li>
									</ul>
								</div>
							</div>
						</a>
					</div>
				</div>
				{#each data.gigs as month}
					<div class="guide-month space-y-10 mb-10">
						<h3 class="notch-left text-lg lg:text-xl">
							{month.label}
						</h3>
						<div class="grid gap-10">
							{#each month.items as { label, items }}
								<div class="relative day flex items-start">
									<div
										class="sticky top-10 grid text-center items-center justify-center pr-8 sm:pl-3 sm:pr-10 font-bold"
									>
										<p class="text-ruby font-semibold text-base sm:text-lg leading-none uppercase">
											{label.split(':')[1]}
										</p>
										<p class="text-3xl sm:text-4xl leading-none">{label.split(':')[0]}</p>
										{#if month.label == "Jan '25" && label == "26:Sun"}
										<div class="w-full mt-3">
											<AboriginalFlag />
										</div>
										{/if}
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
												isPwyc={event.isPwyc}
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
