<script>
	import { navigation, navigationSecondary } from '../globals.mjs';
	import Logo from './logo.svelte';
</script>

<footer class="max-w-5xl px-5 mx-auto mt-5 lg:mt-20 mb-10">
  
	<div class="bg-acknowledgement px-10 py-10 text-white">
		<p>
      This website was created on the unceded lands of the Gadigal people of the Eora nation. We acknowledge their legacy and extend our respects to their elders past, present and emerging. We extend that respect to all Aboriginal and Torres Strait Islanders today, and encourage all settlers building communities and telling stories on stolen land to Pay The Rent by donating to First Nations-run community organisations on the country where they live and work.
		</p>
	</div>

	<nav class="bg-black text-gray-200">
		<div class="w-full flex justify-between items-center py-5">

			<a href="/" class="hidden lg:block shrink-0 px-5">
				<Logo />
			</a>

			<div class="grid grid-cols-2 gap-5 mr-5">
				<div class="space-y-3">
					{#each navigationSecondary as item}
						<a
							href={item.href}
							class="w-40 notch-right hover:border-white text-right text-lg"
						>
							{item.title}
						</a>
					{/each}
				</div>

				<div class="space-y-3">
					{#each navigation as item}
						<a
							href={item.href}
							class="w-40 notch-right hover:border-white text-right text-lg"
						>
							{item.title}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</nav>
</footer>
