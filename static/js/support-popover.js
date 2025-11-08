const supportPopoverConfig = [
	// {
	// 	key: 'savedPromoHomepage',
	// 	route: '/',
	// 	delay: 1000,
	// 	localStorageKey: 'supportDonorPopover'
	// },
	// {
	// 	key: 'savedPromoVenues',
	// 	route: '/gig-guide/venues',
	// 	delay: 1000,
	// 	localStorageKey: 'supportDonorPopover'
	// }
];

document.addEventListener('DOMContentLoaded', () => {
	const createSupportPopover = (config) => {
		const popoverTrigger = document.getElementById('popover-trigger');
		const openLabel = document.querySelector('.popover-open');
		const closeLabel = document.querySelector('.popover-close');
		const popoverContent = document.querySelector('.popover-content');

		if (!popoverTrigger || !popoverContent || !openLabel || !closeLabel) {
			console.error(
				'Support popover elements not found',
				popoverTrigger,
				popoverContent,
				openLabel,
				closeLabel
			);
			return null;
		}

		const closePopover = (evt) => {
			popoverTrigger.checked = false;
			if (window && window.plausible) window.plausible('Close Support Popover', { interactive: true });

			if (!evt) return;

			// Set localStorage when close button is clicked
			if (config.localStorageKey && evt.target.closest('.popover-close')) {
				localStorage.setItem(config.localStorageKey, 'true');
			}
		};

		const openPopover = (interactive = true) => {
			popoverTrigger.checked = true;
			if (window && window.plausible)
				window.plausible(`${interactive ? 'Open' : 'View'} Support Popover`, { interactive });
		};

		// Listen for checkbox changes to handle cleanup
		popoverTrigger.addEventListener('change', (e) => {
			if (!e.target.checked) {
				document.removeEventListener('click', handleOutsideClick);
			}
		});

		// Add tracking to label actions
		openLabel.addEventListener('click', (e) => {
			e.preventDefault();
			e.stopPropagation();
			openPopover(true);
		});

		closeLabel.addEventListener('click', (e) => {
			e.preventDefault();
			e.stopPropagation();
			closePopover(e);
		});

		return { openPopover };
	};

	const showSupportPopover = (config) => {
		// Check if user has already seen the promo
		if (config.localStorageKey && localStorage.getItem(config.localStorageKey) === 'true') {
			return;
		}

		const popover = createSupportPopover(config);
		if (!popover) return;

		if (config.delay > 0) {
			setTimeout(popover.openPopover(false), config.delay);
		} else {
			popover.openPopover(false);
		}
	};

	const initialiseSupportPopovers = () => {
		supportPopoverConfig.forEach((config) => {
			if (window.location.pathname === config.route) {
				showSupportPopover(config);
			}
		});
	};

	initialiseSupportPopovers();
});
