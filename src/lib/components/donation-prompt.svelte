<script>
	import Button from '$lib/components/button.svelte';
	import Heading from '$lib/components/heading.svelte';
	import { mds } from '../../lib/donorstats.js';
</script>
<div class="flex flex-col items-center md:mr-10 my-10">
	<Heading level={2} variant="md" class="uppercase stretch">Become a supporter!</Heading>
	<div class="space-y-2 text-center items-center flex flex-col">
	<div class="flex gap-x-3 items-center">
		<img src="/fundraise-heart.svg" class="h-8" />
		<p><strong class="font-semibold">We are fundraising for FY27</strong><br /><strong class="font-semibold">{mds.totalFundedPercent}%</strong> of FY27 target raised</p>
	</div>
	<div class="flex flex-row gap-3 pt-3">
	<Button label="Donate now" variant="outline" href="https://square.link/u/eS7bgm8M" />
	<Button label="More info" variant="secondary" href="/support" />
	</div>
	<div class="italic text-sm">Donations over $2 are tax deductible.</div>
	</div>
</div>