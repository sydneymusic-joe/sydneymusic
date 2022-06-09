<script>
  import "../app.css";
  import { page } from '$app/stores';
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";
</script>

<svelte:head>
  <title>{$page.title || 'Welcome'} | SydneyMusic.net</title>
  <meta name="description" content="SydneyMusic.net is your guide to music in Sydney, with a gig guide, a Discord community and stuff to read.">

  <meta property="og:image" content="{$page.ogimage || 'https://sydneymusic.net/static/social-image.png'}" />
  <meta property="og:title" content="{$page.title}" />
  <meta property="og:description" content="" />
  <meta property="og:type" content="website" />
</svelte:head>

<Header />
<slot />
<Footer />