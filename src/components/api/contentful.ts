import { createClient } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE ?? "",
  accessToken: process.env.CONTENTFUL_CD_ACCESS_TOKEN ?? "",
  // host: `${process.env.CONTENTFUL_GRAPHQL_URL}`
});

/*
export const ContentfulConfig = {
  space: process.env.CONTENTFUL_SPACE ?? "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN ?? "",
  graphQlUrl: `${process.env.CONTENTFUL_GRAPHQL_URL}/spaces/${process.env.CONTENTFUL_SPACE}`,
};
*/

export const ContentfulConfig = {
  space: process.env.CONTENTFUL_SPACE ?? "",
  contentDelivery: {
    accessToken: process.env.CONTENTFUL_CD_ACCESS_TOKEN ?? "",
    graphQlUrl: `${process.env.CONTENTFUL_GRAPHQL_URL}/spaces/${process.env.CONTENTFUL_SPACE}`,
  },
  contentManagement: {
    accessToken: process.env.CONTENTFUL_CM_ACCESS_TOKEN ?? "",
    url: `${process.env.CONTENTFUL_CM_URL}/spaces/${process.env.CONTENTFUL_SPACE}`,
  },
};

export const fetchGQL = (body: RequestInit["body"]) => {
  return fetch(ContentfulConfig.contentDelivery.graphQlUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${ContentfulConfig.contentDelivery.accessToken}`,
    },
    body,
  });
};

/**
 * A normal fetch() call with pre-attached header for
 * Contentful CM Authorization header
 *
 * @param url - URL of request prepended with Contentful CM API URL
 * @param init - Request configuration with attached header
 */
export const fetchCM = (url: RequestInfo, init?: RequestInit) => {
  return fetch(`${ContentfulConfig.contentManagement.url}/${url}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${ContentfulConfig.contentManagement.accessToken}`,
      ...init?.headers,
    },
  });
};