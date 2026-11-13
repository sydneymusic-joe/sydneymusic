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
	href={href}
	target="_blank"
	class="border border-black p-2 uppercase {variant === 'primary'
		? 'plausible-event-name=Become+A+Supporter bg-[#EBB436]'
		: 'plausible-event-name=Make+A+Donation bg-[#FFFBEB]'} ease-in-ou text-center transition-all duration-100 hover:scale-[0.98]"
	style="box-shadow: 3px 3px 0px 0px #000;"
>
	{label}
</a>
