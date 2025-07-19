<script>
	import { navigationFooterSecondary, navigationFooter } from '../globals.mjs';
	import Logo from './logo.svelte';
	import Button from './button.svelte';
</script>

<footer class="max-w-5xl px-5 mx-auto mt-5 lg:mt-20 mb-10">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-200 p-5 sm:p-10 text-black">
		<div class="text-right">
			<h2 class="medtext text-sm">Sydney's best music.<br />In your inbox.</h2>
		</div>
		<div class="flex flex-col gap-4">
			<p class="max-w-xs text-pretty">
				Sign up to our weekly newsletter for spam-free high-grade Sydney Music:
			</p>
			<div class="max-w-40">
				<Button 
					href="https://sydneymusic.us17.list-manage.com/subscribe?u=33fe15202bc9075111c10636a&id=08cf9e0f0b"
					label="Subscribe"
				/>
			</div>
		</div>
	</div>

	<div class="bg-gray-900 p-5 sm:p-10 text-white">
		<p>
			This website was created on the unceded lands of the Gadigal people of the Eora nation. We
			acknowledge their legacy and extend our respects to their elders past, present and emerging.
			We extend that respect to all Aboriginal and Torres Strait Islanders today, and encourage all
			settlers building communities and telling stories on stolen land to Pay The Rent by donating
			to First Nations-run community organisations on the country where they live and work.
		</p>
	</div>

	<nav class="bg-black text-gray-200 p-10">
		<div class="grid lg:grid-cols-2 gap-5 justify-between py-5">
			<div>
				<a href="/" class="shrink-0">
					<Logo invert={true} />
				</a>

				<p class="prose text-xs text-slate-300 mt-5">
					&copy; SydneyMusic Ltd. 2022-2024<br />
					ABN 87 663 482 513<br />
					<br />
					SydneyMusic is registered as a not-for-profit entity with the
					<a href="https://www.acnc.gov.au" class="text-white"
						>Australian Charities and Not-for-profits Commission</a
					>.<br /><br />
					The SydneyMusic "Can Man" mascot and all illustrations were created by and &copy; Hugh McKinnon,
					2022. All rights reserved.
				</p>
			</div>

			<div class="grid grid-cols-2 gap-5 mr-5">
				<div class="space-y-3">
					<h2 class="font-bold text-lg tracking-wide">Navigation</h2>
					{#each navigationFooter as item}
						<a
							href={item.href}
							class="plausible-event-name=Footer+Nav block hover:border-white text-sm hover:underline"
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
							class="plausible-event-name=Footer+Nav block hover:border-white text-sm hover:underline"
						>
							{item.title}
						</a>
					{/each}
				</div>
			</div>
		</div>
	</nav>
</footer>
