<script>
	export let Index = 0;
	let prompts = [
		{
			type: 'component',
			content: `
				<div
					class="w-full border-y border-black border-dashed pb-8 pt-5 flex items-center justify-center gap-4 sm:gap-8"
				>
					<picture class="max-w-24 sm:max-w-28">
						<img
							src="/merch-sydney-music-tote.png"
							alt="SydneyMusic.net new merch featuring a t-shirt with dancing mascot"
							class="object-cover aspect-[4/6]"
						/>
					</picture>
					<div class="flex flex-col gap-4 pt-4">
						<p class="text-xs sm:text-sm text-center max-w-52 sm:max-w-56">
							Represent your favourite local gig guide while supporting us financially.
						</p>
						<a
							href="https://store.sydneymusic.net/"
							target="_blank"
							class="border uppercase border-black p-1 text-xs sm:text-sm bg-white hover:scale-[0.98] transition-all duration-100 ease-in-ou text-center"
							style="box-shadow: 3px 3px 0px 0px #000;"
						>
							VISIT MERCH STORE &raquo;
						</a>
					</div>
				</div>
			`
		},
		{
			type: 'text',
			content:
				'<strong class="text-ruby">SydneyMusic.net is made possible with the support of legends just like you.</strong><br />Help us continue by becoming a <a href="https://patreon.com/sydneymusic" target="_blank">SydneyMusic Supporter</a> or <a href="https://store.sydneymusic.net" target="_blank">making a donation</a>.'
		},
		{
			type: 'text',
			content: 'Want to submit a gig? <a href="mailto:gigs@sydneymusic.net">Send us an e-mail</a>!'
		},
		{
			type: 'text',
			content:
				'<strong>All you need is a system and a space.</strong><br />You should organise a gig!'
		},
		{
			type: 'text',
			content:
				'The <a href="/playlist">SydneyMusic playlist</a> (available on Spotify, Apple Music, and TIDAL) is updated each Wednesday. Hit play, discover something new, and then go see it live.'
		},
		{
			type: 'component',
			content: `
				<div class="w-full border-y border-black border-dashed py-7 flex items-center justify-center gap-2 sm:gap-4">
					<picture class="max-w-36 sm:max-w-44">
						<img
							src="/merch-dancer-shirt.png"
							alt="SydneyMusic.net new merch featuring a tote bag with Sydney Music text logo"
							class="object-cover aspect-[5/4]"
						/>
					</picture>
					<div class="flex flex-col gap-4">
						<p class="uppercase text-right max-w-36 text-base font-semibold italic">
							new merch available now!
						</p>
						<a
							href="https://store.sydneymusic.net/"
							target="_blank"
							class="border uppercase border-black p-1 text-sm bg-white hover:scale-[0.98] transition-all duration-150 ease-in-out text-center"
							style="box-shadow: 3px 3px 0px 0px #000;"
						>
							VISIT STORE &raquo;
						</a>
					</div>
				</div>
			`
		},
		{
			type: 'text',
			content:
				'The SydneyMusic website codebase is open source and free for anyone to use and adapt. Want to make a similar website for your own city, sub-community, or interest? <a href="https://github.com/sydneymusic-joe/sydneymusic">The code can be found here</a> with deployment instructions.'
		},
		{
			type: 'text',
			content:
				'The SydneyMusic Discord is a friendly online community of live music-loving individuals discussing our local music community. Everyone is welcome: <a href="https://discord.gg/HuzdkUct">join in here</a>!'
		},
		{
			type: 'text',
			content:
				'SydneyMusic is for everyone. <a href="mailto:contact@sydneymusic.net">Send us feedback</a> any time.'
		},
		{
			type: 'text',
			content:
				'Did you know SydneyMusic has a weekly email newsletter? Sent out every Wednesday afternoon with the next 7 days of gigs in one convenient email. <a href="https://sydneymusic.us17.list-manage.com/subscribe?u=33fe15202bc9075111c10636a&id=08cf9e0f0b">Subscribe to it here</a>.'
		},
		{
			type: 'text',
			content:
				'<a href="https://instagram.com/sydneymusicdotnet">We have an Instagram account</a>: all of the day\'s gigs in our Stories, every day.'
		},
		{
			type: 'text',
			content:
				'You don\'t have to be in a band to send us gigs we’ve missed! <a href="mailto:contact@sydneymusic.net">We love a hot tip.</a>'
		},
		{
			type: 'text',
			content:
				'Are we missing your favourite venue? <a href="mailto:contact@sydneymusic.net">Let us know</a>!'
		}
	];
	Index = Index % prompts.length;
</script>

{#if prompts[Index].type === 'component'}
	{@html prompts[Index].content}
{:else if prompts[Index].type === 'text'}
	<div class="guide-divider">
		<div />
		<span>
			{@html prompts[Index].content}
		</span>
		<div />
	</div>
{/if}
