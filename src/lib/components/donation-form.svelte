<script>
	import Button from './button.svelte';
	import Heading from './heading.svelte';
	import { mds } from '../donorstats.js';

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
		donorStats,
		class: className
	} = $props();

	donorStats=mds;

</script>

<div class="bg-merchbrown text-white text-center p-5 md:p-10 mx-[-20px] md:ml-0 md:mr-10">
				<div class="guide-divider" style="margin-bottom : 0.25rem">
					<div></div>
					<div class="flex flex-row justify-center gap-x-3 mx-3">
						<div><img src="/banksia.svg" class="h-12" alt="Pixelated Banksia icon" /></div>
						<Heading class="text-ruby uppercase font-normal"><div class="stretch leading-[1.9] md:leading-[1.3]">Fundraiser FY27</div></Heading>
						<div><img src="/padlock.svg" class="h-12" alt="Pixelated unlocked padlock icon" /></div>
					</div>
					<div></div>
				</div>
				<div class="space-y-3">
					<div><strong class="font-semibold">SydneyMusic urgently needs your help.</strong></div>
					<div>This resource is 100% community-supported. To keep the gig guide online from July 1 we need to raise money towards our baseline budget for FY27 (we’ve got {donorStats.totalFundedPercent}% sorted already).</div>
					<div class="font-semibold">We need to sign up <span class="text-ruby">{450-donorStats.recurringDonorCount}</span> more monthly supporters by June 30 to meet our goal for this form of support.</div>
					<div>Your support is hugely appreciated. Thank you!</div>
				</div>
				<div class="flex flex-row justify-center gap-x-2 mt-5">
				<img src="/horns.svg" class="h-12" alt="Pixelated horned hands icon" />
				<h2 class="stretch uppercase mt-5 leading-[1.3]">Choose your fighter:</h2>
				<img src="/canhand.svg" class="h-12" alt="Pixelated Can Man hand icon" />
				</div>
				<div class="flex flex-wrap flex-row justify-center gap-x-5 gap-y-3 my-5">
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/L0GTRapn" class="sr-only peer" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">$2</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/Gw8URGj2" class="sr-only peer" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">$5</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/hbwswm65" checked="" class="sr-only peer" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">$10</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/otfmCL39" class="sr-only peer" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">$25</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/moL86XF5" class="sr-only peer" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">$50</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/Dicl3TrR" class="sr-only peer" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">$200</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" data-buttonhref="https://square.link/u/PbEmze4h" data-buttonlabel="Make a one-off donation" class="sr-only peer	" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">I’d like to make a one-off donation</span>
					</label>
					<label class="relative flex items-center cursor-pointer">
						<input type="radio" name="donoramount" class="sr-only peer" data-buttonhref="https://store.sydneymusic.net" data-buttonlabel="Shop for merch" />
						<div class="w-6 h-6 bg-transparent border-2 border-ruby rounded-full peer-checked:bg-ruby peer-checked:border-ruby"></div>
						<span class="ml-2 text-white">I’d like to buy a t-shirt or stickers!</span>
					</label>
				</div>

				<div class="space-y-2">
				<Button label="Become a monthly supporter" variant="primary" id="support-button" href="https://square.link/u/hbwswm65" target="_blank" />
				<Button label="Learn more" href="/support" target="_blank" />
				</div>

				<script>
					var donorItems = document.querySelectorAll('input[name=donoramount]');
					donorItems.forEach(el => {
						el.addEventListener('click', function (evt) {
							document.getElementById('support-button').href = evt.srcElement.attributes['data-buttonhref'].value;
							document.getElementById('support-button').innerHTML = (evt.srcElement.attributes['data-buttonlabel'] ? evt.srcElement.attributes['data-buttonlabel'].value : "Become a monthly supporter") + " &raquo;";
						});
					});
				</script>

				<div class="mt-2 text-xs">All donations over $2 are tax deductible. SydneyMusic is a registered not-for-profit organisation and is recognised as a Deductible Gift Recipient by the ATO</div>
				<div class="mt-2 text-xs">The average donation from our {donorStats.recurringDonorCount} supporters is $10</div>
				<div class="mt-2 text-xs">
					<a href="/support/commercial" class="underline">Commercial enquiries</a> • <a href="/api-license" class="underline">API licensing</a> • <a href="mailto:contact@sydneymusic.net" class="underline">General enquiries</a>
				</div>
			</div>
