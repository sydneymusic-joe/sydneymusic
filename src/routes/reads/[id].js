import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import API from "$lib/contentful/" 

export async function get({ params }) {
  let data = false;
  let otherReadData = false;
  try {
    data = await API(`query {
      articlesCollection(where: { slug: "${params.id}" } ) {
        items {
          headline
          bodyContent {
            json
          }
          associatedPerformersCollection {
            items {
              name
            }
          }
        }
      }
    }`)

		otherReadData = await API(`query {
      articlesCollection(
        order: sys_firstPublishedAt_ASC,
        limit: 4
        where: { slug_not: "${params.id}" }
      ) {
          items {
            headline
            excerpt
            slug,
            sys {
              firstPublishedAt
            }
          }
        }
      }`);

  } catch (e) {
    console.log(e);
  }

  if (data && otherReadData) {
    
    const {headline, bodyContent} = data.articlesCollection.items[0]

    return {
      body: {
        headline,
        body: documentToHtmlString(bodyContent.json),
        otherReads: otherReadData.articlesCollection.items
      }
    };
  }
 
  return {
    status: 404
  };
}
