import APId from '$lib/datocms/';

const getLinks = async () => {
	const d = new Date();

	const data = await APId(`{
		linkInBio {
			headline
			welcomeParagraph
			links {
				title
				description
				url
				articleLink {
					headline
					excerpt
					slug
					heroImage {
						url
					}
				}
				image {
					url
				}
				visible
			}
		}
	}`);

	data.linkInBio.links.forEach(l => {
		if (l.url == '' && l.articleLink != null) {
			l.title = l.articleLink.headline;
			l.description = l.articleLink.excerpt;
			if (l.image == null && l.articleLink.heroImage != null) {
				l.image = l.articleLink.heroImage;
			}
			l.url = '/reads/' + l.articleLink.slug;
		}
	});

	if (data) {
		return data.linkInBio;
	}

	return {}
}


export async function load() {
	let linkinbio = await getLinks();

	return {
		linkinbio
	};
}
