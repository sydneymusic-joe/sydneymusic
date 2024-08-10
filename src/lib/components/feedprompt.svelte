<script>
	export let Index = 0;
	let prompts = [
		'<strong class="text-ruby">SydneyMusic.net is made possible with the support of legends just like you.</strong><br />Help us continue by becoming a <a href="https://patreon.com/sydneymusic" target="_blank">SydneyMusic Supporter</a> or <a href="https://store.sydneymusic.net" target="_blank">making a donation</a>.',
		'Want to submit a gig? <a href="mailto:gigs@sydneymusic.net">Send us an e-mail</a>!',
		'All you need is a system and a space. You should organise a gig!',
		'The <a href="/playlist">SydneyMusic playlist</a> (available on Spotify, Apple Music and TIDAL) is updated each Wednesday. Hit play, discover something new and then go see it live.',
		'Our <a href="https://store.sydneymusic.net">online store</a> is now open! If you find this site useful, your support is greatly appreciated: every donation or merch sale helps us cover our operating costs.',
		'The SydneyMusic website codebase is open source and free for anyone to use and adapt. Want to make a similar website for your own city, sub-community or interest? <a href="https://github.com/sydneymusic-joe/sydneymusic">The code can be found here</a> with deployment instructions.',
		'The SydneyMusic Discord is a friendly online community of live music loving individuals discussing our local music community. Everyone is welcome: <a href="https://discord.gg/HuzdkUct">join in here</a>!',
		'SydneyMusic is for everyone. <a href="mailto:contact@sydneymusic.net">Send us feedback</a> any time.',
		'Did you know SydneyMusic has a weekly email newsletter? Sent out every Wednesday afternoon with the next 7 days of gigs in one convenient email. <a href="https://sydneymusic.us17.list-manage.com/subscribe?u=33fe15202bc9075111c10636a&id=08cf9e0f0b">Subscribe to it here</a>.',
		'<a href="https://instagram.com/sydneymusicdotnet">We have an Instagram account</a>: all of the day\'s gigs in our Stories, every day.',
		'You don\'t have to be in a band to send us gigs we’ve missed! <a href="mailto:contact@sydneymusic.net">We love a hot tip.</a>',
		'Are we missing your favourite venue? <a href="mailto:contact@sydneymusic.net">Let us know</a>!'
	];
	Index = Index % prompts.length;
</script>

<div class="guide-divider">
	<div />
	<span>
		{@html prompts[Index]}
	</span>
	<div />
</div>
