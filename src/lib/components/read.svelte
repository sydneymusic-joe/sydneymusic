<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [headline]
	 * @property {string} [body]
	 */

	/** @type {Props} */
	let { headline = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo li', body = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui' } = $props();
</script>

<div class="space-y-3 pl-3">
	<h4 class="-ml-3 border-l-2 pl-3 border-ruby text-lg font-bold uppercase italic leading-tight">
		{headline}
	</h4>
	<p>
		{body}
	</p>
</div>
