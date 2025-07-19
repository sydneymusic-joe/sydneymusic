const supportPopoverConfig = [
	{
		key: 'savedPromoHomepage',
		route: '/',
		delay: 1000,
		localStorageKey: 'supportDonorPopover'
	},
	{
		key: 'savedPromoGigGuide',
		route: '/gig-guide',
		delay: 1000,
		localStorageKey: 'supportDonorPopover'
	},
	{
		key: 'savedPromoVenues',
		route: '/gig-guide/venues',
		delay: 1000,
		localStorageKey: 'supportDonorPopover'
	}
];

document.addEventListener('DOMContentLoaded', () => {
	const createSupportPopover = (config) => {
		const supportTrigger = document.getElementById('support-trigger');
		const closeButton = document.querySelector('.close-button');
		const popoverContent = document.querySelector('.popover-content');

		if (!supportTrigger || !closeButton || !popoverContent) {
			console.error('Support popover elements not found');
			return null;
		}

		const closePopover = (evt) => {
			supportTrigger.checked = false;

			if (!evt) return;

			// Set localStorage when close button is clicked
			if (config.localStorageKey && evt.target.closest('.close-button')) {
				localStorage.setItem(config.localStorageKey, 'true');
			}
		};

		const handleOutsideClick = (event) => {
			if (!popoverContent.contains(event.target) && !event.target.closest('.popover-label')) {
				closePopover(false);
			}
		};

		const openPopover = () => {
			supportTrigger.checked = true;
			document.addEventListener('click', handleOutsideClick);
		};

		closeButton.addEventListener('click', closePopover);

		// Listen for checkbox changes to handle cleanup
		supportTrigger.addEventListener('change', (e) => {
			if (!e.target.checked) {
				document.removeEventListener('click', handleOutsideClick);
			}
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
			setTimeout(popover.openPopover, config.delay);
		} else {
			popover.openPopover();
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
