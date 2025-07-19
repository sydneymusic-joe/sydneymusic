<script>
	import Button from './button.svelte';
	/**
	 * @type {boolean}
	 */
	let { 
        shadow = true
    } = $props();
</script>
	<div class:shadow-lg={shadow} class="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-200 p-5 sm:p-10 text-black">
		<div class="text-right">
			<h2 class="medtext text-sm">All of Sydney’s live music.<br />In your inbox.</h2>
		</div>
		<div class="flex flex-col gap-4">
			<p class="max-w-xs text-pretty">
				Sign up to our weekly newsletter for spam-free high-grade Sydney music:
			</p>
			<div class="max-w-40">
				<Button 
					href="https://sydneymusic.us17.list-manage.com/subscribe?u=33fe15202bc9075111c10636a&id=08cf9e0f0b"
					label="Subscribe" target="_blank"
				/>
			</div>
		</div>
	</div>
