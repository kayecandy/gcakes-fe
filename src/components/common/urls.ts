import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const BACKEND_URL = publicRuntimeConfig.BACKEND_URL;

export const GET_FEATURED_PRODUCTS_URL = (productType: string) =>
  `${BACKEND_URL}/products/featured/${productType}`;

export const GET_CAKES_URL = `${BACKEND_URL}/products/cakes`;
