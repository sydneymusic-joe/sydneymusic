import { GraphQLClient, gql } from 'graphql-request'
import { previewMode } from '../globals.mjs'

export const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE}`, 
  {
  headers: {
    authorization: `Bearer ${previewMode ? import.meta.env.VITE_CONTENTFUL_PREVIEW_TOKEN : import.meta.env.VITE_CONTENTFUL_TOKEN}`,
  },
});

export default (query) => client.request(gql`${query}`)