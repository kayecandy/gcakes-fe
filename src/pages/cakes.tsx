import LoremIpsum from "@/components/common/LoremIpsum";
import { ProductGrid } from "@/components/common/product/ProductGrid";
import { CakesSection } from "@/components/page/cakes/CakesSection";
import { Container, Typography } from "@mui/material";

export default function CakePage() {
  return (
    <Container  sx={{ pt: 10, pb: 10, maxWidth: "md" }}>
    <Typography sx={{ mb: 3 }} variant="h2">
      Cakes page!
    </Typography>

      {/* <ProductGrid productType="cakes"></ProductGrid> */}
      <CakesSection />
    </Container>
  );
}
