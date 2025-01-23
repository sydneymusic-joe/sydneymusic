<script>
import flirt from '$lib/data/genres.js';

export let artistName = '';
let stripped = artistName.replaceAll(/\(.+?\)/g, "")
						.replaceAll(/\[.+?\]/g, "")
						.trim();
let find = flirt().find((a) => a.artistname == stripped);
</script>
<span data-genre="{find ? find.genre : ""}" class="{find ? "flirt" : ""}">{artistName}</span>