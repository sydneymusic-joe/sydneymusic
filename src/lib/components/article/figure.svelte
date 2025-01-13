<script>
	import { isBlock } from 'datocms-structured-text-utils';

	export let node = null;
	export let block = null;
</script>
{#if block.__typename == 'StructuredTextAssetRecord' && isBlock(node)}
<figure>
	<img src="{block.file.url}?w=2000" alt="{block.file.alt}" />
	<figcaption>
		<span>Image: {block.file.title}</span>
		{#if block.file.alt}<span class="description">{block.file.alt}</span>{/if}
	</figcaption>
</figure>
{/if}