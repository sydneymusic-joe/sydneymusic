<script>
	import { mds } from '../donorstats.js';
	import Button from './button.svelte';
	import Heading from './heading.svelte';

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
					<div>This resource is 100% community-supported. To keep the gig guide online through this financial year we need to raise money towards our baseline budget for FY27 (we’ve got {donorStats.totalFundedPercent}% sorted already).</div>
					<div class="font-semibold">We are seeking <span class="text-ruby">{450-donorStats.recurringDonorCount}</span> new monthly supporters to help us cover costs.</div>
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
				<div class="text-sm mt-4 font-semibold">Thank you to <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 792.9 220.2" xml:space="preserve" style="height: 12px; display : inline; padding : 0px 3px; vertical-align: baseline;" alt="RØDE"><g><path fill="currentColor" d="M179.8,69.2c0-39.4-38.8-63.6-74.9-63.6H0v208.7h62.8V113.4l48.4,99.2l0.8,1.5h71.3l-49.8-87.8
		C162.2,118.2,179.8,96.5,179.8,69.2z M62.8,35.8h18.4c20,0,34,14.2,34,34.4c0,29.2-16.7,35-45.7,35h-6.9V35.8H62.8z"></path> <polygon fill="currentColor" points="717,181.1 717,123.8 785.4,123.8 785.4,90.5 717,90.5 717,39 789,39 789,5.6 654.3,5.6 654.3,214.3 792.9,214.3 
		792.9,181.1 	"></polygon> <path fill="currentColor" d="M525.4,5.6H433v208.7h101.9c62.5,0,102.8-39.4,102.8-100.5C637.4,51.1,590.3,5.6,525.4,5.6z M572.6,105.5
		c0,38.8-15.4,80.1-58.8,80.1h-20.9V34.2h18.8C553.8,34.2,572.6,70,572.6,105.5z"></path> <path fill="currentColor" d="M410.8,19.6L393.3,2.1l-21.5,21.5C353,8.9,328.8,0,302.3,0C240,0,191.4,48.3,191.4,110c0,26.7,9.2,50.9,24.6,69.8
		l-21.1,21.1l17.5,17.5l21.3-21.3c18.8,14.4,42.5,23.1,68.6,23.1c62.3,0,110.9-48.2,110.9-109.9c0-26.3-8.8-50.2-23.8-68.8
		L410.8,19.6z M302.4,27.3c19.4,0,30.7,12.7,37.3,28.6l-81.5,81.5c-1.5-10.4-1.9-20.4-1.9-27.5C256.3,85.2,260.9,27.3,302.4,27.3z
		 M346.6,83.8c1.3,10,1.7,19.2,1.7,26.1c0,24.8-4.4,82.6-46.1,82.6c-19,0-30.2-12.1-36.9-27.7L346.6,83.8z"></path></g></svg> for covering 20% of our monthly budget through FY27.</div>
			</div>
