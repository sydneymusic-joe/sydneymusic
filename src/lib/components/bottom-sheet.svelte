<script>
	export let key;
	export let message;
	export let action;
</script>

<div id="{key}-overlay" class="overlay fixed inset-0 bg-black opacity-80 z-40" />

<div
	id="{key}-sheet"
	class="bottom-sheet fixed bottom-0 inset-x-0 bg-black text-white p-6 h-2/5 z-50"
>
	<h1 class="text-3xl sm:text-4xl">{message}</h1>
	<button class="px-6 py-2 bg-white absolute text-black bottom-6 right-6 rounded-xl">
		{action}
	</button>
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
