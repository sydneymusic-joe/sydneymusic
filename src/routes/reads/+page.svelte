<script>
	import Read from '$lib/components/read.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';

	let { data } = $props();
</script>

<SeoSocial title="Reads" />

<picture>
	<source
		srcset="/canman-reads@2x.png 2560w, /canman-reads@1x.png 1280w"
		media="(min-width : 640px)"
	/>
	<source srcset="/canman-reads-mobile.png" media="(max-width : 640px)" />
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

			{#each data.reads.latest as { headline, excerpt, slug }}
				<a href="/reads/{slug}" class="block">
					<Read {headline} body={excerpt} />
				</a>
			{/each}
		</div>
	</div>

	{#each data.reads.byMonth as month}
		<div class="space-y-10 sm:pr-20 lg:pr-28">
			<h2 class="notch-left text-xl">{month.label}</h2>
			<div class="grid lg:grid-cols-2 gap-10">
				{#each month.items as { headline, excerpt, slug }}
					<a href="/reads/{slug}" class="block">
						<Read {headline} body={excerpt} />
					</a>
				{/each}
			</div>
		</div>
	{/each}
</div>
