<script>
	import Read from '$lib/components/read.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';

	export let data;
</script>

<SeoSocial
	title={data.headline}
	type="article"
	image={data.heroImage ? data.heroImage.url + '?w=1200' : null}
	description={data.excerpt}
/>

<div class="max-w-5xl px-5 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<div>
			<div class="prose prose-xl">
				<h1 class="uppercase text-xl italic">{data.headline}</h1>
			</div>
		</div>
		<div class="grid lg:grid-cols-sidebar-right">
			<div class="prose prose-xl">
				{#if data.heroImage}
					<figure>
						<img src="{data.heroImage.url}?w=2000" alt="${data.heroImage.title}" />
						<figcaption>
							<span>Image: {data.heroImage.title}</span>
							<span class="description">{data.heroImage.description}</span>
						</figcaption>
					</figure>
				{/if}
				{@html data.body}
			</div>
			<div>
				<dl class="mt-20 lg:mt-0">
					{#if data.author}
						<dt class="text-ruby uppercase text-sm">by</dt>
						<dd class="uppercase italic text-lg">
							<a href={data.author.authorUrl}>{data.author.authorName}</a>
						</dd>
					{/if}
					<dt class="mt-10 text-ruby uppercase text-sm">Published</dt>
					<dd class="uppercase italic text-lg">{data.publishDate}</dd>
				</dl>
			</div>
		</div>
		<div />
	</div>

	<!-- Second section -->
	<div class="space-y-10">
		<h2 class="notch-left text-xl">More reads</h2>
		<div class="grid lg:grid-cols-2">
			<div class="space-y-10 sm:pr-20 lg:pr-28">
				{#each data.otherReads as { headline, excerpt, slug }, i}
					{#if i < 2}
						<a href="/reads/{slug}" class="block">
							<Read {headline} body={excerpt} />
						</a>
					{/if}
				{/each}
			</div>
			<div class="space-y-10 sm:pr-20 lg:pr-28">
				{#each data.otherReads as { headline, excerpt, slug }, i}
					{#if i > 1}
						<a href="/reads/{slug}" class="block">
							<Read {headline} body={excerpt} />
						</a>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>
