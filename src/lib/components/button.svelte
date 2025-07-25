<script>
	import { twMerge } from 'tailwind-merge';

	/**
	 * @typedef {Object} Props
	 * @property {string} [label]
	 * @property {string} [href]
	 * @property {'primary' | 'secondary' | 'subtle' | 'outline'} [variant]
	 * @property {'sm' | 'md' | 'lg'} [size]
	 */

	/** @type {Props} */
	let { label = 'Button', href = '#', target = '', pointer = '»', variant = 'secondary', size = 'md', class: className, ...restProps } = $props();

	const variantClasses = {
		primary: 'font-serif uppercase italic bg-black text-white block font-bold hover:bg-ruby focus:bg-ruby hover:text-white focus:text-white focus:outline focus:outline-2 focus:outline-ruby transition-colors no-underline',
		secondary: 'font-serif uppercase italic bg-gray-200 text-gray-800 block font-bold hover:bg-gray-300 focus:bg-gray-300 hover:text-gray-800 focus:text-gray-800 focus:outline focus:outline-2 focus:outline-ruby transition-colors no-underline',
		subtle: 'font-sans block font-semibold hover:text-ruby focus:text-ruby focus:outline focus:outline-2 focus:outline-ruby transition-colors no-underline',
		outline: 'font-serif uppercase italic border border-black block font-bold hover:border-ruby focus:border-ruby hover:text-ruby focus:text-ruby focus:outline focus:outline-2 focus:outline-ruby transition-colors no-underline'
	};

	const sizeClasses = {
		sm: 'px-3 py-1 text-sm',
		md: 'px-4 py-2 text-lg', 
		lg: 'px-6 py-3 text-xl'
	};

	const variantClass = $derived(variantClasses[variant] || variantClasses.secondary);
	const sizeClass = $derived(sizeClasses[size] || sizeClasses.md);
	const mergedClass = $derived(twMerge('plausible-event-name=Button', variantClass, sizeClass, className));
</script>

<a
	{href}
	{target}
	{...restProps}
	class={mergedClass}
	>{label} {pointer}</a>
