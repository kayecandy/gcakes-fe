import { ApiResponse } from "@/types/api-response"
import { Product, ProductTypes } from "@/types/product"
import { useEffect, useState } from "react"
import { GET_PRODUCT_URL } from "../util/urls";


type ProductState = ApiResponse<Product[]>;

type UseProductOptions = {
  initialValue?: ProductState;
  limit?: number;
}


export const useProduct = (productType: ProductTypes, {
  initialValue = { loading: false },
  limit
}: UseProductOptions = {}) => {
  const [products, setProducts] = useState<ProductState>(initialValue);

  useEffect(() => {
    setProducts({
      loading: true
    });
    
    fetch(GET_PRODUCT_URL(productType))
      .then(async(res) => {
        if (!res.ok) {
          throw await res.json();
        }

        return res.json().then(
          (value) => {
            setProducts({
              loading: false,
              value
            })
          }
        )
      }).catch((error) => {
        setProducts({
          loading: false,
          error
        })
      })
  }, [productType])


  return products;
}