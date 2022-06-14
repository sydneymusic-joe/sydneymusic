<script>
  import "../app.css";
  import { page } from '$app/stores';
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";
</script>

<svelte:head>
</svelte:head>

<Header />
<slot />
<Footer />