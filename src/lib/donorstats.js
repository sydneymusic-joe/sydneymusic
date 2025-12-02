const res = await fetch('https://donorstats.sydneymusic.net/donorstats.json');
const data = await res.json();
const sponsorPercent = 48.2;
const totalFundedPercent = Math.round(sponsorPercent + (data ? data.recurringBudgetPercent : 22));

export const mds = {
			...data,
			sponsorPercent,
			totalFundedPercent
		}