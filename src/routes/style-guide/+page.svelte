<script>
	import Container from '$lib/components/container.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Paragraph from '$lib/components/paragraph.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
	import DonationForm from '../../lib/components/donation-form.svelte';

	let { data } = $props();
</script>

<SeoSocial title="Style Guide" />

<Container>
	<!-- header -->

	<Heading level={1} variant="xl" class="text-center md:text-left w-full">
		SydneyMusic.net Style Guide
	</Heading>

	<!-- Heading Component Variants -->
	<div class="space-y-8 mt-16">
		<h2 class="font-mono text-xl font-bold mb-2">Heading Component Variants</h2>

		<div class="space-y-6">
			<div>
				<code class="text-sm text-gray-600 mb-2 block">variant="2xl"</code>
				<Heading level={1} variant="2xl" class="mb-0">Extra Large Heading</Heading>
			</div>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">variant="xl"</code>
				<Heading level={1} variant="xl" class="mb-0">Large Heading</Heading>
			</div>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">variant="lg" (default)</code>
				<Heading level={2} variant="lg" class="mb-0">Medium Large Heading</Heading>
			</div>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">variant="md"</code>
				<Heading level={3} variant="md" class="mb-0">Medium Heading</Heading>
			</div>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">variant="sm"</code>
				<Heading level={4} variant="sm" class="mb-0">Small Heading</Heading>
			</div>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">variant="xs"</code>
				<Heading level={5} variant="xs" class="mb-0">Extra Small Heading</Heading>
			</div>
		</div>

		<div class="space-y-6 mt-8">
			<h3 class="font-mono text-lg font-semibold mb-4">Notch Options</h3>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">class="notch-left"</code>
				<Heading level={2} variant="lg" class="notch-left mb-0">Heading with Left Notch</Heading>
			</div>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">class="notch-right"</code>
				<Heading level={2} variant="lg" class="notch-right mb-0">Heading with Right Notch</Heading>
			</div>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">class="notch-thic notch-left"</code>
				<Heading level={2} variant="lg" class="notch-thic notch-left mb-0">
					Thick Left Notch Heading
				</Heading>
			</div>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">class="notch-thic notch-right"</code>
				<Heading level={2} variant="lg" class="notch-thic notch-right mb-0">
					Thick Right Notch Heading
				</Heading>
			</div>
		</div>
	</div>

	<!-- Paragraph Component Variants -->
	<div class="space-y-8 mt-16">
		<h2 class="font-mono text-xl font-bold mb-2">Paragraph Component Variants</h2>

		<div class="space-y-6">
			<div>
				<code class="text-sm text-gray-600 mb-2 block">variant="2xl"</code>
				<Paragraph variant="2xl" class="mb-0">
					This is an extra large paragraph variant. It uses a serif font and is designed for
					prominent text that needs to stand out, perfect for introductory statements or key
					messaging.
				</Paragraph>
			</div>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">variant="xl"</code>
				<Paragraph variant="xl" class="mb-0">
					This is a large paragraph variant with serif typography. It's great for subheadings,
					important announcements, or text that should have more visual weight than regular body
					text.
				</Paragraph>
			</div>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">variant="lg"</code>
				<Paragraph variant="lg" class="mb-0">
					This is a large paragraph variant that uses serif font styling. It provides a nice balance
					between readability and visual prominence, suitable for section introductions or featured
					content.
				</Paragraph>
			</div>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">variant="md" (default)</code>
				<Paragraph variant="md" class="mb-0">
					This is the standard medium paragraph variant. It uses sans-serif typography and is
					perfect for regular body text, providing optimal readability for most content on the site.
				</Paragraph>
			</div>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">variant="sm"</code>
				<Paragraph variant="sm" class="mb-0">
					This is a small paragraph variant with sans-serif styling. It's ideal for supporting text,
					captions, or secondary information that needs to be readable but less prominent.
				</Paragraph>
			</div>

			<div>
				<code class="text-sm text-gray-600 mb-2 block">variant="xs"</code>
				<Paragraph variant="xs" class="mb-0">
					This is the extra small paragraph variant. Perfect for fine print, disclaimers, or
					supplementary information that needs to be present but unobtrusive.
				</Paragraph>
			</div>
		</div>
	</div>

	<!-- Donation Form Sizes -->
	<div class="mt-16">
		<h2 class="font-mono text-xl font-bold mb-8">Donation Form Sizes</h2>
		<div class="grid grid-cols-4 md:grid-cols-8 gap-8">
			<div class="col-span-4">
				<code class="text-sm text-gray-600 mb-2 block">size="lg" (default)</code>
				<DonationForm theme="dark" size="lg" donorStats={data.donorStats} />
			</div>
			<div class="col-span-3">
				<code class="text-sm text-gray-600 mb-2 block">size="sm" with options</code>
				<DonationForm
					theme="dark"
					size="sm"
					showSponsors={true}
					showFineprint={false}
					showPercentage={false}
					headline="SydneyMusic is 60% saved"
					appealContent="Our wonderful readers, RØDE and Heaps Normal helped us get back online. With your help we can connect Sydney with its scene and get people out to shows."
					callToAction="We're not out of the woods yet – can you support us?"
					donorStats={data.donorStats}
				/>
			</div>
		</div>

		<!-- Donation Form Themes -->
		<div class="mt-16">
			<h2 class="font-mono text-xl font-bold mb-8">Donation Form Themes</h2>
			<div class="grid md:grid-cols-2 gap-8">
				<div>
					<code class="text-sm text-gray-600 mb-2 block">theme="dark" (default)</code>
					<DonationForm theme="dark" donorStats={data.donorStats} />
				</div>
				<div>
					<code class="text-sm text-gray-600 mb-2 block">theme="ruby"</code>
					<DonationForm theme="ruby" donorStats={data.donorStats} />
				</div>
				<div>
					<code class="text-sm text-gray-600 mb-2 block">theme="yellow"</code>
					<DonationForm theme="yellow" donorStats={data.donorStats} />
				</div>
				<div>
					<code class="text-sm text-gray-600 mb-2 block">theme="light"</code>
					<DonationForm theme="light" donorStats={data.donorStats} />
				</div>
			</div>
		</div>
	</div></Container
>
