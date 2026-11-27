<script>
	const { selectedCount } = $props();
	let includeLinks = $state(true);

	function handleIncludeLinksChange(e) {
		const value = e.target.checked;
		includeLinks = value;
	}

	function getTextPrefix(count) {
		return `${count} gig picks from sydneymusic.net`;
	}

	function onCopy(evt) {
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 }
		});
		evt.target.classList.add('success');
		navigator.clipboard.writeText(previewText);
	}

	function onShare(evt) {
		const gigs = document.querySelectorAll('.sharegig.selected'); // get all the red hearts
		const count = gigs.length;

		if (navigator.share) {
			navigator
				.share({
					title: getTextPrefix(count),
					text: getGigText(gigs) + 'Find more gigs at sydneymusic.net'
				})
				.catch((error) => console.error('Error sharing:', error));
		} else {
			alert('Sharing is not supported on this browser.');
		}
		evt.target.classList.add('success');
	}

	function onClose() {
		document.body?.classList?.remove('showsheet');
	}

	// get all the selected elements
	// for each element we extract the event info
	// TODO: comeback to do this proper without DOM queries
	function getGigText(gigs) {
		return Array.from(gigs, (gig) => {
			const eventcard = gig.nextElementSibling; // The next sibling is the .eventcard
			const url = eventcard.querySelector('.moreinfo')?.attributes['href'].value ?? null;
			const supports = eventcard.querySelector('.supports')?.textContent ?? '';
			return {
				gigStartDate: Date.parse(gig.dataset.gigstartdate),
				headliner: eventcard.querySelector('.headliner').textContent,
				supports,
				url,
				venueName: eventcard.querySelector('a.venue').textContent,
				showLink: includeLinks && url != null
			};
		}).reduce((acc, g, i, arr) => {
			const pg = arr[i - 1];
			const d = new Date(g.gigStartDate);
			const pd = pg ? new Date(pg.gigStartDate) : null;

			if (d.toLocaleDateString() != pd?.toLocaleDateString()) {
				const uppercaseDate = d
					.toLocaleDateString('en-AU', { weekday: 'short', day: '2-digit', month: 'short' })
					.toUpperCase();
				acc += `★ ${uppercaseDate} ★\n`;
			}

			const gigTime = d.toLocaleTimeString([], {
				hour12: true,
				hour: '2-digit',
				minute: '2-digit'
			});
			const lineUp = `—${g.headliner} ${g.supports} at ${g.venueName}\n`;
			const moreInfo = g.showLink ? `More info ⇢ ${g.url}\n` : '';

			return (acc += gigTime + lineUp + moreInfo + '\n');
		}, '');
	}

	function getPreviewText() {
		const gigs = document.querySelectorAll('.sharegig.selected'); // get all the red hearts
		return getTextPrefix(selectedCount) + '\n\n' + getGigText(gigs);
	}

	let previewText = $derived.by(getPreviewText);
</script>

<div id="sharesheet" class="space-y-3">
	<div class="title text-lg font-bold">
		You've selected <span>{selectedCount === 1 ? 'a gig' : selectedCount + ' gigs'}</span> to share!
	</div>
	<div class="hint text-sm italic">Here's a preview of your list:</div>

	<textarea
		name="preview-list"
		class="m-y-5 relative h-50 w-90 overflow-y-auto border border-dashed bg-white p-2 text-xs break-all text-black"
		>{previewText}</textarea>

	<div class="text-xs">
		<div class="flex items-center gap-x-1">
			<input
				type="checkbox"
				id="share-links"
				checked={includeLinks}
				onchange={handleIncludeLinksChange} />
			<label for="share-links">Include links</label>
		</div>
	</div>

	<div class="buttonpanel flex">
		<button id="shareability-copy" class="plausible-event-name=Share+Sheet+Copy" onclick={onCopy}>
			Copy
		</button>
		<button
			id="shareability-share"
			class="plausible-event-name=Share+Sheet+Share"
			onclick={onShare}>
			Share
		</button>
		<button
			id="shareability-close"
			class="plausible-event-name=Share+Sheet+Close"
			onclick={onClose}>
			Close
		</button>
	</div>
</div>
