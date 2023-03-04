import { ProductGrid } from "@/components/common/product/ProductGrid";
import { Container } from "@mui/material";

export default function DecoratedCookiesPage() {
  return (
    <Container maxWidth="lg" sx={{pt: 10, pb: 10}}>
      <ProductGrid productType="decorated_cookies"></ProductGrid>
    </Container>
  )
}