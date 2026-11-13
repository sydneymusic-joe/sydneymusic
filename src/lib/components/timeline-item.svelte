<script>
import { twMerge } from 'tailwind-merge';
import Heading from './heading.svelte';
let { title = '', color = 'bg-gray-400', class: className, children, ...restProps } = $props();
const baseClass = 'relative space-y-4';
const mergedClass = $derived(twMerge(baseClass, className));
</script>

<div {...restProps} class={mergedClass}>
	<!-- Timeline tick -->
	<div
		class="absolute top-1.5 -left-[calc(2.5rem-0.5px)] h-4 w-4 rounded-full"
		style={`background-color: ${color}`}
	>
		<div class="absolute top-1 left-1 h-2 w-2 rounded-full bg-white"></div>
	</div>

	<Heading level={3} variant="md">{title}</Heading>

	<div class="space-y-4">
		{@render children()}
	</div>
</div>
