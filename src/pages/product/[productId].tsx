import { AddReviewForm } from "@/components/page/product/reviews/AddReviewForm";
import { Container, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function ProductPage() {

  const router = useRouter();

  return <Container sx={{my:10,}}>
    <Typography variant="h3">This is product page</Typography>

    <Typography variant="body1">
      This is productId from URL
      <br></br>
      <code>

      {router.query.productId}
      </code>
    </Typography>


    <AddReviewForm></AddReviewForm>
  </Container>
}