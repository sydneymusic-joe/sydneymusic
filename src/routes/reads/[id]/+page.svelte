<script>
	import { StructuredText } from '@datocms/svelte';
	import Read from '$lib/components/read.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import Embed from '$lib/components/article/embed.svelte';
	import Figure from '$lib/components/article/figure.svelte';
	import { isBlock, isInlineItem } from 'datocms-structured-text-utils';
	import Heading from '$lib/components/heading.svelte';
	let { data } = $props();
</script>

<SeoSocial
	title={data.headline}
	type="article"
	image={data.heroImage ? data.heroImage.url + '?w=1200' : null}
	description={data.excerpt}
/>

<div class="max-w-5xl px-5 mx-auto pt-16 lg:pt-24 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<div>
			<div class="prose prose-xl">
				<Heading level={1} variant="2xl" class="uppercase">{data.headline}</Heading>
			</div>
		</div>
		<div class="grid lg:grid-cols-sidebar-right">
			<div class="prose prose-xl">
				{#if data.heroImage}
					<figure>
						<img src="{data.heroImage.url}?w=2000" alt="{data.heroImage.title}" />
						<figcaption>
							<span>Image: {data.heroImage.title}</span>
							<span class="description">{data.heroImage.alt}</span>
						</figcaption>
					</figure>
				{/if}
				<StructuredText data={data.body} components={[[isInlineItem, Embed], [isBlock, Figure]]} />
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
		<div></div>
	</div>

	<!-- Second section -->
	<div class="space-y-10 pt-16">
		<Heading level={2} variant="xl" class="notch-left">More reads</Heading>
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
