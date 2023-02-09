import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE ?? "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  // host: `${process.env.CONTENTFUL_GRAPHQL_URL}`
});

export const ContentfulConfig = {
  space: process.env.CONTENTFUL_SPACE ?? "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  graphQlUrl: `${process.env.CONTENTFUL_GRAPHQL_URL}/spaces/${process.env.CONTENTFUL_SPACE}`,
};

export const fetchGQL = (body: RequestInit["body"]) => {
  return fetch(ContentfulConfig.graphQlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${ContentfulConfig.accessToken}`,
    },
    body,
  });
};
