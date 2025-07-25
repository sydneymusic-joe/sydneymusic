<script>
	import { twMerge } from 'tailwind-merge';
	
	export let variant = 'md';

	const variantClasses = {
		xl: 'font-serif text-xl lg:text-2xl leading-relaxed mb-5 max-w-md text-pretty',
		lg: 'font-serif text-lg lg:text-xl leading-relaxed mb-5 max-w-md text-pretty',
		md: 'font-sans text-base lg:text-lg leading-normal mb-5 max-w-md text-pretty',
		sm: 'font-sans text-sm lg:text-base leading-normal mb-5 max-w-md text-pretty',
		xs: 'font-sans text-xs lg:text-sm leading-tight mb-5 max-w-md text-pretty'
	};

	$: baseClass = variantClasses[variant] || variantClasses.md;
	$: mergedClass = twMerge(baseClass, $$restProps.class);
</script>

<p  {...$$restProps} class={mergedClass}>
	<slot />
</p> 