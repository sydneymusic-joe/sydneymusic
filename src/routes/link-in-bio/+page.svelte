<script>
let { data } = $props();

const primary = data.linkinbio.links.filter((l) => l.image != null);
const secondary = data.linkinbio.links.filter((l) => l.image == null);
</script>

<div class="mx-auto max-w-5xl space-y-32 px-5 pb-24">
	<div class="space-y-10">
		<div class="space-y-10 sm:pr-20 lg:pr-28">
			<div class="mt-10 flex max-w-[65ch] items-center gap-3">
				<div class="lib-logo aspect-square"></div>
				<h3 class="basis-auto p-2 text-2xl font-bold md:text-4xl">{data.linkinbio.headline}</h3>
			</div>

			<div class="prose">
				{@html data.linkinbio.welcomeParagraph}

				<h2>"Link in Bio"</h2>

				<div class="link-in-bio primary mb-5 space-y-5">
					{#each primary as link, index}
						<div data-idx={index+1} style="background-image :  url({link.image.url})">
							<div class="linkpanel w-full p-3">
								<div class="link"><a href={link.url}>{link.title}</a></div>
								<div class="description">{@html link.description}</div>
							</div>
						</div>
					{/each}
				</div>

				<h2>Main Links</h2>

				<div class="link-in-bio secondary">
					{#each secondary as link}
						<div>
							<div class="title"><a href={link.url}>{link.title}</a></div>
							{@html link.description}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
