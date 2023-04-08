import { COLOR_PALLETE, cursiveFont } from "@/components/common/ThemeProvider";
import { useSession } from "@/components/common/hooks/useSession";
import { SX_MASKS } from "@/components/common/util/masks";
import { ADD_REVIEW_URL } from "@/components/common/util/urls";
import { Review, ReviewUser } from "@/types/review";
import {
  Alert,
  Box,
  Button,
  Grid,
  Input,
  LinearProgress,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { FC, FormEventHandler, useEffect, useState } from "react";

export type AddReviewFormProps = {
  productId: string;
  onReviewAdded?: (review: Review) => void;
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

        const res = (await e.json()) as Review;

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
        backgroundColor: `white`,
        borderRadius: "2rem",
        borderWidth: "5px",
        borderColor: COLOR_PALLETE[4],
        borderStyle: "solid",
        overflow: "hidden",
        maxWidth: "sm"
      }}
    >
      <Box
        sx={{
          backgroundColor: COLOR_PALLETE[4],
          textAlign: "center",
          ...SX_MASKS[0]("bottom"),
          pt: 3,
          pb: 9,
          mb: "1px",
          WebkitMaskSize: "240%",
        }}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontFamily: "Silverstar",
            letterSpacing: 0,
            lineHeight: "100%",
            mb: -6,
            position: "relative",
            zIndex: 1,
          }}
          variant="h1"
          color={COLOR_PALLETE[3]}
        >
          Add review
        </Typography>
        <Typography
          sx={{
            letterSpacing: "1px",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
          variant="h4"
        >
          Let us know what you think!
        </Typography>
      </Box>

      <Grid container sx={{ p: 3 }}>
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
            <Alert sx={{mb:3}} severity="success">Review successfully added</Alert>
          ) : (
            <></>
          )}
          <form onSubmit={handleSubmitReview}>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Rating
                size="large"
                value={rating}
                onChange={(e, val) => setRating(val)}
                precision={0.5}
                disabled={loading}
              ></Rating>
            </Box>

            <TextField
              sx={{ mb: 3 }}
              label="Title"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              disabled={loading}
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
              disabled={loading}
            ></TextField>

            <Button
              sx={{ mt: 2 }}
              size="large"
              variant="contained"
              type="submit"
              disabled={loading}
            >
              Submit
            </Button>

            {loading && <>
            <LinearProgress sx={{mt: 3}}></LinearProgress>
            </>}
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};
