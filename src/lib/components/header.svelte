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

<header>
	<div class="bg-black text-xs text-white py-2 text-center"><a href="https://store.sydneymusic.net/" target="_blank" class="underline">NEW MERCH DROP</a>&nbsp; • Tees shipping now!</div>
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

				<a href="/support"
				class="support cursor-pointer"
				>
					Support
			</a>
			</div>
		</div>
	</nav>
</header>
