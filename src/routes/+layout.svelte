<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { page } from '$app/stores';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 * @property {Object} data
	 */

	/** @type {Props} */
	let { children, data } = $props();
	let { url } = $page;

	const { donorStats } = data;

	// Split Test: Show the notice on the homepage, reads, venues VS the support popover
	const showNotice = url.pathname === "/" || ['/reads', '/gig-guide/venues'].some(path => url.pathname.startsWith(path));

</script>

<svelte:head />

<Header {showNotice} {donorStats} />
{@render children?.()}
<Footer />
