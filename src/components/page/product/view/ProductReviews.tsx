import { FC, useState } from "react";
import { useViewedReviews } from "./hooks/useViewedReviews";
import { AddReviewForm, AddReviewFormProps } from "../reviews/AddReviewForm";
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  Pagination,
} from "@mui/material";
import ProductReview from "./ProductReview";
import { ApiResponse } from "@/types/api-response";
import { Review } from "@/types/review";

const REVIEW_PAGE_COUNT = 4;

export type ProductReviewsProp = {
  reviews: ApiResponse<Review[]>;
};

export const ProductReviews: FC<ProductReviewsProp> = ({ reviews }) => {
  

  const [page, setPage] = useState<number>(1);

  if (reviews.value === undefined || !reviews.value.length) {
    return <></>;
  }

  return (
    <Container
      sx={{
        // maxHeight: 600,
        overflow: "hidden",
        maxWidth: "lg"
      }}
    >
      <Typography variant="h4" sx={{ mt: 2 }}>
        Reviews
      </Typography>
      {/** Review Components **/}
      <div
        style={{
          maxWidth: "100%",
        }}
      >
        <Grid container columnSpacing={2}>
          {reviews.value
            .slice(
              (page - 1) * REVIEW_PAGE_COUNT,
              (page - 1) * REVIEW_PAGE_COUNT + REVIEW_PAGE_COUNT
            )
            .map((review) => (
              <Grid item xs={6} key={review.sys.id}>
                <ProductReview review={review} />
              </Grid>
            ))}
        </Grid>
      </div>

      <Pagination
        sx={{
          py: 2,
          width: "fit-content",
          marginLeft: "auto",
          ".MuiButtonBase-root": {
            letterSpacing: "0 !important",
          },
        }}
        count={Math.ceil(reviews.value.length / REVIEW_PAGE_COUNT)}
        page={page}
        onChange={(e, newPage) => setPage(newPage)}
        
      ></Pagination>
    </Container>
  );
};
