<div id="submitagig" class="max-w-xl px-5 mx-auto mt-16">
	<h1 class="special">Submit A Gig</h1>

	<div class="prose mt-8">
		<p>That's right, the magic is real: no more sending gigs to an e-mail address!</p>

		<p><strong>Artists, managers, promoters, and venues:</strong><br />
		Self-promo is fine — we love it when you let us know what you’ve got going on! But we won’t publish your marketing/social copy verbatim or give you special consideration in the guide. We generally don’t list cover/tribute bands or background-music sets at hospitality venues. All listings are at our own discretion. We will also graciously refuse any offer of door spots for shows where we can buy tickets.</p>
	</div>

	<form
	name="submitagig"
	action="/pages/success"
	method="POST"
	data-netlify="true"
	>
		<div class="grid grid-cols-1 gap-x-6 gap-y-3 mt-10">
			<div>
				<label for="gigheadline">Gig Date & Time</label>
				<div>
					<input name="gig-datetime" type="datetime-local" />
				</div>
			</div>
			<div>
				<label for="gigheadline">Name of event</label>
				<div>
					<input type="text" name="gig-name" placeholder="RadFest 2025" />
					You don't need to enter anything here. If you do, just keep it simple.<br />Examples: "Laneway Festival Sydney 2024", "SWELL TIME #75" or "Best In The West Festival".
				</div>
			</div>
			<div>
				<label for="headlineact">Headline Act</label>
				<div>
					<input type="text" name="gig-headliner" placeholder="The Big Kahunas" />
				</div>
			</div>
			<div>
				<label for="headlineact">Other Performers</label>
				<div>
					<textarea name="gig-performers" placeholder="Names of bands here, one per line"></textarea>
					One artist per line in billing order. Please don't put your own band at the top if you're not - we will notice.
				</div>
			</div>
			<div>
				<label for="venuename">Venue Name</label>
				<div>
					<input type="text" name="venue-name" placeholder="The Bait Shop" />
					Yes, just a name - we'll research the rest. If we don't have it, we'll add it.
				</div>
			</div>
			<div>
				<label for="moreinfo">Link for more information</label>
				<div>
					<input type="text" name="gig-moreinfo" placeholder="https://www.ticketsite.com.au/my-awesome-show" />
					We highly recommend including a URL - users appreciate being able to purchase tickets in advance, check if the show is sold out, look for set times, etc.
				</div>
			</div>
			<div>
				<label for="description" name="gig-notes">Anything you want to tell us about this show?</label>
				<div>
					<textarea placeholder="Tell us a story! What's the show for? Are you launching something? Is it an anniversary show? Is this a new band? Will there be a special guest? Is this in support of a cause?"></textarea>
					<strong>Note: all entries are subject to editorial review.</strong> Use this to explain the show to the editors, and they'll make their best judgement on how to reflect the information in the listing.
				</div>
			</div>
			<div>
				<label for="description">Anything else you want to say to the person reading this?</label>
				<div>
					<textarea name="other-notes"></textarea>
				</div>
			</div>
			<div>
				<div class="flex checkbox gap-x-3 items-center">
					<div>
						<input type="checkbox" name="newsletter" />
					</div>
					<div>
						<label for="newsletter">I'd like to be added to the SydneyMusic weekly e-mail newsletter.</label>
					</div>
				</div>
			</div>
			<div>
				<button>Submit for review</button>
				<p class="text-sm mt-3 italic">We usually get submissions added within 48 hours.<br />If you want to enquire about the status of anything you've submitted, you can <a href="mailto:contact@sydneymusic.net" class="underline">talk to us</a>.</p>
			</div>
		</div>
	</form>

	<div class="bg-gray-200 rounded-lg p-5 pb-8 mt-10 shadow-lg">
		<h1 class="special left">
			<span class="text-ruby">Congratulations!</span> You're almost there.
		</h1>

		<div class="prose text-md">
			<p>... but first ...</p>
			<p>SydneyMusic has faithfully served the people for two years as a completely volunteer-run passion project.</p>
			<p>We want SydneyMusic to be able to stick around for the long term, and we need your help.</p>
			<p><strong>Would you consider donating to SydneyMusic if you've benefited from the project?</strong></p>
			<a href="https://store.sydneymusic.net" target="_blank" class="button mt-5">Donate to SydneyMusic</a>
		</div>

	</div>
</div>