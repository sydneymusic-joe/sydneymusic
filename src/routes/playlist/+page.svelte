<script context="module">
	throw new Error(
		'@migration task: Check code was safely removed (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292722)'
	);

	// import SeoSocial from '$lib/components/seo-social.svelte';
	// import PlaylistPromo from '$lib/components/playlist.svelte';
</script>

<SeoSocial
	title="Gig Guide Playlist"
	description="The SydneyMusic.net playlist is updated every Wednesday and is streaming on Apple Music, Spotify and Tidal."
/>

<div class="max-w-5xl px-5 mx-auto space-y-32 pb-24">
	<div class="space-y-10">
		<div class="space-y-10 sm:pr-20 lg:pr-28">
			<PlaylistPromo showtitle="true" />
		</div>
	</div>
</div>
