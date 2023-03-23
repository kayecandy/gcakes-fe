import { COLOR_PALLETE } from "@/components/common/ThemeProvider";
import { ErrorOutline } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";

export default function Page404() {
  return (
    <Container
      sx={{
        pt: 10,
        textAlign: "center",
        mb: 15
      }}
    >
      <div>
        <ErrorOutline
          sx={{
            fontSize: 150,
            color: COLOR_PALLETE[3]
          }}
        ></ErrorOutline>
      </div>

      <Typography
        sx={{
          mb: 3,
          color: COLOR_PALLETE[2]
        }}
        variant="h2"
      >
        Page not found
      </Typography>
      <Typography>
        Sorry! The page you&apos;re trying to access does not exists
      </Typography>
    </Container>
  );
}
