<script>
	import { twMerge } from 'tailwind-merge';
	let { variant = 'md', class: className, children, ...restProps } = $props();

	const variantClasses = {
		'2xl': 'font-serif text-4xl lg:text-6xl leading-tight mb-5 max-w-md text-pretty',
		xl: 'font-serif text-xl lg:text-3xl leading-tight mb-5 max-w-2xl text-pretty',
		lg: 'font-serif text-lg lg:text-xl leading-tight mb-5 max-w-xl text-pretty',
		md: 'font-sans text-base lg:text-lg leading-normal mb-5 max-w-lg text-pretty',
		sm: 'font-sans text-sm lg:text-base leading-normal mb-5 max-w-lg text-pretty',
		xs: 'font-sans text-sm leading-tight mb-5 max-w-lg text-pretty'
	};

	const baseClass = $derived(variantClasses[variant] || variantClasses.md);
	const mergedClass = $derived(twMerge(baseClass, className));
</script>

<p {...restProps} class={mergedClass}>
	{@render children()}
</p>
