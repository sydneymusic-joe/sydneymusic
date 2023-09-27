<script context="module">
	import API from '$lib/contentful/';
	import { previewMode, formatDate, groupBy } from '$lib/globals.mjs';

	const getReads = async () => {
		const data = await API(`query {
    articlesCollection(
      order: sys_firstPublishedAt_DESC,
      limit: 20,
	  preview : ${previewMode}
      ) {
        items {
          headline
          excerpt
          slug,
          sys {
            firstPublishedAt
          }
        }
      }
    }`);

		if (data) {
			return {
				latest: data.articlesCollection.items.slice(0, 4),
				byMonth: groupBy(data.articlesCollection.items, (i) => formatDate(i.sys.firstPublishedAt))
			};
		}
		return {};
	};

	export async function load() {
		let reads = await getReads();

		return {
			props: {
				reads
			}
		};
	}
</script>

<script>
	import Read from '$lib/components/read.svelte';
  import SeoSocial from '$lib/components/seo-social.svelte';

  export let reads;
</script>

<SeoSocial title="Reads" />

<picture>
	<source
		srcset="/canman-reads@2x.png 2560w, /canman-reads@1x.png 1280w"
		media="(min-width : 640px)" />
	<source
		srcset="/canman-reads-mobile.png"
		media="(max-width : 640px)" />
	<img
		src="/canman-reads@1x.png"
		alt="SydneyMusic.net mascot Can Man loves a read"
		class="aspect-3/1 sm:aspect-banner object-cover w-full mx-auto lg:max-w-5xl"
		 />
</picture>

<div class="max-w-5xl px-5 mx-auto mt-10 space-y-20 pb-24">
	<!-- First section -->
	<div class="space-y-10">

		<div class="space-y-10 sm:pr-20 lg:pr-28">
			<h2 class="notch-left text-xl">Latest Reads</h2>

      {#each reads.latest as { headline, excerpt, slug }}
        <a href="/reads/{slug}" class="block">
          <Read {headline} body={excerpt} />
        </a>
      {/each}
		</div>
	</div>

  {#each reads.byMonth as month}
    <div class="space-y-10 sm:pr-20 lg:pr-28">
      <h2 class="notch-left text-xl">{month.label}</h2>
      <div class="grid lg:grid-cols-2">
        {#each month.items as { headline, excerpt, slug }}
          <a href="/reads/{slug}" class="block">
            <Read {headline} body={excerpt} />
          </a>
        {/each}
      </div>
    </div>
  {/each}
</div>
