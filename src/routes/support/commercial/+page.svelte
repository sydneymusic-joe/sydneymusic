<script>
	import Button from '$lib/components/button.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Paragraph from '$lib/components/paragraph.svelte';
	import SeoSocial from '$lib/components/seo-social.svelte';
</script>

<SeoSocial />


<picture>
	<source
		srcset="/canman-gigs@2x.png 2560w, /canman-gigs@1x.png 1280w"
		media="(min-width : 640px)"
	/>
	<source srcset="/canman-gigs-mobile.png" media="(max-width : 640px)" />
	<img
		src="/canman-gigs@1x.png"
		alt="SydneyMusic.net mascot Can Man loves a read"
		class="aspect-3/1 sm:aspect-banner object-cover w-full mx-auto lg:max-w-5xl"
	/>
</picture>

<div class="max-w-5xl px-5 mx-auto overflow-x-clip pt-5 md:pt-10">

	<div class="md:flex md:flex-row gap-10">
		<div>
			<Heading>Become a sponsor</Heading>

			<Paragraph>We’re about to start implementing a sponsorship model to support <a href="/gig-guide" class="text-ruby underline">Sydney’s most comprehensive gig guide</a>. We’re keen to chat to live music-loving local businesses as we embark on this journey.</Paragraph>
			<Paragraph>Interested? Get in touch.</Paragraph>

			<div class="space-y-5">
				<div>
					<form name="contact" method="POST" data-netlify="true" class="grid md:w-[75%] gap-2 mb-20">
						<label for="name">Name:</label>
						<input name="name" type="text" required />
						<label for="company">Company:</label>
						<input name="company" type="text" required />
						<label for="email">Email:</label>
						<input name="email" type="email" required />
						<label for="email">Mobile Number:</label>
						<input name="email" type="text" />
						<label for="thoughts">Any thoughts?</label>
						<textarea name="thoughts"></textarea>
						<button type="submit" class="mt-2 p-2 font-serif uppercase italic bg-black text-white block font-bold hover:bg-ruby focus:bg-ruby hover:text-white focus:text-white focus:outline focus:outline-2 focus:outline-ruby transition-colors no-underline">Let's chat!</button>
						<div class="text-xs">We won‘t spam you, but we’ll keep you posted on what we’re up to.</div>
					</form>
				</div>
			</div>
	</div>
		<div>
			<Heading><a name="api">License our API feed</a></Heading>
			<Paragraph>Our entire gig guide is available as an API feed by license agreement.</Paragraph>

			<Paragraph>Getting access to our data gives you incredibly comprehensive, high quality information about every gig we could find taking place across Greater Sydney, vetted to maximum accuracy by humans — covering backyard shows, art spaces and warehouses through to commercial live music at all levels.</Paragraph>

			<Paragraph>Our data contains 16,000 live music events in a simple but robust data set, giving you the power to explore our grassroots creative ecosystem over the last 3+ years with high fidelity but accessible data.</Paragraph>

			<Paragraph>Or if you want you can just use it to start your own gig guide with our data and run ads on it. It’s up to you!</Paragraph>

			<Paragraph>For licensing enquiries, contact Joe Hardy at <a href="mailto:joe@sydneymusic.net" class="text-ruby underline">joe@sydneymusic.net</a></Paragraph>
		</div>
	</div>

	<Heading>About SydneyMusic.net</Heading>
	<Paragraph>SydneyMusic.net is a much loved resource, read by over 25,000 people every month. We aspire to be Sydney’s most accurate and comprehensive gig guide: human-edited, fact-checked, peer-reviewed and given to you, the reader, as the most high-quality source of intel on exactly what is going on in the soup.</Paragraph>

	<Paragraph>We are in the process of building a sponsorship model to help us sustain SydneyMusic in the year ahead, but if you want to get in early you can beat the queue and get in touch with us right now to start a conversation.</Paragraph>

	<Paragraph>We are a not-for-profit organisation — founded in March 2022, registered with the ACNC in November 2022, and all donations to our organisation are tax deductible.</Paragraph>
</div>