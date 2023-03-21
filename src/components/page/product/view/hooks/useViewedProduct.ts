import { GET_VIEW_PRODUCT_URL } from "@/components/common/urls";
import { ApiResponse } from "@/types/api-response";
import { Product } from "@/types/product";
import { useState, useEffect } from "react";

export const useViewedProduct = (productId: string) => {
    const [viewedProduct, setViewedProduct] = useState<ApiResponse<Product>>({ loading: true });

    useEffect(() => {
        setViewedProduct({
            loading: true
        });

        fetch(GET_VIEW_PRODUCT_URL(String(productId)))
        .then(async (res) => {
            if (!res.ok) {
                throw await res.json();
            }
            return res.json().then((result) => {
                console.log(result[0]);
    
                setViewedProduct({
                    loading: false,
                    value: result[0],
                });
                
                //return result;
            });
        })
        .catch((error) => {
            console.log("errored", error);
    
            setViewedProduct({
                loading: false,
                error,
            });
        });
    }, [productId])

    return viewedProduct;
}