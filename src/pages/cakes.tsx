import LoremIpsum from "@/components/common/LoremIpsum";
import { ProductGrid } from "@/components/common/product/ProductGrid";
import { CakesSection } from "@/components/page/cakes/CakesSection";
import { Container, Typography } from "@mui/material";

export default function CakePage() {
  return (
    <Container maxWidth="lg" sx={{ pt: 10, pb: 10 }}>
      <ProductGrid productType="cakes"></ProductGrid>
    </Container>
  );
}
