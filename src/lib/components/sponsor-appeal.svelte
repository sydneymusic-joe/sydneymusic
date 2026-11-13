<script>
import Heading from '#lib/components/heading.svelte';
import Button from '#lib/components/button.svelte';
</script>

<div class="space-y-0 rounded-lg border border-dashed border-gray-400 bg-gray-100 p-8 text-center">
	<Heading level={3} variant="md" class="mb-2">You could be here!</Heading>
	<Button
		href="/support/commercial"
		variant="outline"
		size="md"
		class="inline-block"
		label="Become a Sponsor"
	/>
</div>
