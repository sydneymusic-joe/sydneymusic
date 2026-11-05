const res = await fetch('https://donorstats.sydneymusic.net/donorstats.json');
const data = await res.json();
const sponsorPercent = (20 /* RØDE */ + 33.33 /* Neilson Foundation */ + 8.7 /* GigTea */) - 14.1 /* first 4 months' shortfall */;
const totalFundedPercent = Math.round(sponsorPercent + (data ? data.recurringBudgetPercent : 22));

export const mds = {
			...data,
			sponsorPercent,
			totalFundedPercent
		}