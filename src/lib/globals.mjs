//  Not sure if ical will end up bundled on the FE, but I really don't want to write my own func for this
//  ToDo: Investigate impact on bundle size if any and find a tiny lib?
import ical from 'ical-generator';
export const previewMode =
	(import.meta.env ? import.meta.env : process.env).VITE_DATOCMS_SHOWDRAFTS == 'true';

// ToDo get this from contentful?
export const navigation = [
	{ title: 'Gigs', href: '/gig-guide' },
	{ title: 'Venues', href: '/gig-guide/venues' },
	{ title: 'Reads', href: '/reads' },
	{ title: 'Merch', href: 'https://store.sydneymusic.net' },
	{ title: 'Support Us', href:'/support' }
];

export const navigationFooter = [
	{ title: 'Home', href: '/' },
	{ title: 'Gig Guide', href: '/gig-guide' },
	{ title: 'Venue Directory', href: '/gig-guide/venues' },
	{ title: 'About & FAQ', href: '/about' },
	{ title: 'Donate / Merch Store', href: 'https://store.sydneymusic.net' }
];

export const navigationFooterSecondary = [
	{ title: 'Contact', href: '/contact' },
	{ title: 'Reads', href: '/reads' },
	{ title: 'Links', href: '/links' },
	{ title: 'Join the Discord!', href: 'https://discord.gg/jv8VKrXymJ' },
	{ title: 'Weekly Gig Guide Playlist', href: '/playlist' }
];

//ToDo: Get config from source of truth in datoCMS
export const bottomSheetConfig = [
	{
		key: 'donorPromoHomepage',
		route: '/',
		delay: 5000,
		localStorageKey: 'donorPromo'
	},
	{
		key: 'donorPromoGigGuide',
		route: '/gig-guide',
		delay: 10000,
		localStorageKey: 'donorPromo'
	},
	{
		key: 'donorPromoVenues',
		route: '/gig-guide/venues',
		delay: 5000,
		localStorageKey: 'donorPromo'
	}
];

export const formatDay = (dateOrString) => {
	const d = new Date(dateOrString);
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	return days[d.getDay()];
};

export const formatMonth = (dateOrString) => {
	const d = new Date(dateOrString);
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	return months[d.getMonth()];
};

export const formatDate = (dateOrString) => {
	const d = new Date(dateOrString);
	return `${formatMonth(d)} ${d.getFullYear()}`;
};

export const formatDateLong = (dateOrString) => {
	const d = new Date(dateOrString);
	return `${String(d.getDate()).padStart(2, '0')} ${String(formatMonth(d))}`;
};

export const groupBy = (items, cb) => {
	const group = items
		.map((i) => ({ ...i, key: cb(i) }))
		.reduce((acc, i) => {
			const { key, ...item } = i; // Don't leak the key
			const prevItems = acc[key] ? acc[key] : [];
			return { ...acc, [key]: [...prevItems, item] };
		}, {});

	return Object.entries(group).map(([key, value]) => ({ label: key, items: value }));
};

export const createCalendarLink = (event, venue) => {
	const v = venue ? venue : event.venue;
	const start = new Date(event.date);
	const end = new Date(start);
	end.setTime(start.getTime() + 60 * 60 * 1000 * 2.5); // Default to 2.5 hours

	const cal = ical();
	cal.createEvent({
		start,
		end,
		summary:
			event.promotedName +
			(event.performersListJson ? ' w/ ' + event.performersListJson.join(', ') : ''),
		url: event.ticketUrl,
		location: v.venueName + (v.address ? ', ' + v.address : '') + (v.suburb ? ', ' + v.suburb : '')
	});
	return `data:text/calendar;charset=utf8,${encodeURIComponent(cal.toString())}`;
};

export const isToday = (date) => {
	const today = new Date();
	return today.toDateString() === date.toDateString();
};

export const isTomorrow = (date) => {
	const tomorrow = new Date();
	tomorrow.setDate(tomorrow.getDate() + 1);
	return tomorrow.toDateString() === date.toDateString();
};

export const formatDayOfWeek = (date) =>
	isToday(date) ? 'Today' : isTomorrow(date) ? 'Tomorrow' : formatDay(date);
