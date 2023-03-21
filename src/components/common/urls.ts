import { ProductTypes } from "@/types/product";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const BACKEND_URL = publicRuntimeConfig.BACKEND_URL;

export const GET_FEATURED_PRODUCTS_URL = (productType: ProductTypes) =>
  `${BACKEND_URL}/products/featured/${productType}`;

export const GET_PRODUCT_URL = (productType: ProductTypes) => `${BACKEND_URL}/products/${productType}`;

export const GET_CAKES_URL = `${BACKEND_URL}/products/cakes`;

// test
export const GET_VIEW_PRODUCT_URL = (productId: string) => `${BACKEND_URL}/products/view/${productId}`;

export const REGISTER_URL = `${BACKEND_URL}/users/register/user`;
export const LOGIN_URL = `${BACKEND_URL}/users/login`;
