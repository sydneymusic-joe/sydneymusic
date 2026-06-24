<script>
	import { page } from '$app/stores';
	import { navigation } from '../globals.mjs';
	import Logo from './logo.svelte';
	import IconInstagram from './icon-instagram.svelte';
	import Button from './button.svelte';
	import { mds } from '../donorstats.js';

	/**
	 * @typedef {Object} Props
	 * @property {boolean} [showNotice]
	 * @property {Object} [donorStats] - Donor stats object from layout.js
	 */

	/** @type {Props} */
	let { showNotice = false, donorStats } = $props();

</script>

<header>
	<div class="bg-black text-white py-3 text-center flex flex-row justify-center items-center gap-x-5">
		<div><img src="/banksia.svg" class="h-14" /></div>
		<div>
			<span class="font-semibold text-lg text-ruby">FY27 Fundraising Appeal	</span>
			<div class="text-sm">
			We’ve raised <strong class="font-semibold">{mds.totalFundedPercent}%</strong> of our goal.<br />Help us cover our costs!<br /><a href="/support" class="underline font-semibold">Donate today</a> • Tax deductible
			</div>
		</div>
		<div><img src="/padlock.svg" class="h-14" /></div>
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
