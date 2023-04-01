import { useSession } from "@/components/common/hooks/useSession";
import { ADD_REVIEW_URL } from "@/components/common/util/urls";
import { Review, ReviewUser } from "@/types/review";
import {
  Alert,
  Box,
  Button,
  Grid,
  Input,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { FC, FormEventHandler, useEffect, useState } from "react";

export type AddReviewFormProps = {
  productId: string;
  onReviewAdded?: (review:Review)=>void
};

export const AddReviewForm: FC<AddReviewFormProps> = ({
  productId,
  onReviewAdded = () => {},
}) => {
  const [rating, setRating] = useState<number | null>(null);
  const [title, setTitle] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const [showAlert, setShowAlert] = useState<"success" | "error">();

  const session = useSession();

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(undefined);
      }, 3000);
    }
  }, [showAlert]);

  if (!session) {
    return <Box>Login to add your review!</Box>;
  }

  const { accessToken } = session;

  const handleSubmitReview: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setLoading(true);

    fetch(ADD_REVIEW_URL(productId), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        comment,
        rating,
        title,
      }),
    })
      .then(async (e) => {
        if (!e.ok) {
          throw e;
        }

        const res = await e.json() as Review;

        setRating(null);
        setTitle("");
        setComment("");
        setShowAlert("success");

        if (onReviewAdded) {
          onReviewAdded(res);
        }

      })
      .catch(() => {
        setShowAlert("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box
      sx={{
        mt: 20,
        background: "white",
        p: 3,
        borderRadius: 4,
      }}
      maxWidth="sm"
    >
      <Typography
        sx={{
          mb: 3,
        }}
        variant="h4"
      >
        Let us know what you think!
      </Typography>

      <Grid container columnGap={3}>
        <Grid
          sx={{
            flexGrow: 1,
            textAlign: "center",
          }}
          item
        >
          {showAlert === "error" ? (
            <Alert sx={{ mb: 3 }} severity="error">
              Error in adding a review. Please check the fields and try again.
            </Alert>
          ) : showAlert === "success" ? (
            <Alert severity="success">Review successfully added</Alert>
          ) : (
            <></>
          )}
          <form onSubmit={handleSubmitReview}>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              {loading ? (
                <>Loading</>
              ) : (
                <Rating
                  size="large"
                  value={rating}
                  onChange={(e, val) => setRating(val)}
                  precision={0.5}
                ></Rating>
              )}
            </Box>

            {loading ? (
              <>loading</>
            ) : (
              <>
                <TextField
                  sx={{ mb: 3 }}
                  label="Title"
                  fullWidth
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                ></TextField>
                <TextField
                  sx={{
                    borderRadius: "1rem",
                  }}
                  label="Comment"
                  fullWidth
                  multiline
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                ></TextField>

                <Button
                  sx={{ mt: 2 }}
                  size="large"
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </>
            )}
          </form>
        </Grid>
        <Grid xs="auto" item></Grid>
      </Grid>
    </Box>
  );
};
