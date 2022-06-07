<script context="module">
    import API from '$lib/contentful/';
    import { groupBy } from '../lib/globals.mjs';
  
      const getLinks = async () => {
        const data = await API(`{
          linkCollection(
            order: title_ASC
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
          let byCategory = groupBy(data.linkCollection.items, ({category}) => category);

          return byCategory;
        }

        return {}
      };
  
      export async function load() {
          let links = await getLinks();
  
          return {
              props: {
                  links
              }
          };
      }
  </script>

<script>
  export let links;
</script>

    <div class="max-w-5xl px-5 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<img src="https://picsum.photos/1000/150?grayscale" alt="" class="aspect-banner w-full" />

		<div class="space-y-10 pr-20 lg:pr-28">
			<h2 class="notch-left text-xl">A Bunch Of Links</h2>
      
      <div class="space-y-3 pl-3">
      {#each links as { label, items}, i}
      <h4 class="-ml-3 border-l-2 pl-3 border-ruby text-lg font-bold uppercase italic leading-tight">{label}</h4>
            <dl>
                {#each items as { title, url, description }}
                    <dt><a href="{url}">
                        <strong>{title}</strong>
                        </a>
                    </dt>
                    <dd>{description}</dd>
            {/each}
            </dl>
            {/each}
		</div>
  </div>
	</div>
    </div>
