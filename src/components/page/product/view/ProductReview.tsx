import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Rating,
  Card,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FC } from "react";
import { Review } from "@/types/review";

type ReviewProps = {
  review: Review;
};

const ProductReview: FC<ReviewProps> = ({ review }) => {
  return (
    <Box>
      <Card
        sx={{
          px: 3,
          py: 3,
                  my: 1,
                  borderRadius: "1rem",
          boxShadow: 0
        }}
      >
        <Grid
          container
          sx={{
            // width: 600,
            display: "flex",
            justifyItems: "right",
          }}
                  columnSpacing={2.5}
        >
          <Grid item xs="auto">
            <AccountCircleIcon fontSize="large" />
          </Grid>

          <Grid
            item
            sx={{
              flexGrow: 1,
            }}
          >
            <Typography fontSize="smaller">
              {String("user/" + review.user?.userid)}
            </Typography>
            <Typography fontWeight="600">{review.title}</Typography>
            <Typography>{review.comment}</Typography>
          </Grid>
          <Grid item xs="auto">
            <Rating name="simple-controlled" value={review.rating} readOnly />
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default ProductReview;
