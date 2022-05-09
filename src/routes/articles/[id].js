import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import API from "$lib/contentful/" 

export async function get({ params }) {

  let data = false
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
  } catch (e) {
    console.log(e)
  }

  if (data) {
    // ToDo reshape data here
    const {headline, bodyContent} = data.articlesCollection.items[0]

    return {
      body: {
        headline,
        body: documentToHtmlString(bodyContent.json)
      }
    };
  }
 
  return {
    status: 404
  };
}