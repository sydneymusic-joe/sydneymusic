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
				<div class="text-lg font-semibold md:text-2xl pr-5 uppercase italic leading-none">
					<h1>SydneyMusic is (55.3%) saved!</h1>
				</div>
				<p class="text-sm md:text-base">Our community is amazing: thanks to an incredible response, SydneyMusic is no longer slated for shutdown. <a href="/reads/sydneymusic.net-is-55-point-3-percent-saved" class="underline" target="_blank">Read our news update</a> for more information.</p>
				<p class="text-sm md:text-base"><strong>We still need help meeting our minimum monthly budget.</strong> Can you help us stay afloat while we build and implement a sponsorship model?</p>
				<div class="space-y-2">
					<h2><strong>Choose a monthly donation amount:</strong></h2>
					<div class="cta flex flex-row gap-3 w-full text-sm">
						<Button label="$2" href="https://square.link/u/L0GTRapn" target="_blank" variant="secondary" pointer="" />
						<Button label="$5" href="https://square.link/u/Gw8URGj2" target="_blank" variant="secondary" pointer="" />
						<Button label="$15" href="https://square.link/u/JYzf9LTF" target="_blank" variant="secondary" pointer="" />
						<Button label="$50" href="https://square.link/u/moL86XF5" target="_blank" variant="secondary" pointer="" />
						<Button label="$200" href="https://square.link/u/Dicl3TrR" target="_blank" variant="secondary" pointer="" />
					</div>
					<div class="text-xs md:text-sm font-bold"><a href="https://square.link/u/eS7bgm8M" target="_blank" class="underline">I'd like to choose a different amount / one-off donation</a></div>
				</div>
				<p class="text-xs md:text-md">
					SydneyMusic.net is a not-for-profit initiative, built and maintained by a small team of passionate music lovers. We don't receive any government funding or run advertising - we run this site because we love this city and its incredible music scene. <a href="/support" target="_blank" class="underline font-bold">Learn more &raquo;</a>
				</p>
				<p class="italic text-xs md:text-md">
					All donations of $2 and above are tax deductible.
				</p>
			</div>
		</div>
		<div class="hidden md:basis-1/3 md:block">
			<img src="/dancer-black.png" alt="Cliff the Glyph" />
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
