import {
  useEffect,
  useState,
} from 'react';

import { ApiResponse } from '@/types/api-response';
import { Product } from '@/types/product';

export const useFeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<
    ApiResponse<Product[]>
  >({
    loading: true,
  });

  useEffect(() => {
    const t = fetch("/api/products/featured/cakes")
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
  }, []);

  return featuredProducts;
};
