/* eslint-disable react-hooks/exhaustive-deps */
import { GET_REVIEWS_URL } from "@/components/common/util/urls";
import { ApiResponse } from "@/types/api-response";
import { Review } from "@/types/review";
import { UseState } from "@/types/use-state";
import { useEffect, useState } from "react";

export const useViewedReviews = (productId: string): UseState<ApiResponse<Review[]>> => {
    /** TODO */
    /** Returns a list of Reviews given a productId associated with the review */
    const [viewedReviews, setViewedReviews] = useState<
    ApiResponse<Review[]>
  >({
    loading: true,
  });

    useEffect(() => {
        setViewedReviews({
            loading: true,
        });

        fetch(GET_REVIEWS_URL(productId))
            .then(async (res) => {
                if (!res.ok) {
                    throw await res.json();
                }
                
                return res.json().then((result) => {
                    console.log(result);

                    setViewedReviews({
                        loading: false,
                        value: result,
                    });
                });
            })
            .catch((error) => {
                console.log("errored", error);

                setViewedReviews({
                    loading: false,
                    error,
                });
            });
    }, []);

    return [viewedReviews, setViewedReviews];
}