import { ProductGrid } from "@/components/common/product/ProductGrid";
import { DecoratedCookiesSection } from "@/components/page/decoratedCookies/DecoratedCookiesSection";
import LoremIpsum from "@/components/common/LoremIpsum";
import { CupcakesSection } from "@/components/page/cupcakes/CupcakesSection";
import { Container, Typography } from "@mui/material";

export default function DecoratedCookiesPage() {
  return (
    <Container maxWidth="md" sx={{ pt: 10, pb: 10 }}>
    <Typography sx={{ mb: 3 }} variant="h2">
      Decorated Cookie page!
    </Typography>

    {/* <ProductGrid productType="decorated_cookies"></ProductGrid> */}
    <DecoratedCookiesSection />

    <LoremIpsum></LoremIpsum>
    
  </Container>
  )
}


