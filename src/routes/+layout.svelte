<script>
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Button from '$lib/components/button.svelte';
	import Logo from '$lib/components/logo.svelte';
	import { page } from '$app/stores';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 * @property {Object} data
	 */

	/** @type {Props} */
	let { children, data } = $props();
	let { url } = $page;

	const { donorStats } = data;

	// Split Test: Show the notice on the homepage, reads, venues VS the support popover
	// const showNotice = url.pathname === "/" || ['/reads', '/gig-guide/venues'].some(path => url.pathname.startsWith(path));
	const showNotice = false;

</script>

<svelte:head />

<Header {showNotice} {donorStats} />
{@render children?.()}
<Footer />
		<div class="[&:has(input:checked)]:hidden transition-all transition-discrete absolute top-0 left-0 w-full h-full bg-merchbrown z-100">
			<div class="absolute right-10 top-10 cursor-pointer">
				<label class="block"><input type="checkbox" checked="" class="sr-only" title="Close the popup" />
				<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				viewBox="0 0 24 24"
				fill="currentColor"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-label="Close"
				class="lucide lucide-x cursor-pointer"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
			>
			</label>
			</div>
			<div class="flex flex-col md:flex-row h-full">
				<div class="flex-1" style="background-image : url(/fundraiser-punters.jpg); background-size : cover; background-position : center center">

				</div>
				<div class="flex-1 text-white p-20 flex items-center">
				<div>
					<div class="mb-12"><Logo class="w-32 lg:w-64" /></div>
					<h1 class="stretch font-normal uppercase text-xl lg:text-4xl mb-12" style="line-height : 90%;">Over 35,000 gig-goers served every month</h1>
					<div class="mb-6 space-y-3 text-sm lg:text-md">
						<p>We get told every week that this guide has helped countless people connect with their live music community around them.</p>
						<p><strong class="font-semibold">We need to raise funds to assure our continued operation in FY27.</strong></p>
						<p> Help us get more people out to shows by becoming a supporter.</p>
					</div>
					<div class="space-y-2">
					<Button variant="primary" label="Make a donation" href="/support" />
					<Button label="Continue to gig guide" />
					<a class="underline text-sm" href="#">I’ve already donated</a>
					</div>
				</div>
				</div>
			</div>
		</div>
