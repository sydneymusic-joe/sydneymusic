<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [label]
	 * @property {string} [href]
	 */

	/** @type {Props} */
	let { label = 'Button', href = '#', target = '', pointer = '»' } = $props();
</script>

<a
	{href}
	{target}
	class="plausible-event-name=Button uppercase border-2 border-black block px-4 font-bold py-2 text-lg hover:border-ruby hover:text-ruby"
	>{label} {pointer}</a>
