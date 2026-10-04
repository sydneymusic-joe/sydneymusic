<script>
	import './styles.scss';

	/**
	 * @typedef {Object} Props
	 * @property {string} [label]
	 * @property {string} [href]
	 * @property {string} [target]
	 * @property {string} [prefix]
	 * @property {string} [pointer]
	 * @property {'primary' | 'secondary' | 'subtle' | 'outline'} [variant]
	 * @property {'sm' | 'md' | 'lg'} [size]
	 * @property {string} [className]
	 * @property {string} [eventName]
	 */

	/** @type {Props} */
	let {
		label = 'Button',
		href = '#',
		target = '',
		prefix = '',
		pointer = '»',
		variant = 'secondary',
		size = 'md',
		class: className,
		eventName = 'Button',
		...restProps
	} = $props();

	const variantClasses = {
		primary: 'Button--primary',
		secondary: 'Button--secondary',
		subtle: 'Button--subtle',
		outline: 'Button--outline'
	};

	const sizeClasses = {
		sm: 'Button--small',
		md: 'Button--medium',
		lg: 'Button--large'
	};

	const variantClass = $derived(variantClasses[variant] || variantClasses.secondary);
	const sizeClass = $derived(sizeClasses[size] || sizeClasses.md);
	const mergedClass = $derived(
		`plausible-event-name=${eventName} Button ${variantClass} ${sizeClass} ${className}`
	);
</script>

<a {href} {target} {...restProps} class={mergedClass}>
	{#if prefix}
		<span class="Button-prefix">{prefix}</span>
	{/if}
	{label}
	{pointer}
</a>
