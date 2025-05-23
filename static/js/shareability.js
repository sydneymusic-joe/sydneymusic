document.addEventListener('DOMContentLoaded', () => {
	const showSelected = document.getElementById('toggle-selected');

	if (showSelected) {
		showSelected.addEventListener('click', function () {
			document.body.classList.toggle('selectedonly');
		});
	}

	const getTextPrefix = () => {
		return getAllSelectedPanels().length + " gig picks from sydneymusic.net";
	}

	const getAllSelectedPanels = () => {
		return document.querySelectorAll('.sharegig.selected');
	}

	const clearAllGigs = () => {
		localStorage.setItem("selectedgigs", "");
		document.querySelectorAll(".sharegig.selected").forEach((g) => {
			g.classList.remove('selected');
		});
		updateShareSheet();
	}

	const updateLocalStorage = () => {
		const ret = Array.prototype.map.call(getAllSelectedPanels(), n => n.attributes['data-gigid'].value);
		localStorage.setItem("selectedgigs", ret);
	}

	const getLocalStorage = () => {
		const stor = localStorage.getItem("selectedgigs");

		if (!stor) {
			return;
		}

		const arr = stor.split(',');

		arr.forEach(g => {
			document.querySelector(`.sharegig[data-gigid=${g}]`).classList.add('selected');
		});

		updateShareSheet();
	}
	
	const updateShareSheet = () => {
		let counter = document.querySelector("#sharesheet .title span");
		const total = getAllSelectedPanels().length;
		document.querySelector('#shareprompt span').textContent = total;
		if (counter) {
			counter.innerText = total === 1 ? "a gig" : total + " gigs";
		}
		updateLocalStorage();
		document.body.classList.toggle('gotgigs', total > 0);

		document.getElementById('share-preview').innerText = getTextPrefix() + "\n\n" + getGigText();
	};

	document.querySelector('#shareprompt button.share').addEventListener('click', function(evt) {
		document.body.classList.add('showsheet');
	});
	document.querySelector('#shareprompt button.clear').addEventListener('click', function(evt) {
		clearAllGigs();
	});

	const getGigText = () => {
		const items = getAllSelectedPanels();
		const arr = [];
		items.forEach((gig) => {
			const eventcard = gig.nextElementSibling;
			const moreinfo = eventcard.querySelector('.moreinfo');
			arr[arr.length] =
				{
					gigStartDate : Date.parse(gig.attributes['data-gigstartdate'].value),
					headliner : eventcard.querySelector('.headliner').textContent,
					supports : eventcard.querySelector('.supports') ? eventcard.querySelector('.supports').textContent : "",
					url : (moreinfo ? moreinfo.attributes['href'].value : null),
					venueName : eventcard.querySelector('a.venue').textContent
				 };
		})
		let gigList = "";
		const datesDone = [];
		const chk = document.getElementById('share-links');

		arr.forEach(g => {
			const d = new Date(g.gigStartDate);
			if (!datesDone.includes(d.toLocaleDateString())) {
				datesDone[datesDone.length] = d.toLocaleDateString();
				
				gigList += "★ " + d.toLocaleDateString('en-AU', {weekday : 'short', day : '2-digit', month : 'short'}).toUpperCase() + " ★\n";
			}
			gigList += d.toLocaleTimeString([], {hour12: true, hour: '2-digit', minute:'2-digit'})
+ `—${g.headliner} ${g.supports} at ${g.venueName}
` + (chk.checked && g.url != null ? `More info ⇢ ${g.url}
` : "") + `
`;
		});

		return gigList;
	}
	document.querySelector('#shareability-copy').addEventListener('click', function(evt) {
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 }
		  });
		evt.target.classList.add('success');
		navigator.clipboard.writeText(getTextPrefix() + "\n\n" + getGigText());
	});

	document.getElementById('share-links').addEventListener('click', function(evt) {
		updateShareSheet();
	});

	document.querySelector('#shareability-share').addEventListener('click', function(evt) {
		if (navigator.share) {
			navigator.share({
				title : getTextPrefix(),
				text: getGigText() + "Find more gigs at sydneymusic.net",
			}).catch((error) => console.error('Error sharing:', error));
		} else {
			alert('Sharing is not supported on this browser.');
		}
		evt.target.classList.add('success');
	});

	document.getElementById('shareability-close').addEventListener('click', function(evt) {
		document.body.classList.remove('showsheet');
	});

	let btns = document.querySelectorAll('.sharegig');

	btns.forEach((sharegig) => {
		sharegig.addEventListener('click', function () {
			this.classList.toggle("selected", !this.classList.contains('selected'));
			updateShareSheet();
		});
		sharegig.parentElement.querySelector('.headliner').addEventListener('click', function(evt) {
			sharegig.click();
		});
	});

	getLocalStorage();
});