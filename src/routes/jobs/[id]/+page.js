import APId from '$lib/datocms/';

export async function load({ params }) {
	const jobs = APId(`{
		allJobs(filter: { permalink: {eq : "${params.id}" } }, first:1 ) {
			roleTitle
			subheadSpecs
			shortDescription
			atAGlance
			aboutTheGig
			whoThisRoleIsFor
			applicationUrl
			positionDescriptionUrl
			permalink
			applicationsClose
		}
	}`);

	return jobs;
}
