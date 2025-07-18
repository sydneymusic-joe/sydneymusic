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
	let gigCount = $derived(data.gigs.reduce((acc, month) => 
		acc + month.items.reduce((dayAcc, day) => dayAcc + day.items.length, 0), 0
	));
</script>

<SeoSocial title="Gig Guide" />

<div class="max-w-5xl px-5 mx-auto overflow-x-clip">
	<div class="grid md:grid-cols-sidebar-right-wide mb-10">
		<div class="sm:pr-20 flex flex-col justify-end items-start gap-4">
			<h1 class="bigtext lg:mt-10 max-w-md text-pretty">
				<span class="italic">The</span> Sydney gig guide featuring <span class="text-ruby">{gigCount} upcoming shows</span>
			</h1>
		</div>
		<div class="flex flex-col justify-end items-start">
			
				<p class="italic">Proudly serving Sydney since 2022</p>
				<p class="text-xs md:text-md">
					Last updated: <span class="">{data.lastUpdated}</span><br />
					<a href="/gig-guide/latest/" class="font-bold text-ruby underline">View latest updates</a> &raquo;<br />
					<a href="mailto:gigs@sydneymusic.net" class="text-ruby underline">Send us gig tips</a>
				</p>
			
		</div>
	</div>

	<h4 class="mb-2 uppercase text-sm font-semibold text-ruby">Filter:</h4>
	<div class="filterbox w-full mb-5">
		<label for="toggle-freegigs" class="flex items-center cursor-pointer relative">
			<input type="checkbox" id="toggle-freegigs" class="sr-only" />
			Free / pay-what-you-can
		</label>
		<label for="toggle-selected" class="flex items-center cursor-pointer relative">
			<input type="checkbox" id="toggle-selected" class="sr-only" />
			My favourites
		</label>
	</div>


	<!-- First section -->
	<div class="space-y-10">
		<div class="grid md:grid-cols-sidebar-right-wide">
			<!-- left col -->
			<div class="sm:pr-20 gigcolumn">

				{#each data.gigs as month}
					<div class="guide-month mb-10">
						{#each month.items as { label, items }}
							<h3 class="text-md lg:text-lg font-semibold mb-5" style="border-bottom : solid 1px black">
								<span class="text-ruby">{label.split(':')[1]}</span>
								{label.split(':')[0]}
								{month.label}
							</h3>
							<div class="day">
							{#each items as event}
								<div class="eventcardhost flex flex-row-reverse gap-2 {event.isFree || event.isPwyc ? 'freegig' : ''} {event.isPwyc ? 'pwycgig' : ''}">
									<div data-gigid="{event.id}" data-gigStartDate="{event.date}" class="sharegig mt-[3px] w-5 flex-none cursor-pointer"><img class="w-6" alt="Add to your selections" src="/shareability-unselected.svg" /></div>
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
							{#if gigCounter > 9}
								<Feedprompt Index={whichPrompt} />
								{resetCounter()}
								{incrementDisplay()}
							{/if}
						{/each}
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
	<button class="share plausible-event-name=Share+Prompt+Click">Share my selections<span></span></button>
	<button class="clear plausible-event-name=Share+Clear+All">Clear all</button>
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
