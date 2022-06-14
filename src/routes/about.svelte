<script>
	import SeoSocial from '$lib/components/seo-social.svelte';
</script>

<SeoSocial title="About / FAQ" />

<div class="max-w-5xl px-5 mx-auto space-y-32 pb-24">
	<div class="space-y-10">
		<img
			src="https://picsum.photos/1000/150?grayscale"
			alt=""
			class="aspect-3/1 sm:aspect-banner object-cover w-full"
		/>

		<div class="space-y-10 sm:pr-20 lg:pr-28">
			<h2 class="notch-left text-xl">About</h2>

			<div class="prose about">
				<p>This website was built by:</p>

                <dl>
                    <dt><a href="https://joe.hardy.id.au">Joe Hardy</a></dt>
                    <dd>Project Direction and Backend</dd>
                    <dt>Will McKinnon</dt>
                    <dd>Art Direction and Web Design</dd>
                    <dt><a href="https://www.instagram.com/by.hugh/">Hugh McKinnon</a></dt>
                    <dd>Illustration</dd>
                    <dt><a href="https://www.madebymike.com.au">Mike Riethmuller</a></dt>
                    <dd>Front End Architecture and Development</dd>
                    <dt>Caitlin Welsh</dt>
                    <dd>Content Direction</dd>
                </dl>

                <p>... but it belongs to you. The site's just starting out, but its voice will be shaped by the people that contribute and help it to become as representative as possible for Sydney's diverse and extraordinary music community.</p>
                <p>We'd love your ideas, thoughts, comments, questions and constructive criticism to continue evolving this.</p>
			</div>



			<h2 class="notch-left text-xl">FAQ</h2>

			<div class="prose">
				<p>We'll update this when we start getting frequent questions.</p>
                <p>In the meantime, <a href="mailto:contact@sydneymusic.net">drop us a line</a>!</p>
			</div>
		</div>
	</div>
</div>
