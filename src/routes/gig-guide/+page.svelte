<script>
	import Button from '$lib/components/button.svelte';
	import Event from '$lib/components/event.svelte';
	import Feedprompt from '$lib/components/feedprompt.svelte';
	import Heading from '$lib/components/heading.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import Playlist from '$lib/components/playlist.svelte';
	import { createCalendarLink } from '$lib/globals.mjs';
	import { mds } from '../../lib/donorstats.js';
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

<div class="py-5 md:py-12 mb-5 md:mb-0 hidden md:block" style="background-image : linear-gradient(180deg, rgb(240 78 152 / 0.9), #231104);">
		<picture>
	<img
		src="/sticker-pixels.svg"
		alt="SydneyMusic.net mascot Can Man loves a read"
		class="aspect-3/1 md:aspect-banner object-contain w-52 md:w-full mx-auto md:max-w-5xl"
	/>
</picture>
</div>
<div class="max-w-5xl flex flex-col md:flex-row px-5 mx-auto overflow-x-clip pt-5 md:pt-10">
	<div class="contents md:flex md:flex-col">
		<!-- header -->
		<div class="order-1 place-self-center md:place-self-auto">
			<div class="flex justify-center md:mr-10">
				<Heading level={1} variant="md" class="mt-5 mb-10 stretch uppercase font-normal text-center sm:max-w-lg" style="line-height : 1">
					Welcome to Sydney’s most comprehensive gig guide
				</Heading>
			</div>
			<div class="bg-merchbrown text-white text-center p-5 md:p-10 mx-[-20px] md:ml-0 md:mr-10">
				<div class="guide-divider" style="margin-bottom : 0.25rem">
					<div></div>
					<div class="flex flex-row justify-center gap-x-3 mx-3">
						<div><img src="/banksia.svg" class="h-12" alt="Pixelated Banksia icon" /></div>
						<Heading class="text-ruby uppercase font-normal"><div class="stretch leading-[1.9] md:leading-[1.3]">Fundraiser FY27</div></Heading>
						<div><img src="/padlock.svg" class="h-12" alt="Pixelated unlocked padlock icon" /></div>
					</div>
					<div></div>
				</div>
				<div class="space-y-3">
					<div class="font-semibold">There are {new Intl.NumberFormat("en-AU").format(data.gigs.totalCount)} gigs to be explored below.</div>
					<div>But first: SydneyMusic urgently needs your help.</div>
					<div>This resource is 100% community-supported. To keep the gig guide online from July 1 we need to raise money towards our baseline budget for FY27 (we’ve got {data.mds.totalFundedPercent}% sorted already).</div>
					<div class="font-semibold">We need to sign up <span class="text-ruby">{450-data.mds.recurringDonorCount}</span> more monthly supporters by June 30 to meet our goal for this form of support.</div>
					<div>Your support is hugely appreciated. Thank you!</div>
				</div>
				<div class="flex flex-row justify-center gap-x-2 mt-5">
				<img src="/horns.svg" class="h-12" alt="Pixelated horned hands icon" />
				<h2 class="stretch uppercase mt-5 leading-[1.3]">Choose your fighter:</h2>
				<img src="/canhand.svg" class="h-12" alt="Pixelated Can Man hand icon" />
				</div>
				<div class="flex flex-wrap flex-row justify-center gap-x-5 gap-y-3 my-5">
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/L0GTRapn" class="sr-only peer" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">$2</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/Gw8URGj2" class="sr-only peer" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">$5</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/hbwswm65" checked="" class="sr-only peer" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">$10</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/otfmCL39" class="sr-only peer" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">$25</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/moL86XF5" class="sr-only peer" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">$50</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/Dicl3TrR" class="sr-only peer" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">$200</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/PbEmze4h" data-buttonlabel="Make a one-off donation" class="sr-only peer	" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">I’d like to make a one-off donation</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" class="sr-only peer" data-buttonhref="https://store.sydneymusic.net" data-buttonlabel="Shop for merch" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">I’d like to buy a t-shirt!</span>
					</label>
				</div>

				<div class="space-y-2">
				<Button label="Become a monthly supporter" variant="primary" id="support-button" href="https://square.link/u/hbwswm65" />
				<Button label="Learn more" href="/support" />
				</div>

				<script>
					var donorItems = document.querySelectorAll('input[name=donoramount]');
					donorItems.forEach(el => {
						el.addEventListener('click', function (evt) {
							document.getElementById('support-button').href = evt.srcElement.attributes['data-buttonhref'].value;
							document.getElementById('support-button').innerHTML = (evt.srcElement.attributes['data-buttonlabel'] ? evt.srcElement.attributes['data-buttonlabel'].value : "Become a monthly supporter") + " &raquo;";
						});
					});
				</script>

				<div class="mt-2 text-xs">All donations over $2 are tax deductible. SydneyMusic is a registered not-for-profit organisation and is recognised as a Deductible Gift Recipient by the ATO</div>
				<div class="mt-2 text-xs">The average donation from our {data.mds.recurringDonorCount} supporters is $10</div>
				<div class="mt-2 text-xs">
					<a href="/support/commercial" class="underline">Commercial enquiries</a> • <a href="/api-license" class="underline">API licensing</a> • <a href="mailto:contact@sydneymusic.net" class="underline">General enquiries</a>
				</div>
			</div>
		</div>
		<!-- gig guide -->
		<div class="md:pr-10 gigcolumn order-3">
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
						<Heading level={3} variant="md" class="stretch font-normal mb-8 mt-8 uppercase border-b border-black">
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
		<div class="order-2 mb-5 md:mb-0 w-[350px] place-self-center">
		</div>
		<!-- right col -->
		<div class="space-y-5 mt-20 order-4">
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
					<span class="font-bold text-sm">Artists, managers, promoters, and venues:</span><br />
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
		class="bg-white text-xs max-h-[200px] max-w-[360px] m-y-5 text-black p-2 break-all"
		style="border : 1px dashed"
	>
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
