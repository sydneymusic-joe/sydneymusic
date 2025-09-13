export const prerender = true;
export const csr = false;

export async function load({ fetch }) {
	const res = await fetch('https://donorstats.sydneymusic.net/donorstats.json');
	const data = await res.json();
	const sponsorPercent = 40;
	const totalFundedPercent = Math.round(sponsorPercent + (data ? data.recurringBudgetPercent : 22));

	return {
		donorStats: {
			...data,
			sponsorPercent,
			totalFundedPercent
		}
	};
}
