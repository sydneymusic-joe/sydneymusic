<script>
	import { twMerge } from 'tailwind-merge';
	import Button from './button.svelte';
	import Heading from './heading.svelte';
	import Paragraph from './paragraph.svelte';
	import ProgressBar from './progress-bar.svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} [headline] - The main headline text for the donation form
	 * @property {string} [appealContent] - The appeal content text explaining SydneyMusic's mission
	 * @property {string} [callToAction] - The call to action text encouraging support
	 * @property {boolean} [showSponsors] - Whether to show sponsor information
	 * @property {'dark' | 'ruby' | 'yellow' | 'white' | 'light'} [theme] - Color theme for the donation form
	 * @property {'md' | 'lg'} [size] - Size variant for the donation form
	 * @property {boolean} [showPercentage] - Whether to show the percentage text on the progress bar
	 * @property {boolean} [shadow] - Whether to apply shadow styling
	 * @property {Object} [donorStats] - Donor stats object from layout.js
	 */

	/** @type {Props} */
	let {
		headline = 'SydneyMusic needs your support',
		appealContent = 'We get Sydney out to more live shows — and our guide is read by 25,000 people every month. This not-for-profit project needs to raise funds for its survival.',
		callToAction = 'Can you help us support live music in Sydney?',
		showSponsors = false,
		showFineprint = true,
		theme = 'dark',
		size = 'lg',
		shadow = true,
		showPercentage = true,
		donorStats,
		class: className
	} = $props();
	const fundedPercentage = 60;
	const buttonClass = twMerge(
		'bg-white text-xl flex flex-row items-center justify-center outline-none focus:outline-none',
		size === 'sm' && 'text-xl',
		size === 'lg' && 'text-3xl',
		theme === 'dark' &&
			'bg-ruby/90 text-white hover:bg-ruby focus:bg-ruby hover:text-white focus:text-white border-2 border-transparent hover:border-white focus:border-white',
		theme === 'ruby' &&
			'bg-gray-100 text-black hover:bg-white focus:bg-white hover:text-black focus:text-black border-2 border-transparent hover:border-red-800 focus:border-red-800',
		theme === 'yellow' &&
			'bg-black text-white hover:bg-black/80 focus:bg-black/80 hover:text-yellow-200 focus:text-yellow-200 border-2 border-transparent hover:border-black focus:border-black',
		theme === 'light' &&
			'bg-black text-white hover:bg-ruby focus:bg-ruby hover:text-white focus:text-white border-2 border-transparent hover:border-black focus:border-black'
	);
</script>

<div class={twMerge('w-full', shadow && 'shadow-lg')}>
	<div
		class={twMerge(
			'p-5 flex flex-col gap-4',
			theme === 'dark' && 'bg-[#282828] text-white',
			theme === 'ruby' && 'bg-ruby text-white ',
			theme === 'yellow' && 'bg-yellow-100 text-black',
			theme === 'white' && 'bg-white text-black',
			className
		)}
	>
		<div class={twMerge('pr-20', size === 'sm' && 'pr-24')}>
			<Heading
				level={2}
				variant={size}
				class={twMerge('italic mb-0 text-pretty', size === 'sm' && 'text-lg')}>{headline}</Heading
			>
		</div>
		<div class="relative">
			<ProgressBar percentage={fundedPercentage} {theme} {showPercentage} />
			<img
				src={theme === 'dark' ? '/images/canman-flagman.png' : '/images/canman-flagman.png'}
				class="w-20 sm:w-28 absolute bottom-3 -right-6"
				alt="Can Man holding a flag with Cliff the Glyph"
			/>
		</div>

		{#if appealContent}
			<Paragraph variant={size === "lg" ? "sm" : "xs"} class="mb-0 leading-tight">
				{appealContent}
			</Paragraph>
		{/if}
		<div>
			<Paragraph variant={size === "lg" ? "sm" : "xs"} class="mb-2 leading-tight lg:leading-tight">
				<strong class="font-bold">{callToAction}</strong>
			</Paragraph>
			<Paragraph variant="xs" class="mb-0">Donate monthly:</Paragraph>
		</div>
		<div>
			<div
				class={twMerge(
					'flex flex-row flex-wrap w-full text-md lg:text-xl gap-1',
					size === 'lg' && 'gap-2'
				)}
			>
				<Button
					label="2"
					prefix="$"
					href="https://square.link/u/L0GTRapn"
					target="_blank"
					variant="outline"
					pointer=""
					{size}
					class={`${buttonClass} plausible-event-amount=2`}
					eventName="Donation+Amount"
				/>
				<Button
					label="5"
					prefix="$"
					href="https://square.link/u/Gw8URGj2"
					target="_blank"
					variant="outline"
					pointer=""
					{size}
					class={`${buttonClass} plausible-event-amount=5`}
					eventName="Donation+Amount"
				/>
				<Button
					label="15"
					prefix="$"
					href="https://square.link/u/JYzf9LTF"
					target="_blank"
					variant="outline"
					pointer=""
					{size}
					class={`${buttonClass} plausible-event-amount=15`}
					eventName="Donation+Amount"
				/>
				<Button
					label="50"
					prefix="$"
					href="https://square.link/u/moL86XF5"
					target="_blank"
					variant="outline"
					pointer=""
					{size}
					class={`${buttonClass} plausible-event-amount=50`}
					eventName="Donation+Amount"
				/>
				<Button
					label="200"
					prefix="$"
					href="https://square.link/u/Dicl3TrR"
					target="_blank"
					variant="outline"
					pointer=""
					{size}
					class={`${buttonClass} plausible-event-amount=200`}
					eventName="Donation+Amount"
				/>
			</div>
		</div>
		<div>
			<Paragraph variant="xs" class="mb-1 font-light">
				Donate a <a
					href="https://square.link/u/eS7bgm8M"
					target="_blank"
					class="underline font-light plausible-event-name=Donation+Other"
				>
					different amount</a
				>
				or
				<a href="https://square.link/u/eS7bgm8M" target="_blank" class="underline font-light plausible-event-name=Donation+OnceOff"
					>donate once-off</a
				>.
			</Paragraph>
			{#if showFineprint}
				<p class="font-light text-xs md:text-md">
					All donations of $2 and above are tax deductible. {#if size === 'lg'}
						SydneyMusic.net is a not-for-profit initiative, built and maintained by a small team of
						music lovers. We don't receive any government funding. We don't run advertising. <a
							href="/support"
							target="_blank"
							class="underline plausible-event-name=Donation+LearnMore">Learn more &raquo;</a
						>{/if}
				</p>
			{/if}
		</div>
	</div>
	{#if showSponsors}
		<div class="border-t border-gray-200 bg-white p-5" class:shadow-lg={shadow}>
			<Paragraph variant="xs" class="mb-0">Thanks to {donorStats ? donorStats.recurringDonorCount + donorStats.oneOffDonors : 290} individuals and these legends:</Paragraph>

			<div class="flex flex-wrap flex-row text-xs gap-4 my-2 items-center justify-start">
				<img src="/sponsors-rode.svg" alt="Røde" class="h-4" />
				<img src="/logos/heaps-normal.png" class="h-8" alt="Heaps Normal" />
				<div class="uppercase opacity-40 font-bold italic">
					<a href="/support/commercial">+ your name here?</a>
				</div>
			</div>
			<div class="space-y-2">
				<div class="flex flex-row gap-x-2">
					<Button
						label="Become a Commercial Sponsor"
						variant="outline"
						class="bg-white"
						pointer=""
						href="/support/commercial"
					/>
				</div>
				<div class="text-xs">
					<a
						href="/support/wall-of-legends"
						class="text-black underline hover:text-ruby focus:text-ruby">See the Wall of Legends</a
					>
				</div>
			</div>
		</div>
	{/if}
</div>
