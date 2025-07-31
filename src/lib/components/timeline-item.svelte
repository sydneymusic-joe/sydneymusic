<script>
	import { twMerge } from 'tailwind-merge';
	import Heading from './heading.svelte';
	let { title = '', color = 'bg-gray-400', class: className, children, ...restProps } = $props();
	const baseClass = 'relative space-y-4';
	const mergedClass = $derived(twMerge(baseClass, className));
</script>

<div {...restProps} class={mergedClass}>
	<!-- Timeline tick -->
	<div class="absolute -left-[calc(2.5rem-0.5px)] top-1.5 w-4 h-4 rounded-full" style={`background-color: ${color}`}>
		<div class="absolute left-1 top-1 w-2 h-2 rounded-full bg-white"></div>
	</div>
	
	<Heading level={3} variant="md">{title}</Heading>
	
	<div class="space-y-4">
		{@render children()}
	</div>
</div> 