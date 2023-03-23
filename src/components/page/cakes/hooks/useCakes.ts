import { useEffect, useState } from "react";

import { GET_CAKES_URL } from "@/components/common/util/urls";
import { ApiResponse } from "@/types/api-response";
import { Product } from "@/types/product";

/**
 * Use useFeaturedProducts as sample
 *
 *
 */
export const useCakes = () => {
  const [cakes, setCakes] = useState<ApiResponse<Product[]>
  >({
    loading: true,
  });

  useEffect(() => {
    const t = fetch(GET_CAKES_URL)
      .then(async (res) => {
        if (!res.ok) {
          throw await res.json();
        }

        return res.json().then((result) => {
          console.log(result);

          if (result.length > 0) {

            setCakes({
              loading: false,
              value: result,
            });
          }
          else {
            setCakes({
              loading: false,
            });

          }

        });
      })
      .catch((error) => {
        console.log("errored", error);

        setCakes({
          loading: false,
          error,
        });
      });
  }, []);

  return cakes;
};
