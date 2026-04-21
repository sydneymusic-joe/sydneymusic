<script>
	import Logo from '$lib/components/logo.svelte';
	import Button from '$lib/components/button.svelte';

// class="[&:has(input:checked)]:hidden transition-all transition-discrete absolute top-0 left-0 w-full h-full m-auto bg-merchbrown z-100"
</script>
<div class="bg-merchbrown">
	<div class="flex flex-col md:flex-row">
		<div class="flex-1 min-h-[300px]" style="background-image : url(/fundraiser-punters.jpg); background-size : cover; background-position : center center">

		</div>
		<div class="flex-1 text-white p-12 flex items-center">
		<div>
			<div class="mb-12"><Logo class="w-32 lg:w-64" /></div>
			<h1 class="stretch font-normal uppercase text-xl lg:text-4xl mb-12" style="line-height : 90%;">Over 35,000 gig-goers served every month</h1>
			<div class="mb-6 space-y-3 text-sm lg:text-md">
				<p>We receive feedback every week from punters telling us that this guide has helped them to connect with live music communities they never would have found otherwise.</p>
				<p><strong class="font-semibold">We need to raise funds to ensure our continued operation in FY27.</strong></p>
				<p> Help us get more people out to shows by becoming a supporter.</p>
			</div>
			<div class="space-y-2">
			<Button variant="primary" label="Make a donation" href="https://square.link/u/eS7bgm8M" target="_blank" />
			<Button label="Buy some merch" href="https://store.sydneymusic.net" target="_blank" />
			</div>
		</div>
		</div>
	</div>
</div>
