<script>
import Paragraph from '#lib/components/paragraph.svelte';
let { logo, logoSize = 'md', children, name = 'Sponsor logo', href = '' } = $props();
</script>

<div
	class="flex flex-row items-center justify-start space-y-0 rounded-lg border border-gray-400 bg-gray-50 p-8 text-center"
>
	{#if logo}
		<div
			class="flex max-w-full shrink-0 items-center justify-center"
			class:w-32={logoSize === 'lg'}
			class:md:w-48={logoSize === 'lg'}
			class:w-24={logoSize === 'md'}
			class:md:w-36={logoSize === 'md'}
			class:w-12={logoSize === 'sm'}
			class:md:w-20={logoSize === 'sm'}
		>
			<a href={href}><img src={logo} alt={name} class="h-full w-full object-contain" /></a>
		</div>
	{/if}
	{#if children}
		<Paragraph variant="sm" class="mb-0 ">
			{@render children()}
		</Paragraph>
	{/if}
</div>
