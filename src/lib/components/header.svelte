<script>
	import { page } from '$app/stores';
	import { navigation } from '../globals.mjs';
	import Logo from './logo.svelte';
	import IconInstagram from './icon-instagram.svelte';
	import Button from './button.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {boolean} [showNotice]
	 * @property {Object} [donorStats] - Donor stats object from layout.js
	 */

	/** @type {Props} */
	let { showNotice = false, donorStats } = $props();

</script>

<header>
	<div class="bg-merchbrown text-white py-5 text-center">
		<div class="font-medium text-xl stretch my-2"><span class="text-ruby">FUNDRAISER</span> PARTY!</div>
		<div class="text-md"><strong>Weds 17 June</strong> • 4pm—9pm • FREE</div>
		<div class="text-xs">DJs, live music, BBQ, all ages, tote bag raffle!</div>
		<div class="flex flex-row place-content-center gap-x-3 mt-3">
			<Button label="RSVP Now" href="/party" target="_blank" />
			<Button label="Donate" href="https://square.link/u/eS7bgm8M" target="_blank" variant="primary" />
		</div>
		<div class="py-3"><strong class="font-medium">We are fundraising for FY27!</strong> <a href="/support" class="underline">Learn more</a>.</div>
	</div>
	<div class="lg:hidden flex justify-center">
		<a href="/" class="mt-3">
			<Logo size="sm" stickers={false} />
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

				<a href="/support"
				class="support cursor-pointer"
				>
					Donate!
			</a>
			</div>
		</div>
	</nav>
</header>
