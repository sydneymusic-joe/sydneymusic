<script>
	import { twMerge } from 'tailwind-merge';

	/**
	 * @typedef {Object} Props
	 * @property {number} percentage - The percentage value for the progress bar (0-100)
	 * @property {string} [suffix] - The suffix text to display after the percentage
	 * @property {string} [text] - The text to display after the percentage and suffix
	 * @property {'dark' | 'ruby' | 'yellow' | 'light'} [theme] - Color theme for the progress bar
	 * @property {boolean} [showPercentage] - Whether to show the percentage text on the progress bar
	 */

	/** @type {Props} */
	let {
		percentage,
		suffix = '%',
		text = 'funded',
		theme = 'dark',
		showPercentage = true
	} = $props();
</script>

<div class="w-full -mt-2">
	{#if showPercentage}
		<div class="text-xs mb-1 opacity-80 text-left pl-1 pr-10">{percentage}{suffix} {text}</div>
	{/if}
	<div
		class={twMerge(
			'w-full opacity-40 rounded-sm h-4',
			theme === 'dark' && 'bg-ruby',
			theme === 'ruby' && 'bg-black',
			theme === 'yellow' && 'bg-yellow-600',
			theme === 'light' && 'bg-ruby'
		)}
	></div>
	<div
		class={twMerge(
			'h-4 -mt-4 rounded-sm transition-all duration-700 relative',
			theme === 'dark' && 'bg-ruby',
			theme === 'ruby' && 'bg-black',
			theme === 'yellow' && 'bg-black',
			theme === 'light' && 'bg-ruby'
		)}
		style="width: {percentage}%;"
	></div>
</div>
