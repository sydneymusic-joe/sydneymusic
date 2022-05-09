import { GraphQLClient, gql } from 'graphql-request'

export const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE}`, 
  {
  headers: {
    authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_TOKEN}`,
  },
});

export default (query) => client.request(gql`${query}`)