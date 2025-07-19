<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import BottomSheet from '$lib/components/bottom-sheet.svelte';
	import { bottomSheetConfig } from '$lib/globals.mjs';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<svelte:head />

<Header />
{@render children?.()}
<!-- {#each bottomSheetConfig as sheet (sheet.key)}
 	<BottomSheet key={sheet.key} message={sheet.message} action={sheet.action} />
 {/each} -->
<Footer />
