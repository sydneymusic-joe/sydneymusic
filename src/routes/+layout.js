export const prerender = true;
export const csr = false;

export async function load({ fetch }) {
	const res = await fetch('https://donorstats.sydneymusic.net/donorstats.json');
	const data = await res.json();

	return {
		donorStats: data
	};
}
