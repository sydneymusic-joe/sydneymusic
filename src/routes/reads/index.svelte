<script>
	import Read from '$lib/components/read.svelte';
	import API from '$lib/contentful/';
  import { formatDate, groupBy } from  '$lib/globals.mjs';

	const getReads = async () => {
		const data = await API(`query {
      articlesCollection(
        order: sys_firstPublishedAt_ASC,
        limit: 20
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

	let reads = getReads();
</script>

<div class="max-w-5xl px-5 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<img src="https://picsum.photos/1000/150?grayscale" alt="" class="aspect-banner w-full" />

		<div class="space-y-10 pr-20 lg:pr-28">
			<h2 class="notch-left text-xl">Latest Reads</h2>
      <!-- TODo: how do we feel about this greeking method? What do we want the load strategy to be? -->
			{#await reads}
				<Read />
				<Read />
				<Read />
				<Read />
			{:then { latest }}
				{#each latest as { headline, excerpt, slug }}
					<a href="/reads/{slug}" class="block">
						<Read {headline} body={excerpt} />
					</a>
				{/each}
			{:catch}
				<p style="color: red">Could not find the latest reads. Please panic, and try again!</p>
			{/await}
		</div>
	</div>

	{#await reads then { byMonth }}
		{#each byMonth as month}
			<div class="space-y-10">
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
	{/await}

</div>
