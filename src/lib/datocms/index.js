import { GraphQLClient, gql } from 'graphql-request';
import { previewMode } from '../globals.mjs';

export const client = new GraphQLClient(`https://graphql.datocms.com/`, {
	headers: {
		'Authorization': `Bearer ${
			previewMode ? import.meta.env.VITE_DATOCMS_PREVIEW_TOKEN : import.meta.env.VITE_DATOCMS_TOKEN
		}`,
		'Content-Type': 'application/json',
  		...(previewMode && {'X-Include-Drafts': true})
	}
});

export default (query) =>
	client.request(
		gql`
			${query}
		`
	);
