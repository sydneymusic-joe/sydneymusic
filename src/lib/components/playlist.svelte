<script>
	/**
	 * @typedef {Object} Props
	 * @property {boolean} [showtitle]
	 */

	/** @type {Props} */
	let { showtitle = false } = $props();
</script>

{#if showtitle}
	<h3 class="notch-left text-lg lg:text-xl">Gig Guide Playlist</h3>
{/if}
<div class="prose prose-sm">
	<p>Listen to (almost) every artist listed in the gig guide this week:</p>
	<ul>
		<li>
			<a
				href="https://music.apple.com/au/playlist/sydneymusic-gig-guide/pl.u-55D6XE5fr875g"
				target="_blank" class="plausible-event-name=Playlist">Apple Music</a
			>
		</li>
		<li>
			<a
				href="https://open.spotify.com/playlist/7mQ04kuFst6nwUsDFHXBY4?si=c04936010cb44ba1"
				target="_blank" class="plausible-event-name=Playlist">Spotify</a
			>
		</li>
		<li>
			<a
				href="https://tidal.com/browse/playlist/d4896c59-f0a9-4da9-8952-f9fbce6c1072"
				target="_blank" class="plausible-event-name=Playlist">Tidal</a
			>
		</li>
	</ul>
	<p>Updated every Wednesday!</p>
</div>
