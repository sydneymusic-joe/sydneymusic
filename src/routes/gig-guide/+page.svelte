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

<div class="max-w-5xl px-5 mx-auto overflow-x-clip">
	<div class="pb-7 mb-5 border-b border-solid border-black text-center space-y-3">
		<div
			class="tracking-tight text-[32px] leading-[1.75rem] xs:text-[42px] xs:leading-9 lg:text-5xl" style="font-family : 'Instrument Serif'">
			<h1>You’re on the Gig Guide.</h1>
		</div>
		<div class="space-y-2">
			<p class="italic">Proudly serving Sydney since 2022</p>
			<p class="text-xs md:text-md">
				Last updated: <span class="">{data.lastUpdated}</span><br />
				<a href="/gig-guide/latest/" class="font-bold text-ruby underline">View latest updates</a> &raquo;
			</p>
		</div>
	</div>

	<h4 class="mb-2 uppercase text-sm font-semibold text-ruby">Filter by:</h4>
	<div class="filterbox w-full mb-5">
		<label for="toggle-freegigs" class="flex items-center cursor-pointer relative">
			<input type="checkbox" id="toggle-freegigs" class="sr-only" />
			<div
				class="toggle-bg border border-black h-5 w-9 rounded-full"
				style="box-shadow: 1px 1px 0px 0px #000;"
			></div>
			<span class="ml-2">Free / pay-what-you-can gigs only</span>
		</label>
		<label for="toggle-selected" class="flex items-center cursor-pointer relative">
			<input type="checkbox" id="toggle-selected" class="sr-only" />
			<div
				class="toggle-bg border border-black h-5 w-9 rounded-full"
				style="box-shadow: 1px 1px 0px 0px #000;"
			></div>
			<span class="ml-2">Gigs I've selected only <span class="new">NEW!</span></span>
		</label>
	</div>


	<!-- First section -->
	<div class="space-y-10">
		<div class="grid md:grid-cols-sidebar-right-wide">
			<!-- left col -->
			<div class="sm:pr-20 gigcolumn">
				{#each data.gigs as month}
					<div class="guide-month mb-10">
						<h3 class="text-md lg:text-lg font-semibold mb-5 uppercase" style="border-bottom : solid 1px black">
							{month.label}
						</h3>
						<div class="grid gap-10">
							{#each month.items as { label, items }}
								<div class="relative day flex items-start">
									<div
										class="sticky top-10 grid font-bold m-[-2px]"
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
											<div class="eventcardhost flex flex-row gap-2 {event.isFree || event.isPwyc ? 'freegig' : ''} {event.isPwyc ? 'pwycgig' : ''}">
												<div data-gigid="{event.id}" data-gigStartDate="{event.date}" class="sharegig w-6 flex-none cursor-pointer opacity-50 hover:opacity-100"><img class="w-6" alt="Add to your selections" src="/shareability-unselected.svg" /></div>
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
											</div>
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
			<div class="space-y-5 mt-20 md:mt-0">
				<PlaylistPromo showtitle="true" />

				<h3 class="notch-left text-lg lg:text-xl">About this guide</h3>
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

					<p><strong>Affiliate disclosure:</strong><br />
						To keep SydneyMusic.net running, we’re testing out affiliate links programs with several ticketing providers. This means we may receive a little bit of money if you click through and buy tickets to a gig via the links here in the guide. We’re not tracking you, we still don’t have ads or cookies, and nothing else about our gig guide changes – we will never base any decisions about which gigs we highlight or list on whether they’re ticketed through a certain provider or not. And we’re still committed to total transparency. We’re just getting a little back for the clicks we send to big and medium ticketing companies – and buying tickets to shows at all levels is still one of the best ways to support our whole community.</p>
					<p>For more about how affiliate links work, or any other questions, feedback, and ideas about how to keep SydneyMusic sustainable, send us a message via <a href="mailto:contact@sydneymusic.net">e-mail</a> or <a href="https://instagram.com/sydneymusicdotnet">@sydneymusicdotnet on Instagram</a>, or <a href="https://discord.gg/hpe2EVZZ">join our Discord</a>.</p>
				</div>
				<div class="space-y-3">
					<Button label="Join the Discord!" href="https://discord.gg/jv8VKrXymJ" />
					<Button label="Other links" href="/links" />
				</div>
			</div>
		</div>
	</div>
</div>


<div id="shareprompt" class="hidden">
	<button class="plausible-event-name=Share+Prompt+Click">Share my selections<span></span></button>
</div>

<div id="sharesheet" class="space-y-3">
	<div class="title text-lg font-bold">You've selected <span></span> to share!</div>
	<div class="hint text-sm italic">Here's a preview of your list:</div>

	<div id="share-preview" class="bg-white text-xs max-h-[200px] max-w-[360px] m-y-5 text-black p-2 break-all" style="border : 1px dashed">
		Preview text here
	</div>

	<div class="text-xs">
		<div class="flex gap-x-1 items-center">
			<input type="checkbox" id="share-links" checked />
			<label for="share-links">Include links</label>
		</div>
	</div>

	<div class="flex buttonpanel">
		<button id="shareability-copy" class="plausible-event-name=Share+Sheet+Copy">Copy</button>
		<button id="shareability-share" class="plausible-event-name=Share+Sheet+Share">Share</button>
		<button id="shareability-close" class="plausible-event-name=Share+Sheet+Close">Close</button>
	</div>
</div>
