<script>
import SeoSocial from '#lib/components/seo-social.svelte';
import Heading from '#lib/components/heading.svelte';
let { data } = $props();
</script>

<SeoSocial title="Links" />

<div class="mx-auto max-w-5xl space-y-32 px-5 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<div class="space-y-10 sm:pr-20 lg:pr-28">
			<Heading level={2} variant="xl" class="notch-left">A Bunch Of Links</Heading>

			<div class="space-y-3 pl-3">
				{#each data.links as { label, items }, i}
					<h4
						class="-ml-3 border-l-2 border-ruby pl-3 text-lg leading-tight font-bold uppercase italic"
					>
						{label}
					</h4>
					<dl class="pb-10">
						{#each items as { title, url, description }}
							<dt>
								<a href={url} class="hover:text-ruby">
									<strong>{title}</strong>
								</a>
							</dt>
							{#if description}<dd>{description}</dd>{/if}
						{/each}
					</dl>
				{/each}
			</div>

			<Heading level={2} variant="xl" class="notch-left">
				... and a complete listing of all of the venues that we've listed shows for
			</Heading>

			<p class="prose">
				This is now on a dedicated <a href="/gig-guide/venues">Venues page</a>
			</p>
		</div>
	</div>
</div>
