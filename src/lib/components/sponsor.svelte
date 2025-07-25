<script>
	import Paragraph from '$lib/components/paragraph.svelte';
	let { logo, logoSize = 'md', children } = $props();
</script>

<div
	class="bg-gray-50 p-8 rounded-lg border border-gray-400 space-y-0 text-center flex flex-row items-center justify-start"
>
	{#if logo}
		<div
			class="max-w-full aspect-square flex items-center justify-center shrink-0"
			class:w-48={logoSize === 'lg'}
			class:w-36={logoSize === 'md'}
			class:w-20={logoSize === 'sm'}
		>
			<img src={logo} alt="Sponsor logo" class="object-contain w-full h-full" />
		</div>
	{/if}	
	{#if children}
		<Paragraph variant="sm" class="mb-0 ">
			{@render children()}
		</Paragraph>
	{/if}
</div>
