import * as React from 'react';

import { AppProps } from 'next/app';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import Footer from './footer/Footer';
import Header from './header/Header';
import { useSample } from '../page/homepage/hooks/useSample';

export default function Page({ Component, pageProps }: AppProps) {
  const [value, setValue] = useSample();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Header
        sections={[
          {
            title: "test title",
            url: "testurl",
          },
        ]}
        title="Test Titleeee"
      ></Header>
      {/* SAMPLE: States on a global scope */}
      {/* <Container>
        <Typography variant="h3">
          <>Value: {value}</>
        </Typography>

        <Button
          variant="contained"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          Add Value
        </Button>
      </Container> */}
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
        }}
      >
        <Component {...pageProps} />
      </Box>

      <Footer></Footer>
    </Box>
  );
}
