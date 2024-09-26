<script>
	import SeoSocial from '$lib/components/seo-social.svelte';
	import Button from '$lib/components/button.svelte';
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
		<h1 class="notch-left text-xl">
			Join the team: <span class="text-ruby">Front-end Developer/Designer</span>
		</h1>
		<p>
			<strong
				>We’re looking for a passionate and creative hybrid developer/designer to help us evolve our
				core product - the SydneyMusic.net website.</strong
			>
		</p>

		<p>Job applications close: 14/8/24</p>
	</div>
	<div class="w-48 ml-5">
		<Button
			label="Apply Now"
			href="https://docs.google.com/forms/d/e/1FAIpQLSeTAVO3ASs1wv2NIHEnxgSpxUStwz4VWbzgLMvj0XFvL3Nkug/viewform"
			target="_blank"
		/>
	</div>
	<div class="prose">
		<p>
			Launched in June 2022, the current <a href="https://SydneyMusic.net">SydneyMusic.net </a> website
			has gone without any significant changes in some time. It’s a great product, but it’s time to freshen
			things up - both from a visual and technical point of view.
		</p>

		<p>
			The successful applicant for this role will be an experienced HTML/CSS/JavaScript developer
			with proficient product design skills.
		</p>

		<p>Here’s who we’re looking for:</p>
		<ul>
			<li>Expert level creator of beautiful HTML and CSS</li>
			<li>
				A passion for performant browser rendering, site performance, and getting rid of the bloat
				that's permeated the internet for the last two decades
			</li>
			<li>
				Keen product design skills with a developed understanding of prototyping, design thinking
				and iteration
			</li>
			<li>Intermediate JavaScript (all run at build-time - we do not do client-side rendering)</li>
			<li>A professional pride in good project and code structure</li>
		</ul>
		<p>Our tech stack is:</p>
		<ul>
			<li>SvelteKit (Svelte and Vite)</li>
			<li>TailwindCSS</li>
			<li>DatoCMS</li>
			<li>Netlify</li>
			<li>Plausible Analytics</li>
		</ul>
		<p>
			<a href="https://github.com/sydneymusic-joe/sydneymusic">Take a look at our codebase</a> if you
			wish - it's completely open source.
		</p>

		<p>To be a successful applicant, you will need to:</p>

		<ul>
			<li>
				Be an active gig-goer familiar with our local scene, particularly its grassroots. Our vision
				is to “get more people plugged in to Sydney’s incredible live music scene”, and we need a
				collaborator that understands the needs of the community and how we can better cater to it.
			</li>
			<li>
				Be available for occasional in-person meetings and collaborative work in the Sydney CBD or
				Inner West
			</li>
			<li>Be completely self-sufficient with your own workspace and tools</li>
			<li>
				Have a portfolio or some links that display your best work as a primary contributor. Include
				some GitHub links so we can take a look at your code too (if available)
			</li>
			<li>Have an ABN - you'll be working as a contractor on a time and materials basis.</li>
		</ul>

		<h1 class="notch-left text-xl">About SydneyMusic.net</h1>

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

		<h1 class="notch-left text-xl">Setting your price</h1>

		<p>
			This is our first financial investment in product development for the SydneyMusic.net website:
			all work to date has been contributed by volunteers. We’re pretty pleased by how far we’ve
			got, but we need to figure out how we can better serve a broader audience. That will require
			investing in how the guide looks and functions.
		</p>

		<p>
			As a result, we’re inviting applicants to nominate their own hourly rate for work done on the
			site. The organisation can not afford commercial rates, but if you’re interested in putting a
			bit towards SydneyMusic as an organisation by nominating a discounted hourly rate, Sydney’s
			music community will be grateful for your contributions.
		</p>

		<p>
			With that said, your nominated rate won’t be the primary determining factor in who we hire -
			our primary objective is to find someone that has the right skills that can be a partner in
			making SydneyMusic.net the best it can be. We’ll consider all applications, and we’ll make the
			decision primarily guided by the person with the right skillset to help us with our needs.
		</p>

		<p>
			<strong>Got questions?</strong> Talk to Joe Hardy at
			<a href="mailto:joe@sydneymusic.net">joe@sydneymusic.net</a>
		</p>
	</div>
	<div class="w-48 ml-5">
		<Button
			label="Apply Now"
			href="https://docs.google.com/forms/d/e/1FAIpQLSeTAVO3ASs1wv2NIHEnxgSpxUStwz4VWbzgLMvj0XFvL3Nkug/viewform"
			target="_blank"
		/>
	</div>
</div>
