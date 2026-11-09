<script>
	import '../app.css';
	import Header from '#lib/components/header.svelte';
	import Footer from '#lib/components/footer.svelte';
	import Button from '#lib/components/button.svelte';
	import Logo from '#lib/components/logo.svelte';
	import { page } from '$app/state';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 * @property {Object} data
	 */

	/** @type {Props} */
	let { children, data } = $props();
	let { url } = page;

	const { donorStats } = data;

	// Split Test: Show the notice on the homepage, reads, venues VS the support popover
	// const showNotice = url.pathname === "/" || ['/reads', '/gig-guide/venues'].some(path => url.pathname.startsWith(path));
	const showNotice = false;

</script>

<svelte:head></svelte:head>

<Header showNotice={showNotice} donorStats={donorStats} />
{@render children?.()}
<Footer />
