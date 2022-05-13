<script>
	import Performer from '$lib/components/performer.svelte';
	import Read from '$lib/components/read.svelte';
	import Button from '../lib/components/button.svelte';
</script>

<div class="max-w-5xl px-5 mx-auto space-y-32 pb-24">
	<!-- First section -->
	<div class="space-y-10">
		<img src="https://picsum.photos/1500/500?grayscale" alt="" class="aspect-3/1 w-full" />
		<div class="grid lg:grid-cols-2 gap-5">
			<!-- left col -->
			<div class="space-y-10">
				<h2
					class="notch-left font-semibold uppercase leading-tight block border-b-2 border-black w-full pl-3 text-xl"
				>
					Gigs right now
				</h2>

				<div class="space-y-10 pr-20 lg:pr-28">
					<div class="space-y-3">
						<h3
							class="notch-left font-semibold uppercase block leading-tight border-b-2 border-black w-full pl-3 text-lg"
						>
							<span class="font-bold text-ruby">Today</span>
							<span class="font-normal text-graphite">DD MM YY</span>
						</h3>

						<div class="divide-black divide-y">
							<div class="pb-3">
								<Performer />
							</div>
							<div class="py-3">
								<Performer />
							</div>
							<div class="pt-3">
								<Performer />
							</div>
						</div>
					</div>

					<div class="space-y-3">
						<h3
							class="notch-left font-semibold uppercase leading-tight block border-b-2 border-black w-full pl-3 text-lg"
						>
							<span class="font-bold text-ruby ">Tomorrow</span>
							<span class="font-normal text-graphite">DD MM YY</span>
						</h3>

						<div class="divide-black divide-y">
							<div class="pb-3">
								<Performer />
							</div>
							<div class="py-3">
								<Performer />
							</div>
							<div class="pt-3">
								<Performer />
							</div>
						</div>
					</div>

					<Button />
				</div>
			</div>

			<!-- Right col -->
			<div class="space-y-10">
				<h2
					class="notch-left font-semibold uppercase leading-tight block border-b-2 border-black w-full pl-3 text-xl"
				>
					Latest Reads
				</h2>
				<div class="space-y-5 pr-20 lg:pr-28">
					<Read />
					<Read />
					<Read />
					<Read />
					<Button />
				</div>
			</div>
		</div>
	</div>

	<!-- Second section -->
	<div class="space-y-10">
		<h2
			class="notch-left font-semibold uppercase leading-tight block border-b-2 border-black w-full pl-3 text-xl"
		>
			Header
		</h2>

		<div class="grid lg:grid-cols-2 gap-5">
			<!-- left col -->
			<div class="space-y-10">
				<p class="text-base leading-relaxed pr-20 lg:pr-28">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
					dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore.
				</p>
			</div>
			<!-- right col -->
			<img src="https://picsum.photos/500/500?grayscale" alt="" class="aspect-square w-full" />
		</div>
	</div>

	<!-- Third section -->
		<div class="grid lg:grid-cols-2 gap-5">
			<!-- left col -->
			<div class="space-y-10">
				<h2
					class="notch-left font-semibold uppercase leading-tight block border-b-2 border-black w-full pl-3 text-xl"
				>
					Header
				</h2>
				<p class="text-base leading-relaxed pr-20 lg:pr-28">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
					dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore.
				</p>
			</div>
			<!-- right col -->
			<div class="space-y-10">
				<h2
					class="notch-left font-semibold uppercase leading-tight block border-b-2 border-black w-full pl-3 text-xl"
				>
					Header
				</h2>
				<p class="text-base leading-relaxed pr-20 lg:pr-28">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
					dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore.
				</p>
			</div>
		</div>
    
</div>
