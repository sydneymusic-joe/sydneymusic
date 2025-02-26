<script>
	import { isBlock } from 'datocms-structured-text-utils';

	/**
	 * @typedef {Object} Props
	 * @property {any} [node]
	 * @property {any} [block]
	 */

	/** @type {Props} */
	let { node = null, block = null } = $props();
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