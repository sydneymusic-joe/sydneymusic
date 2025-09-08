<script>
	import { twMerge } from 'tailwind-merge';
	let { level = 1, variant = 'lg', class: className, children, ...restProps } = $props();

	const variantClasses = {
		'2xl': 'font-serif italic font-light text-4xl md:text-5xl lg:text-7xl mb-5',
		xl: 'font-serif italic font-light text-4xl lg:text-5xl mb-5',
		lg: 'font-serif italic font-light text-2xl lg:text-4xl mb-5',
		md: 'font-serif italic font-light text-xl lg:text-2xl mb-5',
		sm: 'font-sans font-bold text-lg lg:text-xl mb-5',
		xs: 'font-sans font-bold text-base lg:text-lg mb-5'
	};

	const baseClass = $derived(variantClasses[variant] || variantClasses.lg);
	const mergedClass = $derived(twMerge(baseClass, className));
	const tag = $derived(`h${level}`);
</script>

<svelte:element this={tag} {...restProps} class={mergedClass} >
	{@render children()}
</svelte:element>
