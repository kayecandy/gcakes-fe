import { GET_PRODUCTS_URL } from "@/components/common/util/urls";
import { ApiResponse } from "@/types/api-response";
import { Product } from "@/types/product";
import { useState, useEffect } from "react";

export const useDisplayCart = () => {
    const [displayed, setDisplayed] = useState<ApiResponse<Product[]>>({ loading: true });

    useEffect(() => {
        setDisplayed({
            loading: true
        });

        /* Gets the Product to be displayed using its CMS sys.id.
        *  If successful, the object is stored in
        *  a list form in result[0].
        **/
        fetch(GET_PRODUCTS_URL)
        .then(async (res) => {
            if (!res.ok) {
                throw await res.json();
            }
            return res.json().then((result) => {
                //console.log(result);
    
                setDisplayed({
                    loading: false,
                    value: result,
                });
            });
        })
        .catch((error) => {
            console.log("errored", error);
    
            setDisplayed({
                loading: false,
                error,
            });
        });
    }, [])

    return displayed;
}