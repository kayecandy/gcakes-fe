import { FC } from "react";

import {
  AddCircleOutlined,
  LocalShippingOutlined,
  PaymentOutlined,
} from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";

import IconCard from "./IconCard";
import { SX_MASKS } from "@/components/common/util/masks";

const IconSection: FC = () => {
  return (
    <Box
      sx={{
        pt: 13,
        backgroundColor: "white",
        ...SX_MASKS[1]("bottom"),
        pb: 13
      }}
    >
      <Container
        sx={{
          // mb: 8,
          textAlign: "center",
        }}
      >
        <Grid container>
          <Grid item xs={4}>
            <IconCard
              Icon={LocalShippingOutlined}
              title="Shipping"
              text={"Some shipping text here"}
            ></IconCard>
          </Grid>

          <Grid item xs={4}>
            <IconCard
              Icon={AddCircleOutlined}
              text={"Some shipping text here"}
              title="Some title"
            ></IconCard>
          </Grid>

          <Grid item xs={4}>
            <IconCard
              Icon={PaymentOutlined}
              text={"Some shipping text here"}
              title="Payment"
            ></IconCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IconSection;
