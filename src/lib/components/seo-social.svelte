<script>
	export let title;
	export let description;
	export let keywords;
	export let canonical;
	export let type;
	export let image;
	export let imageWidth;
	export let imageHeight;

    if (!title) {
        title = "Welcome"
    }

    if (!description) {
        description = "SydneyMusic.net is your guide to music in Sydney, with a gig guide, a Discord community and stuff to read."
    }

    if (!keywords) {
        keywords = "sydney,live music,gig guide,community,shows,diy,listings,music writing,nightlife"
    }

    if (!image) {
        image = "https://sydneymusic.net/static/social-image.png"
		imageWidth=1366
		imageHeight=768
    }
</script>

<svelte:head>
	<title>{title} | SydneyMusic.net, Sydney's live music map</title>
	<meta name="robots" content="index, follow" />
	<meta name="googlebot" content="index,follow" />
	{#if description}
		<meta name="description" content={description} />
	{/if}

	{#if canonical}
		<link rel="canonial" href={canonical} />
	{/if}
	<meta name="keywords" content={keywords} />

	<meta property="og:title" content={title} />
	{#if description}
		<meta property="og:description" content={description} />
	{/if}
	{#if canonical}
		<meta property="og:url" content={canonical} />
	{/if}
	<meta property="og:type" content={type ? type : 'site'} />
	<meta property="og:image" content={image} />
	{#if imageWidth && imageHeight}
	<meta property="og:image:width" content="{imageWidth}" />
	<meta property="og:image:height" content="{imageHeight}" />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	{#if description}
		<meta name="twitter:description" content={description} />
	{/if}
	<meta name="twitter:image" content={image} />
</svelte:head>