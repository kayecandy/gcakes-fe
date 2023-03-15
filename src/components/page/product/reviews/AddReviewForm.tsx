import { Box, Button, Grid, Input, Rating, TextField, Typography } from "@mui/material";
import { FC } from "react";

export const AddReviewForm: FC = () => {
  return (
    <Box
      sx={{
        mt: 20,
        background: "white",
        p: 3,
        borderRadius: 4,
      }}
      maxWidth="sm"
    >
      <Typography
        sx={{
          mb: 3,
        }}
        variant="h4"
      >
        Let us know what you think!
      </Typography>

      <Grid container columnGap={3}>
        <Grid
          sx={{
            flexGrow: 1,
            textAlign: "center"
          }}
          item
        >
          <Box sx={{ textAlign: "center",  mb:3}}>
            <Rating size="large"></Rating>
          </Box>

          <TextField sx={{ mb: 3 }} label="Title" fullWidth></TextField>
          <TextField label="Comment" fullWidth multiline rows={4}></TextField>

          <Button sx={{mt:2}} size="large" variant="contained">Submit</Button>
        </Grid>
        <Grid xs="auto" item></Grid>
      </Grid>
    </Box>
  );
};
