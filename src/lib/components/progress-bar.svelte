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
	text = 'funded for FY27',
	theme = 'dark',
	showPercentage = true
} = $props();
</script>

<div class="-mt-2 w-full">
	{#if showPercentage}
		<div class="mb-1 pr-10 pl-1 text-left text-xs opacity-80">{percentage}{suffix} {text}</div>
	{/if}
	<div
		class={twMerge(
			'h-4 w-full rounded-sm opacity-40',
			theme === 'dark' && 'bg-ruby',
			theme === 'ruby' && 'bg-black',
			theme === 'yellow' && 'bg-yellow-600',
			theme === 'light' && 'bg-ruby'
		)}
	></div>
	<div
		class={twMerge(
			'relative -mt-4 h-4 rounded-sm transition-all duration-700',
			theme === 'dark' && 'bg-ruby',
			theme === 'ruby' && 'bg-black',
			theme === 'yellow' && 'bg-black',
			theme === 'light' && 'bg-ruby'
		)}
		style="width: {percentage}%;"
	></div>
</div>
