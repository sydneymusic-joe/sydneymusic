<script context="module">
	import API from '$lib/contentful/';
	import { groupBy } from '../lib/globals.mjs';

	const getLinks = async () => {
		const data = await API(`{
          linkCollection(
            order: [category_ASC, title_ASC]
          ) {
            items {
              title
              url
              description,
              category
            }
          }
        }`);

		if (data) {
			let byCategory = groupBy(data.linkCollection.items, ({ category }) => category);

			return byCategory;
		}

		return {};
	};

	const getVenues = async () => {
		const dataLinks = await API(`{
			venuesCollection(
				order : [suburb_ASC, venueName_ASC]
			) {
				items {
					venueName,
					suburb,
					url
				}
			}
		}`);

		if (dataLinks) {
			let bySuburb = groupBy(dataLinks.venuesCollection.items, ({ suburb }) => suburb);
			return bySuburb;
		}
	}

	export async function load() {
		let links = await getLinks();
		let venues = await getVenues();

		return {
			props: {
				links,
				venues
			}
		};
	}
</script>

<script>
	export let links;
	export let venues;
	import SeoSocial from '$lib/components/seo-social.svelte';
</script>

<SeoSocial title="Links" />

<div class="max-w-5xl px-5 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<div class="space-y-10 sm:pr-20 lg:pr-28">
			<h2 class="notch-left text-xl">A Bunch Of Links</h2>

			<div class="space-y-3 pl-3">
				{#each links as { label, items }, i}
					<h4
						class="-ml-3 border-l-2 pl-3 border-ruby text-lg font-bold uppercase italic leading-tight"
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

			<h2 class="notch-left text-xl">... and a complete listing of all of the venues that we've listed shows for</h2>

			<p class="prose">Are we missing any vital spaces? <a href="/contact">Please let us know!</a></p>

			<div class="space-y-3 pl-3">
				{#each venues as { label, items }, i}
				<h4
					class="-ml-3 border-l-2 pl-3 border-ruby text-lg font-bold uppercase italic leading-tight"
				>
					{label}
				</h4>
				<dl class="pb-10">
					{#each items as { venueName, url }}
						<dt>
							<a href={url} class="hover:text-ruby">
								<strong>{venueName}</strong>
							</a>
						</dt>
					{/each}
				</dl>
				{/each}
			</div>
		</div>
	</div>
</div>
