import { CupcakesSection } from "@/components/page/cupcakes/CupcakesSection";
import { Container, Typography } from "@mui/material";

export default function CupcakesPage() {
  return (
    <Container sx={{ pt: 10, pb: 10, maxWidth: "md" }}>
      <Typography sx={{ mb: 3 }} variant="h2">
        Cupcakes page!
      </Typography>

      <CupcakesSection />

      
    </Container>
  );
}
