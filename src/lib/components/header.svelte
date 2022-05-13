<script>
	import { navigation } from '../globals.mjs';
	import Logo from './logo.svelte';
</script>

<header>

  <nav class="max-w-5xl px-5 mx-auto mt-5 lg:mt-20 mb-10 space-y-5">

    <a href="/" class="block lg:hidden">
      <Logo />
    </a>

    <div class="w-full flex justify-between items-center">
      <a href="/" class="hidden lg:block shrink-0">
        <Logo />
      </a>
      
      <div class="flex items-center font-semibold w-full">
        {#each navigation as item}
				<a
					href={item.href}
					class="notch-right font-semibold uppercase block border-b-2 border-black hover:border-ruby w-full pr-3 text-right text-lg lg:text-xl"
          >
					{item.title}
				</a>
        {/each}
      </div>
    </div>

	</nav>
</header>
