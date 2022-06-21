<script>
	import {  navigationFooterSecondary, navigationFooter } from '../globals.mjs';
	import Logo from './logo.svelte';
</script>

<footer class="max-w-5xl px-5 mx-auto mt-5 lg:mt-20 mb-10">
  
	<div class="bg-acknowledgement p-5 sm:p-10 text-white hover:text-black transition-colors duration-1000">
		<p>
      This website was created on the unceded lands of the Gadigal people of the Eora nation. We acknowledge their legacy and extend our respects to their elders past, present and emerging. We extend that respect to all Aboriginal and Torres Strait Islanders today, and encourage all settlers building communities and telling stories on stolen land to Pay The Rent by donating to First Nations-run community organisations on the country where they live and work.
		</p>
	</div>

	<nav class="bg-black text-gray-200 p-10">
		<div class="grid lg:grid-cols-2 gap-5 justify-between py-5">

			<a href="/" class="shrink-0">
				<Logo invert={true} />
			</a>

			<div class="grid grid-cols-2 gap-5 mr-5">
				<div class="space-y-3">
          			<h2 class="font-bold text-lg tracking-wide">Navigation</h2>
					{#each navigationFooter as item}
						<a
							href={item.href}
							class="block hover:border-white text-sm hover:underline"
						>
							{item.title}
						</a>
					{/each}
				</div>

				<div class="space-y-3">
          			<h2 class="font-bold text-lg tracking-wide">&nbsp;</h2>
					{#each navigationFooterSecondary as item}
						<a
							href={item.href}
							class="block hover:border-white text-sm hover:underline"
						>
							{item.title}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</nav>
</footer>
