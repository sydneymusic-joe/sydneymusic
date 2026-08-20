import APId from '$lib/datocms/';

export async function load() {
	const jobs = APId(`{
		allJobs {
			roleTitle
			subheadSpecs
			shortDescription
			permalink
			applicationsClose
		}
	}`);

	return jobs;
}
