<script>
	import { onMount, tick } from 'svelte';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { SvelteSet } from 'svelte/reactivity';
	import Button from '#lib/components/button.svelte';
	import Event from '#lib/components/event.svelte';
	import Feedprompt from '#lib/components/feedprompt.svelte';
	import Heading from '#lib/components/heading.svelte';
	import Playlist from '#lib/components/playlist.svelte';
	import SeoSocial from '#lib/components/seo-social.svelte';
	import { createCalendarLink } from '#lib/globals.mjs';
	import DonationForm from '#lib/components/donation-form.svelte';
	import FavouritesToggle from '../../lib/components/gig-guide/FavouritesToggle.svelte';
	import SharePrompt from '../../lib/components/gig-guide/SharePrompt.svelte';
	import ShareSheet from '../../lib/components/gig-guide/ShareSheet.svelte';
	import { twJoin } from 'tailwind-merge';

	let { data } = $props();
	let searchTerm = $state('');
	let freeToggle = $state(false);
	let favToggle = $state(false);
	let filterResults = $state(0);
	let showingShareSheet = $state(false);
	let favourites = new SvelteSet();

	let eventDays = [];
	let debounce;
	let gigListElement;

	function getSearchParam(key) {
		return (page.url.searchParams.get(key) ?? '').trim();
	}

	onMount(() => {
		buildDOMGigReferences();

		searchTerm = getSearchParam('s');
		freeToggle = getSearchParam('free') === 'true' || getSearchParam('pwyc') === 'true';
		favToggle = getSearchParam('favs') === 'true';

		if (searchTerm) {
			gigListElement?.scrollIntoView({
				behavior: 'auto',
				block: 'start'
			});
		}

		const selectedGigs = localStorage.getItem('selectedgigs');

		if (selectedGigs) {
			selectedGigs.split(',').forEach((id) => favourites.add(id));
		}

		filterEvents();
	});

	function buildDOMGigReferences() {
		const groupNodes = document.querySelectorAll('[data-event-day]');

		eventDays = Array.from(groupNodes, (groupNode) => {
			// we get the events that have `data-keywords` attribute
			const eventNodes = groupNode.querySelectorAll('[data-keywords]');
			return {
				groupNode,
				events: Array.from(eventNodes, (el) => ({
					el,
					id: el.firstChild.dataset.gigid,
					keywords: (el.dataset.keywords ?? '').toLowerCase(),
					free: el.dataset.free === 'true',
					pwyc: el.dataset.pwyc === 'true'
				}))
			};
		});
	}

	// if we have an empty string
	function filterEvents() {
		const term = searchTerm.toLowerCase();

		filterResults = setEventVisibility((event) => {
			return (
				(!term || event.keywords.includes(term)) &&
				(!freeToggle || event.free || event.pwyc) &&
				(!favToggle || favourites.has(event.id))
			);
		});
	}

	function setEventVisibility(fn) {
		let totalVisible = 0;

		for (const eventDay of eventDays) {
			let visibleCount = 0;

			for (const event of eventDay.events) {
				const isMatch = !!fn(event);
				event.el.classList.toggle('hidden', !isMatch);
				if (isMatch) visibleCount++;
			}
			eventDay.groupNode.classList.toggle('hidden', visibleCount === 0);
			totalVisible += visibleCount;
		}

		return totalVisible;
	}

	function updateSearchParam(searchTerm) {
		clearTimeout(debounce);
		debounce = setTimeout(() => {
			const url = new URL(window.location.href);

			if (searchTerm) {
				url.searchParams.set('s', searchTerm);
			} else {
				url.searchParams.delete('s');
			}
			goto(url, { state: page.state, shallow: true, replace: true });
		}, 200);
	}

	function handleSearch(e) {
		e.preventDefault();
		searchTerm = e.target.value.trim();
		filterEvents();
		updateSearchParam(searchTerm);
	}

	function handleToggleFreeGigs(e) {
		freeToggle = e.currentTarget.checked;
		filterEvents();

		const url = new URL(window.location.href);

		if (freeToggle) {
			url.searchParams.set('free', freeToggle);
		} else {
			url.searchParams.delete('free');
		}
		goto(url, { state: page.state, shallow: true, replace: true });
	}

	function handleToggleFavGigs(e) {
		// TODO need to close the sharesheet if it is visible
		favToggle = e.target.checked;

		filterEvents();

		const url = new URL(window.location.href);

		if (favToggle) {
			url.searchParams.set('favs', favToggle);
		} else {
			url.searchParams.delete('favs');
		}
		goto(url, { state: page.state, shallow: true, replace: true });
	}

	function handleFavClick(e) {
		e.target.classList.toggle('selected');

		let gigId = e.currentTarget.dataset.gigid;
		if (favourites.has(gigId)) {
			favourites.delete(gigId);
		} else {
			favourites.add(gigId);
		}

		localStorage.setItem('selectedgigs', [...favourites.values()]);
	}

	function clearSelectedFavs() {
		// TODO: reset the favToggle state and filteredEvents
		favourites.clear();
	}

	function showShareSheet() {
		document.body.classList.add('showsheet');
		showingShareSheet = true;
	}
</script>

<SeoSocial title="Gig Guide" />

<main class="min-h-screen w-screen">
	<!--<div class="flex flex-col justify-end items-start"> <Paragraph variant="sm" class="italic mb-0">Proudly serving Sydney since 2022</Paragraph>
				<Paragraph variant="xs">
					Last updated: <span class="">{data.lastUpdated}</span><br />
					<a href="/gig-guide/latest/" class="font-bold text-ruby underline">View latest updates</a> &raquo;<br />
					<a href="mailto:gigs@sydneymusic.net" class="text-ruby underline">Send us gig tips</a>
				</Paragraph>

		</div>-->

	<div
		class="relative h-48 py-5 md:h-72 md:py-8"
		style="background-image : url(/teebg.jpg); background-size : cover; background-position : center 35%">
		<div class="flex h-full flex-col items-center justify-items-end">
			<Button
				href="https://store.sydneymusic.net"
				class="text-md bg-white"
				variant="outline"
				label="T-shirts shipping now!"></Button>
		</div>
	</div>

	<div class="mx-auto flex max-w-5xl flex-col overflow-x-clip px-5 pt-5 md:flex-row md:pt-10">
		<div class="contents space-y-5 md:flex md:flex-col">
			<!-- header -->
			<div class="place-self-center md:place-self-auto">
				<div class="flex justify-center md:mr-10">
					<Heading
						level={1}
						variant="md"
						class="stretch mt-5 mb-10 text-center font-normal uppercase sm:max-w-lg md:mt-0"
						style="line-height : 1;">
						Welcome to Sydney’s most comprehensive gig guide
					</Heading>
				</div>
				<div class="text-center font-semibold md:mr-10">
					There are {new Intl.NumberFormat('en-AU').format(data.gigs.totalCount)} gigs to be explored
					below.
				</div>

				<div class="mt-5">
					<DonationForm />
				</div>
			</div>
			<!-- gig guide -->
			<div bind:this={gigListElement} class="md:pr-10">
				<form role="search" class="my-4 flex flex-col" onsubmit={(e) => e.preventDefault()}>
					<header class="mb-2 text-sm font-semibold text-ruby uppercase">Search:</header>
					<input
						id="search-input"
						type="search"
						value={searchTerm}
						oninput={handleSearch}
						placeholder="Search gigs..."
						class="w-full rounded border p-2" />
				</form>
				<header class="mb-2 text-sm font-semibold text-ruby uppercase">Filter:</header>
				<div class="filterbox mb-5 w-full">
					<label for="toggle-freegigs" class="relative flex cursor-pointer items-center">
						<input
							type="checkbox"
							id="toggle-freegigs"
							class="sr-only"
							checked={freeToggle}
							onchange={handleToggleFreeGigs} />
						Free / pay-what-you-can
					</label>
					<FavouritesToggle value={favToggle} onchange={handleToggleFavGigs} />
				</div>

				{let index = 0}
				{#each data.gigs.items as gigDay}
					<section class="day flow-root" data-event-day>
						<Heading
							level={2}
							variant="md"
							class="sticky-header stretch mt-8 mb-8 border-b border-black font-normal uppercase">
							<span class="text-ruby">
								{gigDay.label.split(' ')[0]}
							</span>
							{gigDay.label.split(' ').slice(1).join(' ')}
						</Heading>

						<ul class="gigs">
							{#each gigDay.items as event}
								<li
									data-keywords={event.keywords}
									data-free={event.isFree || event.isPwyc}
									data-pwyc={event.isPwyc}
									data-fav={favourites.has(event.id)}
									class={twJoin(
										'eventcardhost flex flex-row-reverse gap-2',
										(event.isFree || event.isPwyc) && 'freegig',
										event.isPwyc && 'pwycgig'
									)}>
									<button
										type="button"
										class={twJoin(
											'sharegig mb-auto w-5 cursor-pointer',
											favourites.has(event.id) && 'selected'
										)}
										data-gigid={event.id}
										data-gigStartDate={event.date}
										onclick={handleFavClick}>
										<img
											width={24}
											height={24}
											class="size-6"
											alt=""
											src="/shareability-unselected.svg" />
										<span class="sr-only">Add to your selections</span>
									</button>
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
										isPwyc={event.isPwyc} />
								</li>
								{#if !filterResults}
									<li>
										<Feedprompt Index={index++} />
									</li>
								{/if}
							{/each}
						</ul>
					</section>
				{/each}
				{#if searchTerm && filterResults === 0}
					<div class="block border border-black bg-yellow-50 p-2 text-sm italic">
						Oops! We couldn't find any results for your search. Try using different keywords or
						check your spelling.
					</div>
				{/if}
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
						This guide is as simple as we can practically get away with. We’ll include some
						occasional commentary (feel free to submit your own!) to help give you context on what
						can be a dizzyingly complex network of musicians, collectives, communities, and spaces,
						or just make sure you don’t miss out on catching your next favourite act.
					</p>
					<p>
						Got a gig you think should be listed here? <a href="mailto:gigs@sydneymusic.net"
							>Send our friendly team of Gig Researchers an email!</a>
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
						to a gig via the links here in the guide. We’re not tracking you, we still don’t have ads
						or cookies, and nothing else about our gig guide changes – we will never base any decisions
						about which gigs we highlight or list on whether they’re ticketed through a certain provider
						or not. And we’re still committed to total transparency. We’re just getting a little back
						for the clicks we send to big and medium ticketing companies – and buying tickets to shows
						at all levels is still one of the best ways to support our whole community.
					</p>
					<p>
						For more about how affiliate links work, or any other questions, feedback, and ideas
						about how to keep SydneyMusic sustainable, send us a message via <a
							href="mailto:contact@sydneymusic.net">e-mail</a>
						or
						<a href="https://instagram.com/sydneymusicdotnet">@sydneymusicdotnet on Instagram</a>,
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
	{#if favourites.size > 0}
		<SharePrompt
			selectedCount={favourites.size}
			onShare={showShareSheet}
			onClear={clearSelectedFavs} />
	{/if}
	{#if showingShareSheet}
		<ShareSheet selectedCount={favourites.size} />
	{/if}
</main>
