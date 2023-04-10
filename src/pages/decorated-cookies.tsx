import { DecoratedCookiesSection } from "@/components/page/decoratedCookies/DecoratedCookiesSection";
import { Container, Typography } from "@mui/material";

export default function DecoratedCookiesPage() {
  return (
    <Container sx={{ pt: 10, pb: 10, maxWidth: "md" }}>
    <Typography sx={{ mb: 3 }} variant="h2">
      Decorated Cookies page!
    </Typography>


    <DecoratedCookiesSection />

    
  </Container>
  )
}


