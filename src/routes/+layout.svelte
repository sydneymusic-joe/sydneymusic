<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { bottomSheetConfig } from '$lib/globals.mjs';
</script>

<svelte:head />

<Header />
<slot />
<Footer />
