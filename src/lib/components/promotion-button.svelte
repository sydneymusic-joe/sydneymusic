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
	{href}
	target="_blank"
	class="border uppercase border-black p-2 {variant === 'primary'
		? 'bg-[#EBB436] plausible-event-name=Become+A+Supporter'
		: 'bg-[#FFFBEB] plausible-event-name=Make+A+Donation'} hover:scale-[0.98] transition-all duration-100 ease-in-ou text-center"
	style="box-shadow: 3px 3px 0px 0px #000;"
>
	{label}
</a>
