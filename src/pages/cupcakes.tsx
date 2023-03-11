import LoremIpsum from "@/components/common/LoremIpsum";
import { ProductGrid } from "@/components/common/product/ProductGrid";
import { Container, Typography } from "@mui/material";

export default function CupcakesPage() {
  return (
    <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
      hello world
      <ProductGrid productType="cupcakes"></ProductGrid>
    </Container>
  );
}
