const supportNoticeDisabledRoutes = ['/support'];

document.addEventListener('DOMContentLoaded', () => {

	const initialiseSupportNotice = () => {
		if (!supportNoticeDisabledRoutes.includes(window.location.pathname)) {
			if(window && window.plausible) window.plausible('View Support Notice', { interactive: false });
		}
	};

	initialiseSupportNotice();
});
