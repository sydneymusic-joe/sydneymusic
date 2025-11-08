<script>
	import { page } from '$app/stores';
	import { navigation } from '../globals.mjs';
	import Logo from './logo.svelte';
	import DonationForm from './donation-form.svelte';
	import IconListen from './icon-listen.svelte';
	import IconInstagram from './icon-instagram.svelte';
	import Container from './container.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {boolean} [showNotice]
	 * @property {Object} [donorStats] - Donor stats object from layout.js
	 */

	/** @type {Props} */
	let { showNotice = false, donorStats } = $props();

</script>

{#if showNotice}
	<div class="bg-black text-white">
		<Container>
			<div class="flex flex-col-reverse md:flex-row gap-2 md:gap-4 relative items-start md:items-end">
				<div class="w-full md:w-auto flex flex-row items-end justify-between">
					<img
						src="/images/canman-peek-transparent.png"
						class="w-20 md:w-24 md:mt-2 h-auto flex-none"
						alt="Can Man holding a flag with Cliff the Glyph"
					/>
					<a href="/support" class="block md:hidden bg-red-600 text-white font-bold uppercase rounded-sm px-2 py-1 mb-2 plausible-event-name=Notice+Donate">Donate</a>
				</div>
				<p class="pt-4 pb-0 md:pb-4 flex w-full items-center justify-start md:justify-end flex-wrap gap-2 text-sm sm:text-md">
					<span>
						<span class="hidden sm:inline">SydneyMusic is {donorStats ? donorStats.totalFundedPercent : 55}%
					funded.</span>
					
					Can you{" "}<span class="hidden md:inline">chip in to</span>{" "}
					<em>support live music</em> in Sydney?
					</span>

					<a href="/support" class="hidden md:block bg-red-600 text-white font-bold uppercase rounded-sm px-2 py-1 plausible-event-name=Notice+Donate">Donate</a>
				</p>
			</div>
		</Container>
	</div>
{/if}

<header>
	<div class="lg:hidden flex justify-center">
		<a href="/" class="mt-5">
			<Logo size="sm" stickers={true} />
		</a>
	</div>

	<nav class="max-w-5xl lg:px-5 mx-auto mt-5 lg:mt-15 mb-5 space-y-5">
		<div class="w-full flex justify-between items-center">
			<a href="/" class="hidden lg:block shrink-0">
				<Logo size="sm" stickers={false} />
			</a>

			<div class="navbar relative flex-wrap lg:flex-nowrap">
				{#each navigation as item}
					<a
						href={item.href}
						class="navbar-link plausible-event-name=Top+Nav"
						class:current={$page.url.pathname === item.href}
					>
						{item.title}
					</a>
				{/each}

				<a
					href="https://www.instagram.com/sydneymusicdotnet"
					target="_blank"
					title="Follow us on Instagram"
					class="navbar-link-icon mr-4"
				>
					<IconInstagram />
				</a>

				<input type="checkbox" id="popover-trigger" class="popover-trigger peer" />
				<label
					for="popover-trigger"
					class="popover-open min-w-36 popover-label support cursor-pointer inline-block peer-checked:hidden"
					id="popover-trigger-open"
				>
					Support Us
				</label>
				<label
					for="popover-trigger"
					class="popover-close min-w-36 popover-label support cursor-pointer hidden peer-checked:flex flex-row items-center justify-end gap-2"
					id="popover-trigger-close"
				>
					<span>Support</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="currentColor"
						stroke="white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-label="Close"
						class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
					>
				</label>

				<div
					class="popover-content relative lg:absolute left-auto max-w-[40rem] lg:right-0 lg:top-[3.35rem] lg:z-50 w-full lg:w-auto basis-full lg:basis-auto min-w-full lg:min-w-0 order-last lg:order-none"
				>
					<div class="max-w-[30rem] mx-auto relative">
						<DonationForm class="pt-10" />
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>
