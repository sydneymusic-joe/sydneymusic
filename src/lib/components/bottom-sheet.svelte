<script>
	import Button from './button-dark.svelte';
	export let key;
</script>

<div
	id="{key}-sheet"
	class="bottom-sheet fixed bottom-0 inset-x-0 bg-backgroundDark text-white p-6 z-50"
>
	<div class="flex w-full gap-4 items-center">
		<div class="space-y-8 xl:ml-32 sm:max-w-md">
			<div class="space-y-3">
				<div class="font-instrumentSerif text-3xl md:text-5xl">
					<h1 class="">SUPPORT</h1>
					<h1 class="">SYDNEYMUSIC.NET!</h1>
				</div>
				<p class="text-base max-w-xl font-instrumentSans">
					We're thrilled to announce a brand new merch drop in collaboration with Studio 3AM. You
					can represent your favourite local gig guide while looking awesome and supporting us
					financially. Now that's value!
				</p>
			</div>
			<div class="flex flex-col sm:flex-row-reverse gap-4 w-full justify-end">
				<Button label="SHOP MERCH" href="https://store.sydneymusic.net" variant="primary" />
				<Button
					label="DONATE NOW"
					href="https://store.sydneymusic.net/#jVJaYW"
					variant="secondary"
				/>
			</div>
		</div>
		<div class="relative items-end lg:mr-12 mr-2 hidden sm:flex mt-auto">
			<picture class="w-full">
				<img
					src="/dancer.png"
					alt="SydneyMusic.net dancer"
					class="w-full h-full object-contain max-w-md max-h-96"
				/>
			</picture>
		</div>
	</div>
	<button
		id="{key}-close-btn"
		class="absolute top-4 right-4 w-9 h-9 p-2 rounded-md text-white flex items-center justify-center"
		aria-label="Close sheet"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	</button>
</div>
