//  Not sure if ical will end up bundled on the FE, but I really don't want to write my own func for this
//  ToDo: Investigate impact on bundle size if any and find a tiny lib?
import ical from 'ical-generator';

// ToDo get this from contentful?
export const navigation = [
  { title: "home", href: "/" },
  { title: "gig guide", href: "/gig-guide/" },
  { title: "reads", href: "/reads/" }
]

export const navigationSecondary = [
  { title: "contact", href: "/contact" },
  { title: "who's involved", href: "/who" }
]

export const formatDay = (dateOrString) => {
  const d = new Date(dateOrString);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return days[d.getDay()];
}

export const formatMonth = (dateOrString) => {
  const d = new Date(dateOrString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[d.getMonth()];
}

export const formatDate = (dateOrString) => {
  const d = new Date(dateOrString);
  return `${formatMonth(d)} '${String(d.getFullYear()).substring(2, 4)}`
}

export const formatDateLong = (dateOrString) => {
  const d = new Date(dateOrString);
  return `${String(d.getDate()).padStart(2,'0')} ${String(d.getMonth() + 1).padStart(2,'0')} ${String(d.getFullYear()).substring(2, 4)}`
}

export const groupBy = (items, cb) => {
  const group = items.map((i) => ({ ...i, key: cb(i) }))
    .reduce((acc, i) => {
      const { key, ...item } = i; // Don't leak the key 
      const prevItems = acc[key] ? acc[key]:[];
      return { ...acc, [key]: [...prevItems, item] };
    }, {});

  return Object.entries(group).map(([key, value]) => ({ label: key, items: value }));
}

export const createCalendarLink = (event) => {
  const start = new Date(event.date);
  const end = new Date(start);
  end.setTime(start.getTime() + 60 * 60 * 1000); // Default to 1 hour

  const cal = ical();
  cal.createEvent({
    start,
    end,
    summary: event.promotedName,
    url: event.ticketUrl
  });
  return `data:text/calendar;charset=utf8,${encodeURIComponent(cal.toString())}`;
}

export const isToday = (date) => {
  const today = new Date();
  return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
};

export const isTomorrow = (date) => {
  const tomorrow = new Date();
  tomorrow.setDate(date.getDate() + 1)
  return date.getDate() === tomorrow.getDate() &&
      date.getMonth() === tomorrow.getMonth() &&
      date.getFullYear() === tomorrow.getFullYear();
};

export const formatDayOfWeek = (date) =>  isToday(date) ? "Today" : isTomorrow(date) ? "Tomorrow" : formatDay(date);