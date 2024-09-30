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
		<div class="w-full flex justify-between items-end">
			<a href="/" class="hidden lg:block shrink-0">
				<Logo />
			</a>

			<div class="flex items-end font-semibold w-full">
				{#each navigation as item}
					<a
						href={item.href}
						class="notch-thic hover:border-ruby hover:text-ruby text-center whitespace-nowrap text-lg lg:text-xl py-1"
						class:notch-right={navigation.indexOf(item) < navigation.length - 1}
						class:border-ruby={$page.url.pathname === item.href}
					>
						{item.title}
						{#if item.title == 'Merch'}
						<span>New!</span>
						{/if}
					</a>
				{/each}
			</div>
		</div>
	</nav>
</header>
