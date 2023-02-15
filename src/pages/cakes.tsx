import LoremIpsum from "@/components/common/LoremIpsum";
import { CakesSection } from "@/components/page/cakes/CakesSection";
import { Container, Typography } from "@mui/material";

export default function CakePage() {
  return (
    <Container maxWidth="md" sx={{ pt: 10, pb: 10 }}>
      <Typography sx={{ mb: 3 }} variant="h2">
        Cake page!
      </Typography>

      <CakesSection></CakesSection>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <LoremIpsum></LoremIpsum>
    </Container>
  );
}
