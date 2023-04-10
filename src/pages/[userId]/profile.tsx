import { useSession } from "@/components/common/hooks/useSession";
import { COLOR_PALLETE } from "@/components/common/ThemeProvider";
import { LogoutButton } from "@/components/common/user/login/LogoutButton";
import { withSessionPage } from "@/components/common/user/session/withSessionPage";
import { Container, Grid, Skeleton, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default withSessionPage(function ProfilePage() {
  const session = useSession();

  if (!session || !session.currentUser) {
    return <div data-testid="profilePageEmpty"></div>;
  }

  return (
    <Container sx={{ mt: 10, mb: 15, maxWidth: "md" }}>
      <Typography
        variant="h2"
        sx={{
          color: COLOR_PALLETE[1],
          mb: 2
        }}
      >
        Profile
      </Typography>

      <Box
        sx={{
          borderRadius: "2rem",
          background: "white",
          p: 6,
          mb: 4,
          "& .MuiTypography-root": {
            display: "inline-block",
            marginRight: "0.5rem"
          }
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Box>
              <Typography fontWeight="700">First Name</Typography>
              <Typography data-testid="profileFirstName">{session.currentUser.firstName}</Typography>
            </Box>
            <Box>
              <Typography fontWeight="700">Birthdate</Typography>
              <Typography data-testid="profileBirthday">
                {session.currentUser.birthday?.toDateString()}
              </Typography>
            </Box>
            <Box>
              <Typography fontWeight="700">Username</Typography>
              <Typography data-testid="profileUserID">{session?.currentUser.userid}</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography fontWeight="700">Last Name</Typography>
              <Typography data-testid="profileLastName">{session?.currentUser.lastName}</Typography>
            </Box>
            <Box>
              <Typography fontWeight="700">Email</Typography>
              <Typography data-testid="profileEmail">{session?.currentUser.email}</Typography>
            </Box>
          </Grid>
        </Grid>

      </Box>



      <div>
        <LogoutButton variant="contained"></LogoutButton>
      </div>
    </Container>
  );
});
