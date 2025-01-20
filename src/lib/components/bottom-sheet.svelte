<script>
	import Button from './button-dark.svelte';
	export let key;
</script>

<div
	id="{key}-sheet"
	class="bottom-sheet fixed bottom-0 inset-x-0 bg-backgroundDark text-white p-6 z-50 rounded-t-3xl"
>
	<div class="flex w-full gap-4 items-center">
		<div class="space-y-5 xl:ml-32 sm:max-w-md">
			<div class="space-y-3">
				<div class="font-instrumentSerif text-3xl md:text-5xl mt-8">
					<h1>Help us improve SydneyMusic.net by telling us what you think!</h1>
				</div>
				<p class="text-base max-w-xl font-instrumentSans hidden md:block">
					The gig guide's getting an upgrade in 2025, and we want to hear from you!
				</p>
				<p class="text-base max-w-xl font-instrumentSans hidden md:block">
					We're running a survey to give our readers an opportunity to share their thoughts and feedback.
				</p>
			</div>
			<div class="flex flex-col sm:flex-row-reverse gap-4 w-full justify-end">
				<Button label="Take the 5 minute survey" href="https://sydneymusic.net/survey" target="_blank" variant="primary" />
			</div>
		</div>
		<div class="relative items-end lg:mr-12 mr-2 hidden sm:flex mt-auto">
			<a href="https://sydneymusic.net/survey" target="_blank">
			<picture class="w-full">
				<img
					src="/dancer.png"
					alt="SydneyMusic.net merch dancer"
					class="w-full h-full object-contain max-w-md max-h-96 rounded-lg"
				/>
			</picture></a>
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
