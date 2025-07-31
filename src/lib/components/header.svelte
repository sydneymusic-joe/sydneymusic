<script>
	import { page } from '$app/stores';
	import { navigation } from '../globals.mjs';
	import Logo from './logo.svelte';
	import DonationForm from './donation-form.svelte';
	import IconListen from './icon-listen.svelte';
	import IconInstagram from './icon-instagram.svelte';
</script>

<header>
	<div class="lg:hidden flex justify-center">
		<a href="/" class="mt-5">
			<Logo size="sm" stickers={true} />
		</a>
	</div>

	<nav class="max-w-5xl lg:px-5 mx-auto mt-5 lg:mt-15 mb-5 space-y-5">
		<div class="w-full flex justify-between items-center">
			<a href="/" class="hidden lg:block shrink-0">
				<Logo size="sm" stickers={false} />
			</a>

			<div class="navbar relative flex-wrap lg:flex-nowrap">
				{#each navigation as item}
					<a
						href={item.href}
						class="navbar-link plausible-event-name=Top+Nav"
						class:current={$page.url.pathname === item.href}
					>
						{item.title}
					</a>
				{/each}

				<a
					href="https://www.instagram.com/sydneymusicdotnet"
					target="_blank"
					title="Follow us on Instagram"
					class="navbar-link-icon mr-4"
				>
					<IconInstagram />
				</a>

				<input type="checkbox" id="support-trigger" class="popover-trigger" />
				<label for="support-trigger" class="popover-label support cursor-pointer inline-block">
					Support Us
				</label>

				<div
					class="popover-content relative lg:absolute left-auto max-w-[40rem] lg:right-0 lg:top-[3.35rem] lg:z-50 w-full lg:w-auto basis-full lg:basis-auto min-w-full lg:min-w-0 order-last lg:order-none"
				>
					<div class="max-w-[40rem] mx-auto relative">
						<DonationForm />
						<!-- // Close Button -->
						<label for="support-trigger" class="close-button absolute top-2 right-2 cursor-pointer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg
							>
						</label>
					</div>
				</div>
			</div>
		</div>
	</nav>
</header>
