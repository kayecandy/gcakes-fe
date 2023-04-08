import LoremIpsum from '@/components/common/LoremIpsum';
import { useSample } from '@/components/page/homepage/hooks/useSample';
import { AccessTimeFilled } from '@mui/icons-material';
import {
  Button,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';

export default function TestFilePage() {
  const [value, setValue] = useSample();

  return (
    <>
      <Container
        sx={{
          maxWidth: "sm",
          pt: 10,
          pb: 10,
        }}
      >
        <Typography>HELLO</Typography>
        <Grid container>
          <Grid item xs={8}>
            <Skeleton
              sx={{
                mx: 3,
              }}
            ></Skeleton>
          </Grid>
          <Grid item xs={4}>
            <Skeleton
              sx={{
                mx: 3,
              }}
            ></Skeleton>
          </Grid>
        </Grid>
        <Typography>Test</Typography>

        <Typography variant="h1">
          <>Value: {value}</>
        </Typography>

        <Button
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Add value
        </Button>
        <AccessTimeFilled></AccessTimeFilled>

        <LoremIpsum></LoremIpsum>
      </Container>
    </>
  );
}
