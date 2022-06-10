<script>
  import { page } from '$app/stores';
	import { navigation } from '../globals.mjs';
	import Logo from './logo.svelte';
</script>

<header>

  <nav class="max-w-5xl px-5 mx-auto mt-5 lg:mt-20 mb-10 space-y-5">

    <a href="/" class="block lg:hidden">
      <Logo />
    </a>

    <div class="w-full flex justify-between items-end">
      <a href="/" class="hidden lg:block shrink-0">
        <Logo />
      </a>
      
      <div class="flex items-end font-semibold w-full">
        {#each navigation as item}
				<a
					href={item.href}
					class="notch-right notch-thic hover:border-ruby hover:text-ruby text-right text-lg lg:text-xl py-1"
          class:border-ruby="{$page.url.pathname === item.href}"
        >
					{item.title}
				</a>
        {/each}
      </div>
    </div>

	</nav>
</header>
