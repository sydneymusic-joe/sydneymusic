<script>
	import SeoSocial from '$lib/components/seo-social.svelte';
	import Heading from '$lib/components/heading.svelte';
</script>

<SeoSocial title="Contact" />

<div class="max-w-5xl px-5 mx-auto space-y-32 pb-24">
	<div class="space-y-10">
		<div class="space-y-10 sm:pr-20 lg:pr-28">
			<Heading level={2} variant="xl" class="notch-left">Contact Us</Heading>

			<div class="prose">
				<p>Contacting us is pretty simple!</p>
				<ul>
					<li>
						You can <strong>submit a gig</strong> via
						<a href="mailto:gigs@sydneymusic.net">gigs@sydneymusic.net</a>
					</li>
					<li>
						Or send all other feedback, questions, ideas or thoughts to <a
							href="mailto:contact@sydneymusic.net">contact@sydneymusic.net</a
						>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>
