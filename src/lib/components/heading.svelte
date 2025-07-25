<script>
	import { twMerge } from 'tailwind-merge';

	export let level = 1;
	export let variant = 'lg';

	const variantClasses = {
		xl: 'font-serif uppercase italic text-6xl lg:text-8xl',
		lg: 'font-serif uppercase italic text-4xl lg:text-6xl',
		md: 'font-serif uppercase italic text-xl lg:text-2xl',
		sm: 'font-sans font-bold text-lg lg:text-xl',
		xs: 'font-sans font-bold text-base lg:text-lg'
	};

	$: baseClass = variantClasses[variant] || variantClasses.lg;
	$: mergedClass = twMerge(baseClass, $$restProps.class);
	$: tag = `h${level}`;
</script>

<svelte:element this={tag} {...$$restProps} class={mergedClass} >
	<slot />
</svelte:element>
