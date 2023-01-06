<script>
    let prompts = [
        'Want to submit a gig? <a href="mailto:contact@sydneymusic.net">E-mail us</a>!',
        'Smile! Can Man loves you',
        'Want to write a blurb for a gig? E-mail us!',
        'Your <a href="https://store.sydneymusic.net">donations</a> help keep us running!',
        'Our <a href="https://store.sydneymusic.net">online store</a> is now open'
    ]
</script>
<div class="guide-divider">
    <div></div>
    <span>
        {@html prompts[Math.floor(Math.random() * prompts.length)]}
    </span>
    <div></div>
</div>