import LoremIpsum from "@/components/common/LoremIpsum";
import { ProductGrid } from "@/components/common/product/ProductGrid";
import { CupcakesSection } from "@/components/page/cupcakes/CupcakesSection";
import { Container, Typography } from "@mui/material";

export default function CupcakesPage() {
  return (
    <Container maxWidth="md" sx={{ pt: 10, pb: 10 }}>
      <Typography sx={{ mb: 3 }} variant="h2">
        Cupcakes page!
      </Typography>

      {/* <ProductGrid productType="cupcakes"></ProductGrid> */}
      <CupcakesSection />

      <LoremIpsum></LoremIpsum>
      
    </Container>
  );
}
