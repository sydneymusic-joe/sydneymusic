<script>
	import { page } from '$app/stores';
	import { navigation } from '../globals.mjs';
	import Logo from './logo.svelte';
</script>

<header>
	<div class="lg:hidden flex justify-center">
		<a href="/" class="mt-5">
			<Logo />
		</a>
	</div>

	<nav class="max-w-5xl lg:px-5 mx-auto mt-5 lg:mt-15 mb-5 space-y-5">
		<div class="w-full flex justify-between items-center">
			<a href="/" class="hidden lg:block shrink-0">
				<Logo />
			</a>

			<div class="navbar">
				{#each navigation as item}
					<a
						href={item.href} class="plausible-event-name=Top+Nav"
						class:support={navigation.indexOf(item) === navigation.length - 1}
						class:current={$page.url.pathname === item.href}
					>
						{item.title}
					</a>
				{/each}
			</div>
		</div>
	</nav>
</header>
