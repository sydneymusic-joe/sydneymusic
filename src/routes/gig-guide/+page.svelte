<script>
	import Button from '#lib/components/button.svelte';
	import Event from '#lib/components/event.svelte';
	import Feedprompt from '#lib/components/feedprompt.svelte';
	import Heading from '#lib/components/heading.svelte';
	import Playlist from '#lib/components/playlist.svelte';
	import SeoSocial from '#lib/components/seo-social.svelte';
	import { createCalendarLink } from '#lib/globals.mjs';
	import DonationForm from '#lib/components/donation-form.svelte';
	import Header from '../../lib/components/header.svelte';
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
	let gigCount = $derived(
		data.gigs.reduce(
			(acc, month) => acc + month.items.reduce((dayAcc, day) => dayAcc + day.items.length, 0),
			0
		)
	);
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
<div class="mx-auto flex max-w-5xl flex-col overflow-x-clip px-5 pt-5 md:flex-row md:pt-10">
	<div class="contents space-y-5 md:flex md:flex-col">
		<!-- header -->
		<div class="place-self-center md:place-self-auto">
			<div class="flex justify-center md:mr-10">
				<Heading
					level={1}
					variant="md"
					class="stretch mt-5 mb-10 text-center font-normal uppercase sm:max-w-lg md:mt-0"
					style="line-height : 1;"
				>
					Welcome to Sydney’s most comprehensive gig guide
				</Heading>
			</div>
			<div class="text-center font-semibold md:mr-10">
				There are {new Intl.NumberFormat('en-AU').format(data.gigs.totalCount)} gigs to be explored below.
			</div>

			<div class="mt-5 mr-10">
				<div class="flex flex-row gap-5">
					<div class="w-[50%]"><a href="https://store.sydneymusic.net"><img src="/fan-maya.jpeg" class="w-48" /></a></div>
					<div>
						<Heading variant="sm" class="uppercase font-medium notch-left">Tell everyone you’re a fan</Heading>
						<p class="text-sm"><strong class="font-medium">SydneyMusic is made possible with the support of our community.</strong> Pick up some merch or become a supporter today!</p>

						<div class="flex flex-col mt-5 gap-2">
							<Button variant="primary" label="Merch store" href="https://store.sydneymusic.net" />
							<Button label="Become a supporter" href="/support" />
						</div>

						<p class="text-xs italic mt-5">Thanks to <a href="http://theundergroundstage.com" class="underline" target="_blank">The Underground Stage</a> for this pic!<br />Featuring Maya from <a href="https://instagram.com/bestbandsyouneverheard" class="underline" target="_blank">Best Bands You Never Heard</a></p>
					</div>
				</div>
			</div>
		</div>
		<!-- gig guide -->
		<div class="gigcolumn md:pr-10">
			<h4 class="mb-2 text-sm font-semibold text-ruby uppercase">Filter:</h4>
			<div class="filterbox mb-5 w-full">
				<label for="toggle-freegigs" class="relative flex cursor-pointer items-center">
					<input type="checkbox" id="toggle-freegigs" class="sr-only" />
					Free / pay-what-you-can
				</label>
				<label for="toggle-selected" class="relative flex cursor-pointer items-center">
					<input type="checkbox" id="toggle-selected" class="sr-only" />
					My favourites
				</label>
			</div>

			{#each data.gigs as month}
				<div class="guide-month mb-10">
					{#each month.items as { label, items }}
						<Heading
							level={3}
							variant="md"
							class="stretch mt-8 mb-8 border-b border-black font-normal uppercase"
						>
							<span class="text-ruby">{label.split(':')[1]}</span>
							{label.split(':')[0]}
							{month.label}
						</Heading>
						<div class="day">
							{#each items as event}
								<div
									class="eventcardhost flex flex-row-reverse gap-2 {event.isFree || event.isPwyc
										? 'freegig'
										: ''} {event.isPwyc ? 'pwycgig' : ''}"
								>
									<div
										data-gigid={event.id}
										data-gigStartDate={event.date}
										class="sharegig mt-[3px] w-5 flex-none cursor-pointer"
									>
										<img
											class="w-6"
											alt="Add to your selections"
											src="/shareability-unselected.svg"
										/>
									</div>
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
		<div class="mb-5 w-[350px] place-self-center md:mb-0"></div>
		<!-- right col -->
		<div class="mt-20 space-y-5">
			<Playlist showtitle="true" />
			<Heading level={3} variant="md" class="notch-left">About this guide</Heading>
			<div class="prose prose-sm">
				<p>
					This guide is as simple as we can practically get away with. We’ll include some occasional
					commentary (feel free to submit your own!) to help give you context on what can be a
					dizzyingly complex network of musicians, collectives, communities, and spaces, or just
					make sure you don’t miss out on catching your next favourite act.
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
					<span class="text-sm font-bold">Artists, managers, promoters, and venues:</span><br />
					Self-promo is fine — we love it when you let us know what you’ve got going on! But we won’t
					publish your marketing/social copy verbatim or give you special consideration in the guide.
					We generally don’t list cover/tribute bands or background-music sets at hospitality venues.
					All listings are at our own discretion. We will also graciously refuse any offer of door spots
					for shows where we can buy tickets.
				</p>

				<p>
					<strong>Affiliate disclosure:</strong><br />
					To keep SydneyMusic.net running, we’re testing out affiliate links programs with several ticketing
					providers. This means we may receive a little bit of money if you click through and buy tickets
					to a gig via the links here in the guide. We’re not tracking you, we still don’t have ads or
					cookies, and nothing else about our gig guide changes – we will never base any decisions about
					which gigs we highlight or list on whether they’re ticketed through a certain provider or not.
					And we’re still committed to total transparency. We’re just getting a little back for the clicks
					we send to big and medium ticketing companies – and buying tickets to shows at all levels is
					still one of the best ways to support our whole community.
				</p>
				<p>
					For more about how affiliate links work, or any other questions, feedback, and ideas about
					how to keep SydneyMusic sustainable, send us a message via <a
						href="mailto:contact@sydneymusic.net">e-mail</a
					>
					or <a href="https://instagram.com/sydneymusicdotnet">@sydneymusicdotnet on Instagram</a>,
					or <a href="https://discord.gg/hpe2EVZZ">join our Discord</a>.
				</p>
			</div>
			<div class="space-y-3">
				<Button label="Join the Discord!" href="https://discord.gg/jv8VKrXymJ" />
				<Button label="Other links" href="/links" />
			</div>
		</div>
	</div>
</div>

<div id="shareprompt" class="hidden">
	<button class="share plausible-event-name=Share+Prompt+Click"
		>Share my selections<span></span></button
	>
	<button class="clear plausible-event-name=Share+Clear+All">Clear all</button>
</div>

<div id="sharesheet" class="space-y-3">
	<div class="title text-lg font-bold">You've selected <span></span> to share!</div>
	<div class="hint text-sm italic">Here's a preview of your list:</div>

	<div
		id="share-preview"
		class="m-y-5 max-h-[200px] max-w-[360px] bg-white p-2 text-xs break-all text-black"
		style="border : 1px dashed"
	>
		Preview text here
	</div>

	<div class="text-xs">
		<div class="flex items-center gap-x-1">
			<input type="checkbox" id="share-links" checked />
			<label for="share-links">Include links</label>
		</div>
	</div>

	<div class="buttonpanel flex">
		<button id="shareability-copy" class="plausible-event-name=Share+Sheet+Copy">Copy</button>
		<button id="shareability-share" class="plausible-event-name=Share+Sheet+Share">Share</button>
		<button id="shareability-close" class="plausible-event-name=Share+Sheet+Close">Close</button>
	</div>
</div>
