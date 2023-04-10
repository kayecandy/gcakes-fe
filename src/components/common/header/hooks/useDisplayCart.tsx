import { GET_PRODUCTS_URL } from "@/components/common/util/urls";
import { ApiResponse } from "@/types/api-response";
import { Product } from "@/types/product";
import { useState, useEffect } from "react";

export const useDisplayCart = () => {
    const [viewedProducts, setViewedProducts] = useState<ApiResponse<Product[]>>({ loading: true });

    useEffect(() => {
        setViewedProducts({
            loading: true
        });

        /* Gets the Product to be viewed using its CMS sys.id.
        *  If successful, the object is stored in
        *  a list form in result[0].
        **/
        fetch(GET_PRODUCTS_URL)
        .then(async (res) => {
            if (!res.ok) {
                throw await res.json();
            }
            return res.json().then((result) => {
                console.log(result);
    
                setViewedProducts({
                    loading: false,
                    value: result,
                });
            });
        })
        .catch((error) => {
            console.log("errored", error);
    
            setViewedProducts({
                loading: false,
                error,
            });
        });
    }, [])

    return viewedProducts;
}