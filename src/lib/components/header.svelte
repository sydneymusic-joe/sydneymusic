<script>
	import { page } from '$app/state';
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
	<div class="flex justify-center lg:hidden">
		<a href="/" class="mt-3"><Logo size="sm" stickers={false} /></a>
	</div>

	<nav class="mx-auto mt-5 mb-5 max-w-5xl space-y-5 lg:px-5">
		<div class="flex w-full items-center justify-between">
			<a href="/" class="hidden shrink-0 lg:block">
				<Logo size="sm" stickers={false} />
			</a>

			<div class="navbar relative flex-wrap lg:flex-nowrap">
				{#each navigation as item}
					<a
						href={item.href}
						class="navbar-link plausible-event-name=Top+Nav"
						class:current={page.url.pathname === item.href}>{item.title}</a
					>
				{/each}

				<a
					href="https://www.instagram.com/sydneymusicdotnet"
					target="_blank"
					title="Follow us on Instagram"
					class="navbar-link-icon mr-4"
				>
					<IconInstagram />
				</a>

				<a href="/support" class="support cursor-pointer"> Donate! </a>
			</div>
		</div>
	</nav>
</header>
