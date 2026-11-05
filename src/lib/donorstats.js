const res = await fetch('https://donorstats.sydneymusic.net/donorstats.json');
const data = await res.json();
const sponsorPercent = (20 /* RØDE */ + 22.2 /* Neilson Foundation */ + 8.7 /* GigTea */);
const totalFundedPercent = Math.round(sponsorPercent + (data ? data.recurringBudgetPercent : 22));

export const mds = {
			...data,
			sponsorPercent,
			totalFundedPercent
		}