<script context="module">
    import API from '$lib/contentful/';
  
      const getLinks = async () => {
          const data = await API(`{
        linkCollection(
          order: title_ASC
        ) {
          items {
            title
            url
            description
          }
        }
      }`);
  
          return data.linkCollection.items;
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

            <dl>
                {#each links as { title, url, description }}
                    <dt><a href="{url}">
                        <strong>{title}</strong>
                        </a>
                    </dt>
                    <dd>{description}</dd>
            {/each}
            </dl>
		</div>
	</div>
    </div>
