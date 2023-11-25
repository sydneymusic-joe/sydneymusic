<script>
	import Event from '$lib/components/event.svelte';
	import Button from '$lib/components/button.svelte';
	import Feedprompt from '../../lib/components/feedprompt.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import { createCalendarLink } from '../../lib/globals.mjs';
	import PlaylistPromo from '$lib/components/playlist.svelte';

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

<picture>
	<source
		srcset="/canman-gigs@2x.png 2560w, /canman-gigs@1x.png 1280w"
		media="(min-width : 640px)"
	/>
	<source srcset="/canman-gigs-mobile.png" media="(max-width : 640px)" />
	<img
		src="/canman-gigs@1x.png"
		alt="SydneyMusic.net mascot Can Man loves a gig"
		class="aspect-3/1 sm:aspect-banner object-cover w-full mx-auto lg:max-w-5xl"
	/>
</picture>

<div class="max-w-5xl px-5 mt-10 mx-auto space-y-4 md:hidden">
	<h1 class="notch-left text-xl">Gig Guide</h1>

	<div class="prose prose-sm px-3">
		<p>Below you'll find every live music event taking place in Sydney, all on one page.</p>
	</div>

	<div class="transition">
		<div class="accordion-header cursor-pointer transition flex items-center">
			<h3 class="mb-0 notch-left text-lg lg:text-xl">How Does This Work?</h3>
		</div>
		<div class="accordion-content overflow-hidden max-h-0">
			<div class="prose prose-sm">
				<p>
					This guide is as simple as we can practically get away with. We’ll include some occasional
					commentary (feel free to submit your own!) to help give you context on what can be a
					dizzyingly complex network of musicians, collectives, communities, and spaces, or just
					make sure you don’t miss out on catching your next favourite act.
				</p>
				<p>
					Got a gig you think should be listed here?<br />&raquo;
					<a href="mailto:contact@sydneymusic.net">Drop us an email to submit a show</a>.
				</p>

				<p>
					Want to read up on how this works?<br />&raquo;
					<a href="/about">Head over to our About / FAQs page</a>.
				</p>
				<p>
					<span class="font-bold text-sm">Artists, managers, promoters, and venues:</span><br />
					Self-promo is fine — we love it when you let us know what you’ve got going on! But we won’t
					publish your marketing/social copy verbatim or give you special consideration in the guide.
					We generally don’t list cover/tribute bands or background-music sets at hospitality venues.
					All listings are at our own discretion. We will also graciously refuse any offer of door spots
					for shows where we can buy tickets.
				</p>
			</div>
		</div>
	</div>
	<div class="transition">
		<div class="accordion-header cursor-pointer transition flex items-center">
			<h3 class="mb-0 notch-left text-lg lg:text-xl">Gig Guide Playlist</h3>
		</div>
		<div class="accordion-content overflow-hidden max-h-0">
			<PlaylistPromo />
		</div>
	</div>
</div>

<div class="max-w-5xl px-5 mt-10 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<div class="grid md:grid-cols-sidebar-right-wide">
			<!-- left col -->
			<div class="space-y-10 sm:pr-20">
				<div class="filterbox">
					<label for="toggle-freegigs" class="flex items-center cursor-pointer relative">
						<input type="checkbox" id="toggle-freegigs" class="sr-only" />
						<div class="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full" />
						<span class="ml-2">FREE GIGS ONLY</span>
					</label>

					<a href="./archive">
						<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="370.945 277.476 100 63.45875" enable-background="new 370.945 277.476 100 50.767" xml:space="preserve"><path fill="#000000" d="M394.079,325.705c-4.074,0-7.389-3.315-7.389-7.389s3.315-7.389,7.389-7.389s7.389,3.315,7.389,7.389  S398.154,325.705,394.079,325.705z M394.079,312.658c-3.119,0-5.658,2.538-5.658,5.657c0,3.12,2.538,5.658,5.658,5.658  s5.658-2.538,5.658-5.658C399.737,315.196,397.199,312.658,394.079,312.658z"/><path fill="#000000" d="M394.079,322.991c-2.578,0-4.676-2.098-4.676-4.676s2.098-4.676,4.676-4.676  c2.578,0,4.676,2.098,4.676,4.676S396.658,322.991,394.079,322.991z M394.079,315.025c-1.814,0-3.291,1.476-3.291,3.291  s1.476,3.291,3.291,3.291s3.291-1.476,3.291-3.291S395.894,315.025,394.079,315.025z"/><path fill="#000000" d="M446.262,325.705c-4.074,0-7.389-3.315-7.389-7.389s3.315-7.389,7.389-7.389s7.389,3.315,7.389,7.389  S450.336,325.705,446.262,325.705z M446.262,312.658c-3.119,0-5.657,2.538-5.657,5.657c0,3.12,2.538,5.658,5.657,5.658  c3.12,0,5.658-2.538,5.658-5.658C451.92,315.196,449.382,312.658,446.262,312.658z"/><path fill="#000000" d="M446.262,322.991c-2.578,0-4.676-2.098-4.676-4.676s2.098-4.676,4.676-4.676  c2.578,0,4.676,2.098,4.676,4.676S448.84,322.991,446.262,322.991z M446.262,315.025c-1.814,0-3.291,1.476-3.291,3.291  s1.476,3.291,3.291,3.291s3.291-1.476,3.291-3.291S448.076,315.025,446.262,315.025z"/><path fill="#000000" d="M438.069,322.357h-35.791c-0.28,0-0.543-0.136-0.706-0.364c-0.162-0.229-0.204-0.521-0.112-0.786  l0.235-0.677h-1.232c-0.478,0-0.866-0.388-0.866-0.866c0-0.478,0.388-0.866,0.866-0.866h2.45c0.28,0,0.543,0.136,0.706,0.364  s0.204,0.521,0.112,0.786l-0.235,0.677h33.141l-0.546-1.041c-0.141-0.268-0.131-0.591,0.025-0.851  c0.157-0.259,0.438-0.418,0.741-0.418h2.944c0.478,0,0.866,0.388,0.866,0.866s-0.388,0.866-0.866,0.866h-1.512l0.546,1.041  c0.141,0.268,0.131,0.591-0.025,0.851C438.653,322.198,438.372,322.357,438.069,322.357z"/><path fill="#000000" d="M452.785,320.047c-0.373,0-0.718-0.243-0.83-0.62c-0.136-0.458,0.125-0.94,0.584-1.077l7.5-2.227  c1.322-5.41,0.216-9.279-0.208-10.46l-22.033-5.072h-16.763l-13.814,5.594c-0.069,0.028-0.142,0.047-0.216,0.056l-19.935,2.528  l-7.429,2.711l-0.703,2.062c-0.043,0.125-0.114,0.239-0.207,0.333l-1.103,1.103v0.623h0.981c0.145,0,0.289,0.037,0.416,0.107  l2.75,1.507h5.788c0.478,0,0.866,0.388,0.866,0.866c0,0.478-0.388,0.866-0.866,0.866h-6.01c-0.145,0-0.289-0.037-0.416-0.107  l-2.75-1.507h-1.626c-0.478,0-0.866-0.388-0.866-0.866v-1.847c0-0.23,0.091-0.45,0.254-0.612l1.214-1.214l0.772-2.263  c0.085-0.248,0.277-0.444,0.523-0.534l7.909-2.887c0.061-0.022,0.124-0.037,0.188-0.046l19.92-2.526l13.866-5.615  c0.103-0.042,0.214-0.063,0.325-0.063h17.03c0.065,0,0.131,0.007,0.194,0.022l22.572,5.196c0.261,0.06,0.479,0.237,0.591,0.48  c0.095,0.205,2.303,5.103,0.34,12.479c-0.078,0.291-0.301,0.522-0.59,0.607l-7.971,2.367  C452.95,320.036,452.867,320.047,452.785,320.047z"/><path fill="#000000" d="M410.532,309.021c-0.312,0-0.586-0.209-0.669-0.511c-0.084-0.309,0.055-0.635,0.336-0.789l11.267-6.177  c0.102-0.056,0.217-0.085,0.333-0.085h11.362c0.383,0,0.693,0.31,0.693,0.693v5.542c0,0.375-0.299,0.682-0.673,0.692l-22.629,0.635  C410.545,309.021,410.539,309.021,410.532,309.021z M421.976,302.844l-8.593,4.711l19.085-0.536v-4.175H421.976z"/><path fill="#000000" d="M417,308.732c-0.203,0-0.402-0.103-0.517-0.288c-0.176-0.285-0.087-0.659,0.198-0.834l5.482-3.377  c0.096-0.059,0.206-0.09,0.318-0.09h6.004c0.218,0,0.419,0.117,0.527,0.307l1.731,3.043c0.166,0.291,0.064,0.661-0.227,0.826  c-0.29,0.166-0.661,0.064-0.826-0.227l-1.557-2.737h-5.48l-5.336,3.287C417.219,308.703,417.109,308.732,417,308.732z"/><path fill="#000000" d="M455.965,307.693h-17.723c-0.478,0-0.866-0.388-0.866-0.866v-7.101c0-0.478,0.388-0.866,0.866-0.866  c0.478,0,0.866,0.388,0.866,0.866v6.235h15.739l-0.527-2.045c-0.119-0.463,0.159-0.935,0.622-1.055  c0.463-0.119,0.935,0.159,1.055,0.622l0.806,3.127c0.067,0.259,0.01,0.535-0.154,0.747  C456.485,307.569,456.233,307.693,455.965,307.693z"/><path fill="#000000" d="M443.381,307.434c-0.195,0-0.386-0.094-0.503-0.268l-1.554-2.309c-0.067-0.1-0.103-0.218-0.103-0.338v-3.887  c0-0.335,0.271-0.606,0.606-0.606s0.606,0.271,0.606,0.606v3.702l1.451,2.156c0.187,0.278,0.113,0.654-0.164,0.841  C443.615,307.4,443.497,307.434,443.381,307.434z"/><path fill="#000000" d="M446.263,307.434c-0.195,0-0.386-0.094-0.503-0.268l-1.554-2.309c-0.067-0.1-0.103-0.218-0.103-0.338v-3.224  c0-0.335,0.271-0.606,0.606-0.606s0.606,0.271,0.606,0.606v3.039l1.451,2.156c0.187,0.278,0.113,0.654-0.164,0.841  C446.497,307.4,446.379,307.434,446.263,307.434z"/><path fill="#000000" d="M448.976,307.434c-0.195,0-0.386-0.094-0.503-0.268l-1.554-2.309c-0.067-0.1-0.103-0.218-0.103-0.338v-2.599  c0-0.335,0.271-0.606,0.606-0.606c0.335,0,0.606,0.271,0.606,0.606v2.414l1.451,2.156c0.187,0.278,0.113,0.654-0.164,0.841  C449.21,307.4,449.092,307.434,448.976,307.434z"/><path fill="#000000" d="M439.519,300.966c-0.221,0-0.443-0.085-0.612-0.254c-0.338-0.338-0.338-0.886,0-1.224l14.356-14.356  c0.338-0.338,0.887-0.338,1.224,0c0.338,0.338,0.338,0.887,0,1.225l-14.356,14.356C439.963,300.882,439.741,300.966,439.519,300.966  z"/><path fill="#000000" d="M453.203,286.622c-0.089,0-0.177-0.034-0.245-0.102c-0.135-0.135-0.135-0.354,0-0.49l1.5-1.5  c0.083-0.114,0.361-0.452,0.785-0.528c0.273-0.049,0.55,0.021,0.802,0.204c0.024,0.017,0.045,0.037,0.064,0.06  c0.084,0.1,0.37,0.368,0.663,0.386c0.151,0.01,0.297-0.05,0.441-0.181l1.492-1.606c0.013-0.015,0.028-0.028,0.044-0.04  c0.001-0.001,0.315-0.253,0.326-0.638c0.009-0.335-0.204-0.698-0.634-1.078c-0.103-0.093-0.997-0.85-1.891-0.007  c-0.139,0.131-0.358,0.125-0.49-0.014c-0.131-0.139-0.125-0.358,0.014-0.49c1.106-1.043,2.334-0.458,2.83-0.003  c0.591,0.522,0.883,1.071,0.862,1.625c-0.023,0.63-0.453,1.036-0.57,1.135l-1.485,1.6c-0.006,0.006-0.012,0.012-0.018,0.018  c-0.287,0.267-0.621,0.395-0.97,0.372c-0.566-0.038-0.989-0.457-1.115-0.597c-0.114-0.074-0.192-0.071-0.242-0.062  c-0.169,0.031-0.324,0.217-0.353,0.262c-0.013,0.019-0.028,0.038-0.044,0.054l-1.521,1.521  C453.38,286.588,453.291,286.622,453.203,286.622z"/><path fill="#000000" d="M460.923,317.02c-0.296,0-0.584-0.152-0.746-0.424c-0.244-0.411-0.108-0.942,0.303-1.187l2.49-1.476  c0.134-0.079,0.286-0.121,0.442-0.121h0.416l0.275-1.721l-0.957-0.958c-0.131-0.131-0.217-0.302-0.244-0.485l-0.462-3.117  c-0.036-0.244,0.034-0.493,0.192-0.682l0.626-0.75l0.26-4.064l-1.336-3.916l-9.741,5.606c-0.415,0.239-0.944,0.096-1.183-0.319  c-0.238-0.415-0.096-0.944,0.319-1.183l10.652-6.13c0.224-0.129,0.495-0.151,0.737-0.06c0.242,0.091,0.431,0.286,0.515,0.531  l1.732,5.074c0.037,0.108,0.052,0.221,0.045,0.335l-0.289,4.518c-0.012,0.184-0.082,0.359-0.2,0.5l-0.559,0.669l0.363,2.45  l1.068,1.068c0.196,0.196,0.287,0.475,0.243,0.749l-0.462,2.886c-0.067,0.42-0.43,0.729-0.855,0.729h-0.917l-2.285,1.355  C461.225,316.981,461.073,317.02,460.923,317.02z"/><path fill="#000000" d="M448.807,303.133c-0.121,0-0.244-0.015-0.367-0.047c-0.788-0.202-1.262-1.004-1.06-1.792l0.908-3.539  c0.202-0.788,1.005-1.263,1.792-1.06c0.788,0.202,1.262,1.004,1.06,1.792l-0.908,3.539  C450.061,302.691,449.463,303.133,448.807,303.133z"/><path fill="#000000" d="M437.434,297.822c-0.01,0-0.019,0-0.029-0.001l-4.156-0.347c-0.191-0.016-0.332-0.183-0.316-0.374  c0.016-0.191,0.183-0.332,0.374-0.316l4.157,0.347c0.191,0.016,0.332,0.183,0.316,0.374  C437.764,297.685,437.612,297.822,437.434,297.822z"/><path fill="#000000" d="M437.087,299.146h-3.233c-0.191,0-0.346-0.155-0.346-0.346s0.155-0.346,0.346-0.346h3.233  c0.191,0,0.346,0.155,0.346,0.346S437.279,299.146,437.087,299.146z"/><path fill="#000000" d="M435.702,298.973c-0.191,0-0.346-0.155-0.346-0.346v-0.978c0-0.191,0.155-0.346,0.346-0.346  s0.346,0.155,0.346,0.346v0.978C436.048,298.817,435.893,298.973,435.702,298.973z"/><path fill="#000000" d="M428.022,315.025h-2.021c-0.383,0-0.693-0.31-0.693-0.693s0.31-0.693,0.693-0.693h2.021  c0.383,0,0.693,0.31,0.693,0.693S428.405,315.025,428.022,315.025z"/><circle fill="#000000" cx="431.21" cy="309.813" r="0.359"/><path fill="#000000" d="M426.581,319.787h-16.626c-0.365,0-0.68-0.253-0.76-0.609l-3.06-13.624c-0.094-0.42,0.17-0.837,0.59-0.931  c0.419-0.094,0.837,0.17,0.931,0.59l2.923,13.015h15.644l8.47-9.899v-8.602c0-0.43,0.349-0.779,0.779-0.779s0.779,0.349,0.779,0.779  v8.89c0,0.186-0.066,0.365-0.187,0.507l-8.89,10.391C427.025,319.688,426.809,319.787,426.581,319.787z"/><path fill="#000000" d="M385.304,315.775h-1.616c-0.383,0-0.693-0.31-0.693-0.693s0.31-0.693,0.693-0.693h1.616  c0.383,0,0.693,0.31,0.693,0.693S385.687,315.775,385.304,315.775z"/><path fill="#000000" d="M382.014,316.526c-0.383,0-0.693-0.31-0.693-0.693v-0.981c0-0.383,0.31-0.693,0.693-0.693  s0.693,0.31,0.693,0.693v0.981C382.707,316.216,382.396,316.526,382.014,316.526z"/><path fill="#000000" d="M389.593,313.697h-11.476c-0.239,0-0.433-0.194-0.433-0.433c0-0.239,0.194-0.433,0.433-0.433h11.476  c0.239,0,0.433,0.194,0.433,0.433C390.026,313.503,389.833,313.697,389.593,313.697z"/><path fill="#000000" d="M408.665,313.697h-10.458c-0.239,0-0.433-0.194-0.433-0.433c0-0.239,0.194-0.433,0.433-0.433h10.458  c0.239,0,0.433,0.194,0.433,0.433C409.098,313.503,408.904,313.697,408.665,313.697z"/><path fill="#000000" d="M442.135,313.697h-10.64c-0.239,0-0.433-0.194-0.433-0.433c0-0.239,0.194-0.433,0.433-0.433h10.64  c0.239,0,0.433,0.194,0.433,0.433C442.568,313.503,442.374,313.697,442.135,313.697z"/><path fill="#000000" d="M461.416,313.697h-11.027c-0.239,0-0.433-0.194-0.433-0.433c0-0.239,0.194-0.433,0.433-0.433h11.027  c0.239,0,0.433,0.194,0.433,0.433C461.849,313.503,461.655,313.697,461.416,313.697z"/><path fill="#000000" d="M431.916,313.322h-23.582c-0.239,0-0.433-0.194-0.433-0.433s0.194-0.433,0.433-0.433h23.582  c0.239,0,0.433,0.194,0.433,0.433S432.155,313.322,431.916,313.322z"/></svg>

						<span class="ml-2">GO BACK IN TIME</span>
					</a>
				</div>

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
									<div class="w-full space-y-5">
										{#each items as event}
											<Event
												name={event.promotedName}
												performers={event.performersList}
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
				<h3 class="notch-left text-lg lg:text-xl">
					<span class="text-ruby">NEW!</span> Support Us!
				</h3>
				<div class="prose prose-sm">
					<a href="https://store.sydneymusic.net"
						><img
							src="/store-promo.jpg"
							alt="SydneyMusic Store Items: Tote, Tee, Stubby Holder"
						/></a
					>
					<p>
						We're an officially registered not-for-profit these days, and we now have an <a
							href="https://store.sydneymusic.net">online store</a
						> where you can make donations and/or buy merch.
					</p>
				</div>

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
						Got a gig you think should be listed here? <a href="mailto:contact@sydneymusic.net"
							>Drop us an email</a
						>.
					</p>
				</div>
				<div class="space-y-3">
					<Button label="Submit a gig" href="mailto:contact@sydneymusic.net" />
				</div>

				<div class="prose prose-sm">
					<p>
						<span class="font-bold text-sm">Artists, managers, promoters, and venues:</span><br />
						Self-promo is fine —we love it when you let us know what you’ve got going on! But we won’t
						publish your marketing/social copy verbatim or give you special consideration in the guide.
						We generally don’t list cover/tribute bands or background-music sets at hospitality venues.
						All listings are at our own discretion. We will also graciously refuse any offer of door
						spots for shows where we can buy tickets.
					</p>
				</div>
				<div class="space-y-3">
					<Button label="Join the Discord!" href="https://discord.gg/jv8VKrXymJ" />
					<Button label="Other links" href="/links" />

					<p class="text-xs">DeLorean by Aaron Humphreys from <a href="https://thenounproject.com/browse/icons/term/delorean/" target="_blank" title="DeLorean Icons">Noun Project</a> (CC BY 3.0)</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.accordion-content {
		transition: max-height 0.3s ease-out, padding 0.3s ease;
	}
</style>
