import { ProductTypes } from "@/types/product";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const BACKEND_URL = publicRuntimeConfig.BACKEND_URL;

export const GET_FEATURED_PRODUCTS_URL = (productType: ProductTypes) =>
  `${BACKEND_URL}/products/featured/${productType}`;

export const GET_PRODUCT_URL = (productType: ProductTypes) => `${BACKEND_URL}/products/${productType}`;

export const GET_CAKES_URL = `${BACKEND_URL}/products/cakes`;

export const GET_VIEW_PRODUCT_URL = (productId: string) => `${BACKEND_URL}/products/view/${productId}`;
export const GET_ALLREVIEWS_URL = `${BACKEND_URL}/products/getReviews`;
// backend not yet implemented
export const GET_REVIEWS_URL = (productId: string) => `${BACKEND_URL}/reviews/${productId}`;

export const REGISTER_URL = `${BACKEND_URL}/users/register/user`;
export const LOGIN_URL = `${BACKEND_URL}/users/login`;
