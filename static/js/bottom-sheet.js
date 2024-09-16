//ToDo: Generate js at build from source of truth config in datoCMS
const bottomSheetConfig = [
	{
		key: 'merchDropGigGuide',
		route: '/gig-guide',
		delay: 10000,
		localStorageKey: 'merchDropSeen'
	},
	{
		key: 'merchDropVenues',
		route: '/gig-guide/venues',
		delay: 5000,
		localStorageKey: 'merchDropSeen'
	}
];
document.addEventListener('DOMContentLoaded', () => {
	const createBottomSheet = (config) => {
		const sheet = document.getElementById(`${config.key}-sheet`);
		const overlay = document.getElementById(`${config.key}-overlay`);
		const closeSheetBtn = document.getElementById(`${config.key}-close-btn`);
		const buttons = sheet.querySelectorAll('a');

		if (!sheet || !overlay || !closeSheetBtn) {
			console.error(`Bottom sheet elements not found for config key: ${config.key}`);
			return null;
		}

		const closeSheet = () => {
			sheet.classList.remove('show');
			overlay.classList.remove('show');

			document.body.style.pointerEvents = '';
			document.body.style.overflow = '';
			document.body.style.paddingRight = '';

			if (config.localStorageKey) {
				localStorage.setItem(config.localStorageKey, 'true');
			}

			document.removeEventListener('click', handleOutsideClick);
			document.removeEventListener('click', closeSheet);
		};

		const handleOutsideClick = (event) => {
			if (!sheet.contains(event.target) && !closeSheetBtn.contains(event.target)) {
				closeSheet();
			}
		};

		const showSheet = () => {
			sheet.classList.add('show');
			overlay.classList.add('show');

			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			document.body.style.paddingRight = `${scrollbarWidth}px`; // avoid layout shift when affecting body

			document.body.style.pointerEvents = 'none';
			document.body.style.overflow = 'hidden';

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
