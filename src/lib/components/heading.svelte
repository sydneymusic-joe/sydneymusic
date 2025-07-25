<script>
	import { twMerge } from 'tailwind-merge';

	export let level = 1;
	export let variant = 'lg';

	const variantClasses = {
		'2xl': 'font-serif uppercase italic font-light text-5xl lg:text-7xl mb-5',
		xl: 'font-serif uppercase italic font-light text-4xl lg:text-5xl mb-5',
		lg: 'font-serif uppercase italic font-light text-2xl lg:text-4xl mb-5',
		md: 'font-serif uppercase italic font-light text-xl lg:text-2xl mb-5',
		sm: 'font-sans font-bold text-lg lg:text-xl mb-5',
		xs: 'font-sans font-bold text-base lg:text-lg mb-5'
	};

	$: baseClass = variantClasses[variant] || variantClasses.lg;
	$: mergedClass = twMerge(baseClass, $$restProps.class);
	$: tag = `h${level}`;
</script>

<svelte:element this={tag} {...$$restProps} class={mergedClass} >
	<slot />
</svelte:element>
