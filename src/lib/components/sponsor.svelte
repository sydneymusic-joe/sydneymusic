<script>
	import Paragraph from '$lib/components/paragraph.svelte';
	let { logo, logoSize = 'md', children, name = 'Sponsor logo', href='' } = $props();
</script>

<div
	class="bg-gray-50 p-8 rounded-lg border border-gray-400 space-y-0 text-center flex flex-row items-center justify-start"
>
	{#if logo}
		<div
			class="max-w-full flex items-center justify-center shrink-0"
			class:w-32={logoSize === 'lg'}
			class:md:w-48={logoSize === 'lg'}
			class:w-24={logoSize === 'md'}
			class:md:w-36={logoSize === 'md'}
			class:w-12={logoSize === 'sm'}
			class:md:w-20={logoSize === 'sm'}
		>
			<a href="{href}"><img src={logo} alt="{name}" class="object-contain w-full h-full" /></a>
		</div>
	{/if}	
	{#if children}
		<Paragraph variant="sm" class="mb-0 ">
			{@render children()}
		</Paragraph>
	{/if}
</div>
