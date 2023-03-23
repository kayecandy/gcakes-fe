import LoremIpsum from "@/components/common/LoremIpsum";
import { ProductGrid } from "@/components/common/product/ProductGrid";
import { CakesSection } from "@/components/page/cakes/CakesSection";
import { Container, Typography } from "@mui/material";

export default function CakePage() {
  let rand = Math.random() * 100;
  return (
    <Container maxWidth="md" sx={{ pt: 10, pb: 10 }}>
    <Typography sx={{ mb: 3 }} variant="h2">
      Cakes page!
      </Typography>
      {/* rand > 300 ? `${rand} is Greater than 300` : `${rand} is Less than 300` */}
      {/* <ProductGrid productType="cakes"></ProductGrid> */}
      <CakesSection />
    </Container>
  );
}
