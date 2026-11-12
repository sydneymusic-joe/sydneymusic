<script>
import {
	navigationFooterMusic,
	navigationFooterSupport,
	navigationFooterAbout
} from '../globals.mjs';
import Logo from './logo.svelte';
import EmailSignup from './email-signup.svelte';
import Container from './container.svelte';
import Heading from './heading.svelte';
import Paragraph from './paragraph.svelte';
</script>

<footer class="mt-5 w-full lg:mt-20">
	<div class="bg-gray-200">
		<Container>
			<EmailSignup shadow={false} />
		</Container>
	</div>

	<div class="bg-gray-900 text-white">
		<Container>
			<div class="p-5 sm:p-10">
				<Paragraph variant="sm" class="mx-auto mb-0 text-center">
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

	<nav class="bg-black py-10 text-gray-500">
		<Container>
			<div class="grid justify-between gap-5 py-5 lg:grid-cols-5 lg:gap-20">
				<div class="lg:col-span-2">
					<a href="/" class="mb-10 block max-w-64 lg:max-w-none">
						<Logo invert={true} stickers={true} />
					</a>

					<Paragraph variant="xs">
						&copy; SydneyMusic Ltd. 2022-2025<br />
						All rights reserved.<br />
						ABN 87 663 482 513<br />
						<br />
						SydneyMusic is registered as a not-for-profit entity with the
						<a href="https://www.acnc.gov.au" class="text-white" target="_blank"
							>Australian Charities and Not-for-profits Commission</a
						>.
					</Paragraph>
					<Paragraph variant="xs">
						The SydneyMusic "Can Man" mascot and illustrations were created by and &copy; Hugh
						McKinnon, 2022. The SydneyMusic logo and merchandise was created by <a
							href="https://studio3.am/"
							target="_blank"
							class="text-white">Studio 3AM</a
						>.
					</Paragraph>
				</div>

				<div class="space-y-3">
					<Heading level={2} class="text-white" variant="md"
						><a class="no-underline hover:underline" href="/gig-guide">Music</a></Heading
					>
					{#each navigationFooterMusic as item}
						<a
							href={item.href}
							class="plausible-event-name=Footer+Nav block text-sm hover:border-white hover:underline"
						>
							{item.title}
						</a>
					{/each}
				</div>

				<div class=" space-y-3">
					<Heading level={2} class="text-white" variant="md"
						><a class="no-underline hover:underline" href="/support">Support Us</a></Heading
					>
					{#each navigationFooterSupport as item}
						<a
							href={item.href}
							class="plausible-event-name=Footer+Nav block text-sm hover:border-white hover:underline"
						>
							{item.title}
						</a>
					{/each}
				</div>

				<div class="space-y-3">
					<Heading level={2} class="text-white" variant="md"
						><a class="no-underline hover:underline" href="/about">About</a></Heading
					>
					{#each navigationFooterAbout as item}
						<a
							href={item.href}
							class="plausible-event-name=Footer+Nav block text-sm hover:border-white hover:underline"
						>
							{item.title}
						</a>
					{/each}
				</div>
			</div>
		</Container>
	</nav>
</footer>
