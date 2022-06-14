import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import API from "$lib/contentful/" 
import { formatDateLong } from '$lib/globals.mjs';

export async function get({ params }) {
  let data = false;
  let otherReadData = false;
  try {
    data = await API(`query {
      articlesCollection(where: { slug: "${params.id}" } ) {
        items {
          headline
          excerpt
          bodyContent {
            json
          }
          heroImage {
            title,
            description,
            url
          }
          author {
            authorName
            authorUrl
          }
          sys {
            firstPublishedAt
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
            slug
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
    
    const {headline, excerpt, bodyContent, heroImage, author, sys} = data.articlesCollection.items[0]

    return {
      body: {
        headline,
        excerpt:excerpt,
        body: documentToHtmlString(bodyContent.json),
        otherReads: otherReadData.articlesCollection.items,
        author:author,
        heroImage:heroImage,
        publishDate:formatDateLong(sys.firstPublishedAt) + ' ' + new Date(sys.firstPublishedAt).getFullYear()
      }
    };
  }
 
  return {
    status: 404
  };
}
