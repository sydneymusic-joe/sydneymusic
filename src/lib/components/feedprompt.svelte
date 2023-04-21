<script>
    export let Index = 0;
    let prompts = [
        'The <a href="/playlist">SydneyMusic playlist</a> (available on Spotify, Apple Music and TIDAL) is updated each Wednesday. Hit play, discover something new and then go see it live.',
        'Want to submit a gig? <a href="mailto:contact@sydneymusic.net">Email us</a>!',
        'The SydneyMusic Discord is a friendly online community of live music loving individuals discussing our local music community. Everyone is welcome: <a href="https://discord.gg/HuzdkUct">join in here</a>!',
        'You don\'t have to be in a band to send us gigs we’ve missed! <a href="mailto:contact@sydneymusic.net">We love a hot tip.</a>',
        'Our <a href="https://store.sydneymusic.net">online store</a> is now open! If you find this site useful, your support is greatly appreciated: every donation or merch sale helps us cover our operating costs.',
        'SydneyMusic is for everyone. <a href="mailto:contact@sydneymusic.net">Send us feedback</a> any time.',
        'Are we missing your favourite venue? <a href="mailto:contact@sydneymusic.net">Let us know</a>!'
    ]
</script>
<div class="guide-divider">
    <div></div>
    <span>
        {@html prompts[Index]}
    </span>
    <div></div>
</div>