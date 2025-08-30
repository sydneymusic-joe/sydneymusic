<script>
	import Heading from './heading.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} [headline]
	 * @property {string} [body]
	 */

	/** @type {Props} */
	let { headline = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo li', body = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui' } = $props();
</script>

<div class="border-l border-l-gray-300 px-5 py-1 hover:border-l-ruby focus:border-l-ruby">
	<Heading level={4} variant="md" class="not-italic mb-2">{headline}</Heading>

	<p>
		{body}
	</p>
</div>
