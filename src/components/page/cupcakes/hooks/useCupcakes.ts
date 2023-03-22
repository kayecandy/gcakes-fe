import { useEffect, useState } from "react";
import { GET_CUPCAKES_URL } from "@/components/common/util/urls";
import { ApiResponse } from "@/types/api-response";
import { Product } from "@/types/product";


export const useCupcakes = () => {
  const [cupcakes, setCupcakes] = useState<ApiResponse<Product[]>
  >({
    loading: true,
  });

  useEffect(() => {
    const t = fetch(GET_CUPCAKES_URL)
      .then(async (res) => {
        if (!res.ok) {
          throw await res.json();
        }

        return res.json().then((result) => {
          console.log(result);

          if (result.length > 0) {

            setCupcakes({
              loading: false,
              value: result,
            });
          }
          else {
            setCupcakes({
              loading: false,
            });

          }

        });
      })
      .catch((error) => {
        console.log("errored", error);

        setCupcakes({
          loading: false,
          error,
        });
      });
  }, []);

  return cupcakes;
};
