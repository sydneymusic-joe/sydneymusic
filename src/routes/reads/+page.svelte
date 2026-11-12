<script>
import Read from '#lib/components/read.svelte';
import SeoSocial from '#lib/components/seo-social.svelte';
import Heading from '#lib/components/heading.svelte';
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
		class="mx-auto aspect-3/1 w-full object-cover sm:aspect-banner lg:max-w-5xl"
	/>
</picture>

<div class="mx-auto mt-10 max-w-5xl space-y-20 px-5 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<div class="space-y-10 sm:pr-20 lg:pr-28">
			<Heading level={2} variant="xl" class="notch-left">Latest Reads</Heading>

			{#each data.reads.latest as { headline, excerpt, slug }}
				<a href="/reads/{slug}" class="block">
					<Read headline={headline} body={excerpt} />
				</a>
			{/each}
		</div>
	</div>

	{#each data.reads.byMonth as month}
		<div class="space-y-10 sm:pr-20 lg:pr-28">
			<Heading level={2} variant="lg" class="notch-left">{month.label}</Heading>
			<div class="grid gap-10 lg:grid-cols-2">
				{#each month.items as { headline, excerpt, slug }}
					<a href="/reads/{slug}" class="block">
						<Read headline={headline} body={excerpt} />
					</a>
				{/each}
			</div>
		</div>
	{/each}
</div>
