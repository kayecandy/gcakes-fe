import { useEffect, useState } from "react";
import { GET_DECORATED_COOKES_URL } from "@/components/common/util/urls";
import { ApiResponse } from "@/types/api-response";
import { Product } from "@/types/product";

export const useDecoratedCookies = () => {
  const [decoratedCookies, setDecoratedCookies] = useState<ApiResponse<Product[]>
  >({
    loading: true,
  });

  useEffect(() => {
    const t = fetch(GET_DECORATED_COOKES_URL)
      .then(async (res) => {
        if (!res.ok) {
          throw await res.json();
        }

        return res.json().then((result) => {
          console.log(result);

          if (result.length > 0) {

            setDecoratedCookies({
              loading: false,
              value: result,
            });
          }
          else {
            setDecoratedCookies({
              loading: false,
            });

          }

        });
      })
      .catch((error) => {
        console.log("errored", error);

        setDecoratedCookies({
          loading: false,
          error,
        });
      });
  }, []);

  return decoratedCookies;
};
