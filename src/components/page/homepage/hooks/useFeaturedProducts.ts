import { useEffect, useState } from "react";

import { GET_FEATURED_PRODUCTS_URL } from "@/components/common/util/urls";
import { ApiResponse } from "@/types/api-response";
import { Product, ProductTypes } from "@/types/product";

/**
 * Use this as template for api integration
 */
export const useFeaturedProducts = (productType: ProductTypes) => {
  const [featuredProducts, setFeaturedProducts] = useState<
    ApiResponse<Product[]>
  >({
    loading: true,
  });

  useEffect(() => {
    setFeaturedProducts({
      loading: true,
    });

    fetch(GET_FEATURED_PRODUCTS_URL(productType))
      .then(async (res) => {
        if (!res.ok) {
          throw await res.json();
        }

        return res.json().then((result) => {
          console.log(result);

          setFeaturedProducts({
            loading: false,
            value: result,
          });
        });
      })
      .catch((error) => {
        console.log("errored", error);

        setFeaturedProducts({
          loading: false,
          error,
        });
      });
  }, [productType]);

  return featuredProducts;
};
