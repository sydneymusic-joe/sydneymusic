<script>
	/**
	 * @typedef {Object} Props
	 * @property {string} [label]
	 * @property {string} [href]
	 * @property {string} [variant]
	 */

	/** @type {Props} */
	let { label = 'Button', href = '#', variant = 'primary' } = $props();
</script>

<a
	{href} target="_blank" class="{variant} plausible-event-name=Support+CTA"
>
	{label} &raquo;
</a>
