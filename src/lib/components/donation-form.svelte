<script>
	import Button from './button-dark.svelte';
	/**
	 * @type {boolean}
	 */
	let { 
        showPromotionalContent = true, 
        align = 'right', 
        bg = 'ruby', 
        text = 'white',
        shadow = true
    } = $props();
	const fundedPercentage = 55;
</script>

<div
	class:mx-auto={align === 'right'}
	class:lg:ml-auto={align === 'right'}
	class:lg:mr-0={align === 'right'}
	class:lg:ml-0={align === 'left'}
	class:lg:mr-auto={align === 'left'}
    class:shadow-lg={shadow}
	class="w-full max-w-lg p-5 bg-{bg} text-{text} flex flex-col gap-4"
>
	<h2 class="text-lg font-semibold md:text-2xl pr-5 uppercase italic leading-none">
		SydneyMusic needs your support
	</h2>

	<div class="w-full -mt-2">
		<div class="text-xs mb-1 opacity-80 text-right pr-1">{fundedPercentage}% funded</div>
		<div class="w-full bg-{text} opacity-40 rounded-sm h-4 overflow-hidden"></div>
		<div
			class="bg-{text} h-4 -mt-4 rounded-sm transition-all duration-700"
			style="width: {fundedPercentage}%;"
		></div>
	</div>

	{#if showPromotionalContent}
		<p class="text-sm md:text-base font-light">
			We get Sydney out to more live shows — and our guide is read by 25,000 people every month. This not-for-profit project needs to raise funds for its survival: <strong class="font-bold"
				>Can you help us support live music in Sydney?
			</strong>
		</p>
	{/if}
	<h3><strong>Become a monthly donor:</strong></h3>
	<div>
		<div class="cta flex flex-row gap-3 w-full text-md lg:text-xl">
			<Button
				label="$2"
				href="https://square.link/u/L0GTRapn"
				target="_blank"
				variant="primary"
				pointer=""
			/>
			<Button
				label="$5"
				href="https://square.link/u/Gw8URGj2"
				target="_blank"
				variant="primary"
				pointer=""
			/>
			<Button
				label="$15"
				href="https://square.link/u/JYzf9LTF"
				target="_blank"
				variant="primary"
				pointer=""
			/>
			<Button
				label="$50"
				href="https://square.link/u/moL86XF5"
				target="_blank"
				variant="primary"
				pointer=""
			/>
			<Button
				label="$200"
				href="https://square.link/u/Dicl3TrR"
				target="_blank"
				variant="primary"
				pointer=""
			/>
		</div>
	</div>
	<p class="text-md font-light">
		Or <a href="https://square.link/u/eS7bgm8M" target="_blank" class="underline"
			>choose a different amount</a
		>
		or
		<a href="https://square.link/u/eS7bgm8M" target="_blank" class="underline"
			>make a one-off donation</a
		>.
	</p>
	<p class="font-light text-xs md:text-md">
		All donations of $2 and above are tax deductible. {#if showPromotionalContent}
			SydneyMusic.net is a not-for-profit initiative, built and maintained by a small team of music
			lovers. We don't receive any government funding. We don't run advertising. <a
				href="/support"
				target="_blank"
				class="underline">Learn more &raquo;</a
			>{/if}
	</p>
</div>
