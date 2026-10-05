<script>
	import Heading from '../../lib/components/heading.svelte';
	import Paragraph from '../../lib/components/paragraph.svelte';

	let { data } = $props();
</script>

<main class="max-w-5xl mx-auto p-5">
	<div class="flex gap-x-4">
		<img src="/canhand.svg" class="h-10 md:h-12" alt="Can hand icon" />
		<Heading level={1} variant="xl">Gig Guide</Heading>
	</div>

	<Paragraph class="max-w-100">
		This guide is as simple as we can practically get away with. We’ll include some occasional
		commentary (feel free to submit your own!) to help give you context on what can be a dizzyingly
		complex network of musicians, collectives, communities, and spaces, or just make sure you don’t
		miss out on catching your next favourite act.
	</Paragraph>

	<ul class="grid md:grid-cols-2 gap-6">
		{#each data.gigs as gig}
			<li>
				<h3 class="headliner text-lg font-medium leading-[1.5rem]">
					{gig.promotedName}
				</h3>

				{#if gig.performers}
					<p class="supports text-sm font-normal">
						{gig.performers}
					</p>
				{/if}

				<p class="text-sm text-neutral-500">
					{gig.formattedTime}
					{' '}
					{gig.formattedDate}
				</p>
			</li>
		{/each}
	</ul>

	<img src="/banksia.svg" class="h-10 mt-8 mx-auto md:hidden" alt="Banksia icon" />
</main>
