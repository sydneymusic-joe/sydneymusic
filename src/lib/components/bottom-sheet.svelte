<script>
	import Button from './button-dark.svelte';
	let { key } = $props();
</script>

<div
	id="{key}-sheet"
	class="bottom-sheet"
>
	<div class="flex max-w-5xl m-auto gap-4 items-end">
		<div class="space-y-5 basis-full md:basis-2/3">
			<div class="space-y-3">
				<div class="text-lg font-semibold md:text-2xl">
					<h1>SydneyMusic.net needs your support.</h1>
					<h1>Donate now to help keep us running.</h1>
				</div>
				<p class="text-sm md:text-base">
					SydneyMusic.net is a not-for-profit initiative, built and maintained by a small team of passionate music lovers. We don't receive any government funding or run advertising - we run this site because we love this city and its incredible music scene.
				</p>
				<p class="text-sm md:text-base">
					Make a donation today to help us keep the site running, support the scene, and get more people to shows.
				</p>
			</div>
			<div class="cta flex flex-row gap-3 w-full">
				<Button label="Make a donation" href="https://square.link/u/eS7bgm8M" target="_blank" variant="primary" />
				<Button label="More info" href="/support" target="_blank" variant="secondary" />
			</div>
		</div>
		<div class="hidden md:basis-1/3 md:block">
			<img src="/dancer-black.png" />
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
			stroke="#000000"
			stroke-width="2"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	</button>
</div>
