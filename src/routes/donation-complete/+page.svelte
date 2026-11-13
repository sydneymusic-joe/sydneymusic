<script>
import SeoSocial from '#lib/components/seo-social.svelte';
import Heading from '#lib/components/heading.svelte';
import Paragraph from '#lib/components/paragraph.svelte';
import Read from '#lib/components/read.svelte';
import Button from '#lib/components/button.svelte';
let { data } = $props();
</script>

<SeoSocial
	title={'Thank you for your donation!'}
	description={'Your generous donation to SydneyMusic.net will help us get Sydney out to its live music scene!'}
/>

<div class="mx-auto max-w-5xl px-5 pt-16 pb-24 lg:pt-24">
	<div class="grid gap-10 lg:grid-cols-5">
		<!-- First section -->
		<div class="space-y-10 lg:col-span-3">
			<div>
				<div class="prose prose-xl">
					<img src="/hero-character.png" class="mb-5 h-auto w-full max-w-64" alt="" />
					<Heading level={2} variant="xs">Donation Received</Heading>
					<Heading level={1} variant="2xl">Thank you for your donation!</Heading>
					<Paragraph
						>Your genenerous donation will help us get Sydney out to its live music scene! Check
						your email for your tax-deductible receipt.</Paragraph
					>
					<Paragraph>What's next? Get out there and discover some great gigs:</Paragraph>
					<Button
						label="Read the gig guide"
						href="/gig-guide"
						variant="primary"
						class="inline-block"
					/>
				</div>
			</div>
		</div>

		<!-- Second Section -->
		<!-- Right col -->
		<div class="space-y-10 lg:col-span-2">
			<Heading level={2} variant="md" class="notch-left mt-2">Latest Reads</Heading>
			<div class="space-y-5 sm:pr-20 lg:pr-20">
				{#each data.reads as { headline, excerpt, slug }}
					<a href="/reads/{slug}" class="block">
						<Read headline={headline} body={excerpt} />
					</a>
				{/each}
				<Button label="More Reads" href="/reads" variant="outline" />
			</div>
		</div>
	</div>
</div>
