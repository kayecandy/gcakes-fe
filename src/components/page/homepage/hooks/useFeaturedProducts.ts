import {
  useEffect,
  useState,
} from 'react';

import { Product } from '@/types/product';

export const useFeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<
    Product[] | undefined
  >();

  useEffect(() => {
    fetch("/api/products/featured/cakes").then((res) =>
      res.json().then((result) => {
        setFeaturedProducts(result);
      })
    );
  }, []);

  return featuredProducts;
};
