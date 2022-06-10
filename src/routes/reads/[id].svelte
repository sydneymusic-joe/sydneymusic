<script>
	import Read from '$lib/components/read.svelte';
	export let headline;
	export let body;
	export let otherReads;
</script>

<div class="max-w-5xl px-5 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<img src="https://picsum.photos/1000/150?grayscale" alt="" class="aspect-3/1 sm:aspect-banner object-cover w-full" />

		<div class="grid lg:grid-cols-sidebar-right">
			<div class="prose prose-xl">
				<h1>{headline}</h1>
				{@html body}
			</div>
		</div>
    <div>
      
    </div>
	</div>

	<!-- Second section -->
	<div class="space-y-10">
		<h2 class="notch-left text-xl">More reads</h2>
		<div class="grid lg:grid-cols-2">
			<div class="space-y-10 sm:pr-20 lg:pr-28">
      {#each otherReads as { headline, excerpt, slug }, i}
      {#if i < 2}
        <a href="/reads/{slug}" class="block">
          <Read {headline} body={excerpt} />
        </a>
      {/if}
      {/each}
			</div>
			<div class="space-y-10 sm:pr-20 lg:pr-28">
        {#each otherReads as { headline, excerpt, slug }, i}
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
