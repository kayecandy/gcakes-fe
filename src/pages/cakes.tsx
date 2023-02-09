import LoremIpsum from "@/components/common/LoremIpsum";
import { Container, Typography } from "@mui/material";

export default function CakePage() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography sx={{ mb: 3 }} variant="h2">
        Cake page!
      </Typography>

      <LoremIpsum></LoremIpsum>
    </Container>
  );
}
