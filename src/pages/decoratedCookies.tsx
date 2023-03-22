import LoremIpsum from "@/components/common/LoremIpsum";
import { DecoratedCookiesSection } from "@/components/page/decoratedCookies/DecoratedCookiesSection";
import { Container, Typography } from "@mui/material";

export default function CupcakesPage() {
  return (
    <Container maxWidth="md" sx={{ pt: 10, pb: 10 }}>
      <Typography sx={{ mb: 3 }} variant="h2">
        Decorated Cookies page!
      </Typography>

      <DecoratedCookiesSection />

      <LoremIpsum></LoremIpsum>
    </Container>
  );
}
