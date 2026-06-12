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
	<div class="bg-black text-white py-3 text-center">
		<div class="font-bold">
			THIS WEDNESDAY
		</div>
		<div class="text-sm">
			Free (<a href="/support" class="text-ruby font-bold underline">fundraiser</a>) party • Weds 17 Jun • <a href="https://sydneymusic.net/party" class="underline font-bold">RSVP here</a><br />
			<span class="text-gray-400">DJs • BBQ • free drinks • live music • raffle</span>
		</div>
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
