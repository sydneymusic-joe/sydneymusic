<script>
	import Button from '$lib/components/button.svelte';
	import Event from '$lib/components/event.svelte';
	import Feedprompt from '$lib/components/feedprompt.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Paragraph from '$lib/components/paragraph.svelte';
	import PlaylistPromo from '$lib/components/playlist.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import { createCalendarLink } from '$lib/globals.mjs';
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

		<!--<div class="flex flex-col justify-end items-start">
				<Paragraph variant="sm" class="italic mb-0">Proudly serving Sydney since 2022</Paragraph>
				<Paragraph variant="xs">
					Last updated: <span class="">{data.lastUpdated}</span><br />
					<a href="/gig-guide/latest/" class="font-bold text-ruby underline">View latest updates</a> &raquo;<br />
					<a href="mailto:gigs@sydneymusic.net" class="text-ruby underline">Send us gig tips</a>
				</Paragraph>
			
		</div>-->

<picture>
	<source
		srcset="/canman-gigs@2x.png 2560w, /canman-gigs@1x.png 1280w"
		media="(min-width : 640px)"
	/>
	<source srcset="/canman-gigs-mobile.png" media="(max-width : 640px)" />
	<img
		src="/canman-gigs@1x.png"
		alt="SydneyMusic.net mascot Can Man loves a read"
		class="aspect-3/1 sm:aspect-banner object-cover w-full mx-auto lg:max-w-5xl"
	/>
</picture>

<div class="max-w-5xl flex flex-col md:flex-row px-5 mx-auto overflow-x-clip pt-5 md:pt-10">
	<div class="contents md:flex md:flex-col">
		<!-- header -->
		<div class="order-1">
			<Heading level={1} variant="xl" class="max-w-md">
				Welcome to Sydney’s most comprehensive gig guide
			</Heading>
		</div>

		<!-- gig guide -->
		<div class="sm:pr-20 gigcolumn order-3">
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

			{#each data.gigs as month}
				<div class="guide-month mb-10">
					{#each month.items as { label, items }}
						<Heading level={3} variant="md" class="border-b border-black">
							<span class="text-ruby">{label.split(':')[1]}</span>
							{label.split(':')[0]}
							{month.label}
						</Heading>
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
	</div>

	<!-- First section -->
	<div class="contents md:flex md:flex-col">
		<div class="order-2 mb-10 md:mb-0">
			<img src="/canman-flagman-clifftheglyph.png" class="w-[60%] ml-3" alt="Can Man holding a flag with Cliff the Glyph" />
			<div class="border-2 border-solid border-black bg-yellow-100 p-3 space-y-3">
				<h2 class="text-xl italic font-bold">SydneyMusic is 60% saved</h2>
				<div class="flex bg-[#F3A482] rounded-lg"><div class="bg-ruby w-[60%] h-3 rounded-lg"></div></div>
				<Paragraph variant="xs" class="font-600 italic">We’re grateful for the assistance of our readers, alongside RØDE and Heaps Normal for helping us to get back online.</Paragraph>
				<Paragraph variant="xs"><strong>We’re not out of the woods yet:</strong> but we want to see live music thrive, and with your help we can continue our mission to “connect Sydney with its scene”</Paragraph>
				<div class="space-y-2">
					<div class="flex flex-row gap-x-2"><Button label="Donate Now" variant="primary" pointer="" href="https://checkout.square.site/merchant/ML6CT8VAK4J47/checkout/SQ5WSOGMBCBYECOZF2JANBSX" /> <Button label="Wall of Legends" variant="outline" class="bg-white" pointer="" href="/support/wall-of-legends" /></div>
					<div class="text-xs"><a href="/support/commercial" class="black underline">Commercial sponsorship and data API licensing</a></div>
				</div>
				<div class="flex flex-wrap flex-row text-xs space-x-3 items-center"><div class="font-bold italic uppercase">Thank you to</div><div>•</div><img src="/sponsors-rode.svg" alt="Røde" class="h-4" /><img src="/logos/heaps-normal.png" class="h-8" alt="Heaps Normal" /></div>
			</div>
		</div>
		
		<!-- right col -->
		<div class="space-y-5 mt-20 order-4">
			<Heading level={3} variant="md" class="notch-left">About this guide</Heading>
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
