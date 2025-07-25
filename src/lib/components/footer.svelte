<script>
	import {
		navigationFooterMusic,
		navigationFooterSupport,
		navigationFooterAbout
	} from '../globals.mjs';
	import Logo from './logo.svelte';
	import Button from './button.svelte';
	import EmailSignup from './email-signup.svelte';
	import Container from './container.svelte';
	import Heading from './heading.svelte';
	import Paragraph from './paragraph.svelte';
</script>

<footer class="w-fullmt-5 lg:mt-20 mb-10">
	<div class="bg-gray-200">
		<Container>
			<EmailSignup shadow={false} />
		</Container>
	</div>

	<div class="bg-gray-900 text-white">
		<Container>
			<div class="p-5 sm:p-10">
				<Paragraph variant="sm" class="text-center mx-auto mb-0">
					This website was created on the unceded lands of the Gadigal people of the Eora nation. We
					acknowledge their legacy and extend our respects to their elders past, present and
					emerging. We extend that respect to all Aboriginal and Torres Strait Islanders today, and
					encourage all settlers building communities and telling stories on stolen land to Pay The
					Rent by donating to First Nations-run community organisations on the country where they
					live and work.
				</Paragraph>
			</div>
		</Container>
	</div>

	<nav class="bg-black text-gray-500 py-10">
		<Container>
			<div class="grid lg:grid-cols-5 gap-5 lg:gap-20 justify-between py-5">
				<div class="lg:col-span-2">
					<a href="/" class="block mb-10 max-w-64 lg:max-w-none">
						<Logo invert={true} stickers={true} />
					</a>

					<Paragraph variant="xs">
						&copy; SydneyMusic Ltd. 2022-2025<br />
						All rights reserved.<br />
						ABN 87 663 482 513<br />
						<br />
						SydneyMusic is registered as a not-for-profit entity with the
						<a href="https://www.acnc.gov.au" class="text-white"
							>Australian Charities and Not-for-profits Commission</a
						>.
					</Paragraph>
					<Paragraph variant="xs">
						The SydneyMusic "Can Man" mascot and illustrations were created by and &copy; Hugh
						McKinnon, 2022. The SydneyMusic logo and merchandise was created by <a
							href="https://studio3.am/"
							class="text-white">Studio 3AM</a
						>.
					</Paragraph>
				</div>

				<div class="space-y-3">
					<Heading level={2} class="text-white" variant="md">Music</Heading>
					{#each navigationFooterMusic as item}
						<a
							href={item.href}
							class="plausible-event-name=Footer+Nav block hover:border-white text-sm hover:underline"
						>
							{item.title}
						</a>
					{/each}
				</div>

				<div class="space-y-3">
					<Heading level={2} class="text-white" variant="md">Support Us</Heading>
					{#each navigationFooterSupport as item}
						<a
							href={item.href}
							class="plausible-event-name=Footer+Nav block hover:border-white text-sm hover:underline"
						>
							{item.title}
						</a>
					{/each}
				</div>

				<div class="space-y-3">
					<Heading level={2} class="text-white" variant="md">About</Heading>
					{#each navigationFooterAbout as item}
						<a
							href={item.href}
							class="plausible-event-name=Footer+Nav block hover:border-white text-sm hover:underline"
						>
							{item.title}
						</a>
					{/each}
				</div>
			</div>
		</Container>
	</nav>
</footer>
