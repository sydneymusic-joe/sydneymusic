<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [name]
	 * @property {string} [gigId]
	 * @property {any} [venue]
	 * @property {any} [website]
	 * @property {any} [calendarLink]
	 * @property {any} [performers]
	 * @property {any} [comment]
	 * @property {any} [initials]
	 * @property {any} [time]
	 * @property {boolean} [isFree]
	 * @property {boolean} [isPwyc]
	 */

	/** @type {Props} */
	let {
		name = 'Performer',
		gigId = '',
		venue = null,
		website = null,
		calendarLink = null,
		performers = [],
		comment = null,
		initials = $bindable(null),
		time = $bindable(null),
		isFree = false,
		isPwyc = false
	} = $props();

	// Can't set a default here cause null is explicitly provided
	if (!initials) initials = 'NB:';
	if (!time) time = '8pm';

	// Mapping of ticketing providers to their affiliate link templates
	const ticketingProviderTemplates = {
		'ticketmaster.com.au': 'https://ticketmaster-au.tm7566.net/c/6123356/431533/7566?u={url}&utm_medium=affiliate',
		'moshtix.com.au': 'https://moshtix-au.sjv.io/c/6123356/1070760/13716?u={url}&utm_medium=affiliate'
	};

	// Function to wrap URL in the appropriate affiliate link
	function getAffiliateLink(url) {
		for (const [provider, template] of Object.entries(ticketingProviderTemplates)) {
			if (url.includes(provider)) {
				const encodedUrl = encodeURIComponent(url);
				return template.replace('{url}', encodedUrl);
			}
		}
		return url; // Return the original URL if no provider matches
	}

	// Check if the website matches a ticketing provider and wrap it in an affiliate link
	if (website) {
		website = getAffiliateLink(website);
	}
</script>

<div
	class="space-y-2 eventcard {name.toLowerCase().indexOf('sydneymusic.net') > -1
		? 'smn'
		: ''}">
	<div class="">
		<h4 class="headliner text-lg font-bold uppercase italic leading-[1.5rem]">{name}</h4>
		{#if performers && performers.length}<p class="supports uppercase text-sm font-semibold">
				W/ {performers.join(', ')}
			</p>{/if}
		<p class="text-sm uppercase text-neutral-500">
			<span class="time">{time}</span>
			{#if venue}<a
					href="/gig-guide/venues/{venue.slug}"
					class="venue hover:underline hover:text-black transition-colors duration-100 ease-in-out"
					>{venue.venueName}</a
				>{/if}
		</p>
	</div>
	{#if website || calendarLink}
		<div class={`flex items-center space-x-3 sm:space-x-5`}>
			{#if website}
				<a href={website} target="_blank" class="moreinfo flex items-center space-x-1 text-sm group">
					<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 557 559">
						<path
							class="group-hover:text-ruby"
							fill="currentColor"
							d="M278.5 558a278.5 278.5 0 1 0 0-557 278.5 278.5 0 0 0 0 557Z"
						/>
						<path
							fill="#fff"
							d="M233.4 291.3c0-25.3-26.2-15.3-26.2-36.1 0-11.7 13.5-19.4 31.1-21.2 22.1-2.3 62.7-13.1 71.8-13.1 13.5 0 22.6 9 22.6 41.5v130c0 23.9 17.1 16.7 17.1 34.8 0 7.7-8.1 17.6-23.5 17.6h-86.7c-15.3 0-23.5-9.9-23.5-17.6 0-18.1 17.1-10.8 17.1-34.8V291.3h.2Zm-13.1-133.6c0-22.6 21.2-43.3 56.4-43.3s56.4 20.8 56.4 43.3c0 22.5-21.2 43.3-56.4 43.3s-56.4-20.7-56.4-43.3Z"
						/>
					</svg>
					<p class="group-hover:underline">More info</p>
				</a>
			{/if}
			{#if calendarLink}
				<a
					href={calendarLink}
					class="addtocalendar flex items-center space-x-1 text-sm group plausible-event-name=Add+To+Calendar plausible-event-gigid={gigId}"
				>
					<svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 557 559">
						<path
							class="group-hover:text-ruby"
							fill="currentColor"
							d="M278.5 558a278.5 278.5 0 1 0 0-557 278.5 278.5 0 0 0 0 557Z"
						/>
						<path
							fill="#fff"
							d="M232 134.2h93v98.4h98.4v93H325V424h-93v-98.4h-98.4v-93H232v-98.4Z"
						/>
					</svg>
					<p class="group-hover:underline">Add to calendar</p>
				</a>
			{/if}

			{#if isFree}
				<div class="bg-pill text-[10px] font-semibold text-white px-3 py-px rounded-lg">FREE</div>
			{/if}
			{#if isPwyc}
				<div class="bg-pjforest text-[10px] font-semibold text-white px-3 py-px rounded-lg">PWYC</div>
			{/if}
		</div>
	{/if}
	{#if comment}
		<div
			class="relative border border-black bg-yellow-50 py-2 pr-4 pl-7 text-sm min-h-[43px] italic mr-[-28px]"
		>
			<svg
				class="absolute left-0 top-0 w-10 h-10 transform -translate-x-1/2"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="10" cy="10" r="9" fill="currentColor" />
				<text
					x="50%"
					y="55%"
					font-size="7px"
					dominant-baseline="middle"
					fill="white"
					text-anchor="middle">{initials}</text
				>
			</svg>

			<p>{comment}</p>
		</div>
	{/if}
</div>
