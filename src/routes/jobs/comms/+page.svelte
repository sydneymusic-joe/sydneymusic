<script>
	import SeoSocial from '$lib/components/seo-social.svelte';
	import Button from '$lib/components/button.svelte';
	import Heading from '$lib/components/heading.svelte';
</script>

<SeoSocial title="Join the SydneyMusic.net team" />

<picture>
	<source
		srcset="/canman-gigs@2x.png 2560w, /canman-gigs@1x.png 1280w"
		media="(min-width : 640px)"
	/>
	<source srcset="/canman-gigs-mobile.png" media="(max-width : 640px)" />
	<img
		src="/canman-gigs@1x.png"
		alt="SydneyMusic.net mascot Can Man loves a gig"
		class="aspect-3/1 sm:aspect-banner object-cover w-full mx-auto lg:max-w-5xl"
	/>
</picture>
<div class="max-w-5xl px-5 mt-5 mx-auto space-y-5 pb-24">
	<div class="prose">
		<Heading level={4} variant="sm">Join the team: </Heading>
		<Heading level={1} variant="lg" class="text-ruby uppercase stretch font-medium">
			Communications Producer
		</Heading>
		<p>Part-time • Fixed-term contract (12 months)</p>
		<p>
			<strong
				>We’re looking for a passionate and creative person with prior experience running public-facing communications. This role’s primary responsibility will be to manage our social media accounts and email newsletters.</strong
			>
		</p>
		<div class="max-w-[50%] py-8 space-y-3">
			<Button
				label="Apply Now"
				href="https://form.fillout.com/t/kpbMPRgNQPus"
				target="_blank" variant="primary"
			/>
			<Button
				label="Read the position description" variant="secondary"
				href="https://docs.google.com/document/d/1qkV4V_JFc-quXYDCnyZYtjZto-Lea7pD3UcHT-9vBuI/edit?tab=t.0"
				target="_blank"
			/>
		</div>

		<Heading level={2} variant="sm" class="font-medium stretch uppercase">At a glance</Heading>
		<ul>
			<li><strong>Job applications close:</strong> 8th of June 2026 at 5pm</li>
			<li>12 hours a week (1.5 days equiv.)</li>
			<li>Salary $443 per week + super</li>
			<li>Work from anywhere (our office is in Chippendale)</li>
			<li>Days: Wednesday-Sunday</li>
		</ul>

		<Heading level={2} variant="sm" class="font-medium stretch uppercase">About the gig</Heading>
		<p>
			You’ll support the SydneyMusic team by taking over the <strong>daily Instagram stories</strong> every day except Monday and Tuesday - you’ll design assets, tag artists, issue corrections where necessary and respond to enquiries. 
		</p>

		<p>
			You’ll also own the <strong>weekly email</strong> - writing it most weeks, and helping redesign it to offer more to our subscribers.
		</p>

		<p>
			As you grow in the role, you’ll <strong>help develop a voice for our comms</strong> and contribute ideas that support our mission to get more people more involved in more gigs
		</p>

		<Heading level={2} variant="sm" class="font-medium stretch uppercase">Who this role is for</Heading>

		<p>
			This role would suit someone working as a freelance, early-mid career comms professional or student, who is flexible (or requires flexibility!) in their hours – you’ll be working mornings almost exclusively, in blocks of between 1-3 hours. 
		</p>


		<Heading level={2} variant="sm" class="font-medium stretch uppercase">About SydneyMusic</Heading>
		<p>
			SydneyMusic.net is a not-for-profit organisation that maintains a local, 100% human researched
			and edited gig guide to help solve the problem of discoverability for our grassroots music
			community. The guide is available through our <a href="https://sydneymusic.net">website</a>,
			<a href="https://instagram.com/sydneymusicdotnet">Instagram Stories</a>, an
			<a
				href="https://sydneymusic.us17.list-manage.com/subscribe?u=33fe15202bc9075111c10636a&amp;id=08cf9e0f0b"
				>e-mail newsletter</a
			>
			and a <a href="https://sydneymusic.net/playlist">streaming playlist</a>.
		</p>

		<Heading level={2} variant="sm" class="font-medium stretch uppercase">Got questions?</Heading>

		<p>
			Talk to Joe Hardy at
			<a href="mailto:joe@sydneymusic.net">joe@sydneymusic.net</a>
		</p>
	</div>


	
	<div class="w-48">
		<Button
			label="Apply Now" variant="primary"
			href="https://form.fillout.com/t/kpbMPRgNQPus"
			target="_blank"
		/>
	</div>

	<div class="space-y-3">
		<img src="/Logo-NSWGovSoundNSW.png" class="w-48" />
		<div class="text-xs">This role is entirely funded by a Contemporary Music Local Audience Development Grant from Sound NSW.</div>
	</div>

</div>
