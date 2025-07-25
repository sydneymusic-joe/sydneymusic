<script>
	import Button from './button.svelte';
	import Heading from './heading.svelte';
	import Paragraph from './paragraph.svelte';
	/**
	 * @type {boolean}
	 */
	let { 
        shadow = true
    } = $props();
</script>

<div class:shadow-lg={shadow} class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10 bg-gray-200 p-5 sm:p-10 text-black">
	<div class="text-left md:text-right">
		<Heading level={2} variant="lg">All of Sydney’s&nbsp;<br />live music.<br />In your inbox.</Heading>
	</div>
	<div class="flex flex-col items-start justify-center">
		<Paragraph variant="sm" class="max-w-xs mb-2">
			Sign up to our weekly newsletter for spam-free high-grade Sydney music:
		</Paragraph>
		<div class="max-w-40">
			<Button 
				href="https://sydneymusic.us17.list-manage.com/subscribe?u=33fe15202bc9075111c10636a&id=08cf9e0f0b"
				variant="primary"
				label="Subscribe" target="_blank"
			/>
		</div>
	</div>
</div>
