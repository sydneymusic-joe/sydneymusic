<script>
	import SeoSocial from '$lib/components/seo-social.svelte';
	import Heading from '$lib/components/heading.svelte';
	import Paragraph from '$lib/components/paragraph.svelte';
	import Button from '$lib/components/button.svelte';
	import Page from '../wall-of-legends/+page.svelte';
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

<Heading>Thank you to the incredible organisations, businesses and individuals that have made a commitment to support SydneyMusic in the upcoming FY26 year.</Heading>

<Paragraph>Your support helps us to “connect Sydney with its scene” and get more people out seeing local, community-first underground live music.</Paragraph>

<Paragraph>SydneyMusic.net is a much loved resource, read by over 25,000 people every month. We aspire to be Sydney’s most accurate and comprehensive gig guide: human-edited, fact-checked, peer-reviewed and given to you, the reader, as the most high-quality source of intel on exactly what is going on in the soup.</Paragraph>

<Paragraph>We are in the process of building a sponsorship model to help us sustain SydneyMusic in the year ahead, but if you want to get in early you can beat the queue and get in touch with us right now to start a conversation.</Paragraph>

<Paragraph>We are a not-for-profit organisation — founded in March 2022, registered with the ACNC in November 2022, and all donations to our organisation are tax deductible.</Paragraph>

<Heading>Commercial sponsorship enquiries</Heading>
<Paragraph>If you are a business or organisation and would like to express your interest in our upcoming commercial sponsorship program:</Paragraph>

<Button label="I want to become a sponsor" variant="primary" />
<Heading>API Feed</Heading>
<Paragraph>Our entire gig guide is available as an API feed by license agreement.</Paragraph>

<Paragraph>Getting access to our data gives you incredibly comprehensive, high quality information about every gig we could find taking place across Greater Sydney, vetted to maximum accuracy by humans — covering backyard shows, art spaces and warehouses through to commercial live music at all levels.</Paragraph>

<Paragraph>Our data contains 16,000 live music events in a simple but robust data set, giving you the power to explore our grassroots creative ecosystem over the last 3+ years with high fidelity but accessible data.</Paragraph>

<Paragraph>Or if you want you can just use it to start your own gig guide with our data and run ads on it. It’s up to you!</Paragraph>

For licensing enquiries, contact Joe Hardy at joe@sydneymusic.net
</div>