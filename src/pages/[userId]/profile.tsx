import { useSession } from '@/components/common/hooks/useSession';
import { COLOR_PALLETE } from '@/components/common/ThemeProvider';
import { LogoutButton } from '@/components/common/user/login/LogoutButton';
import {
  withSessionPage,
} from '@/components/common/user/session/withSessionPage';
import {
  Container,
  Skeleton,
  Typography,
} from '@mui/material';

export default withSessionPage(function ProfilePage() {
  const session = useSession();

  return (
    <Container sx={{ mt: 10, mb: 15 }} maxWidth="md">
      <Typography
        variant="h2"
        sx={{
          color: COLOR_PALLETE[1],
        }}
      >
        Profile
      </Typography>

      <pre
        style={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-all",
        }}
      >
        {JSON.stringify(session?.currentUser, null, "  ")}
      </pre>


      {!session && (
        <>
          <div
            style={{
              width: "400px",
              marginBottom: "2rem",
              marginTop: "2rem"
            }}
          >
            <Skeleton width="100%"></Skeleton>
            <Skeleton width="100%"></Skeleton>
            <Skeleton width="100%"></Skeleton>
            <Skeleton width="100%"></Skeleton>
            <Skeleton width="100%"></Skeleton>
            <Skeleton width="100%"></Skeleton>
            <Skeleton width="100%"></Skeleton>
            <Skeleton width="100%"></Skeleton>
            <Skeleton width="100%"></Skeleton>
            <Skeleton width="100%"></Skeleton>
          </div>
        </>
      )}

      <div>
        <LogoutButton variant="contained"></LogoutButton>
      </div>
    </Container>
  );
})

