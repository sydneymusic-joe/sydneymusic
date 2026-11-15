<script>
	import { twMerge } from 'tailwind-merge';
	let { class: className, children, ...restProps } = $props();
	const mergedClass = $derived(twMerge('mx-auto max-w-5xl px-5', className));
</script>

<div {...restProps} class={mergedClass}>
	{@render children()}
</div>
