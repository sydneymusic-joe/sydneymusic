//ToDo: Generate js at build from source of truth config in datoCMS
const bottomSheetConfig = [
	{
		key: 'savedPromoHomepage',
		route: '/',
		delay: 5000,
		localStorageKey: 'doitagaindonorPromo'
	},
	{
		key: 'savedPromoGigGuide',
		route: '/gig-guide',
		delay: 10000,
		localStorageKey: 'doitagaindonorPromo'
	},
	{
		key: 'savedPromoVenues',
		route: '/gig-guide/venues',
		delay: 5000,
		localStorageKey: 'doitagaindonorPromo'
	}
];
document.addEventListener('DOMContentLoaded', () => {
	const createBottomSheet = (config) => {
		const sheet = document.getElementById(`${config.key}-sheet`);
		const closeSheetBtn = document.getElementById(`${config.key}-close-btn`);
		const buttons = sheet.querySelectorAll('a');

		if (!sheet || !closeSheetBtn) {
			console.error(`Bottom sheet elements not found for config key: ${config.key}`);
			return null;
		}

		const closeSheet = (evt) => {
			sheet.classList.remove('show');

			if (!evt) return;

			if (config.localStorageKey && evt.srcElement.target === '_blank') {
				localStorage.setItem(config.localStorageKey, 'true');
			}

			document.removeEventListener('click', handleOutsideClick);
			document.removeEventListener('click', closeSheet);
		};

		const handleOutsideClick = (event) => {
			if (!sheet.contains(event.target) && !closeSheetBtn.contains(event.target)) {
				closeSheet(false);
			}
		};

		const showSheet = () => {
			sheet.classList.add('show');
			document.addEventListener('click', handleOutsideClick);
		};

		closeSheetBtn.addEventListener('click', closeSheet);

		buttons.forEach((button) => {
			button.addEventListener('click', closeSheet);
		});

		return { showSheet };
	};

	const showBottomSheet = (config) => {
		if (config.localStorageKey && localStorage.getItem(config.localStorageKey) === 'true') {
			return;
		}

		const bottomSheet = createBottomSheet(config);
		if (!bottomSheet) return;

		if (config.delay > 0) {
			setTimeout(bottomSheet.showSheet, config.delay);
		} else {
			bottomSheet.showSheet();
		}
	};

	const initialiseBottomSheets = () => {
		bottomSheetConfig.forEach((config) => {
			if (window.location.pathname === config.route) {
				showBottomSheet(config);
			}
		});
	};

	initialiseBottomSheets();
});
