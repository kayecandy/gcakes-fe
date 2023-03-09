import { FC } from "react";

import { ShoppingCart } from "@mui/icons-material";
import { Box } from "@mui/system";

import MenuItem from "./MenuItem";

const Menu: FC = () => {
  return (
    <Box>
      <MenuItem href="/cakes">Cakes</MenuItem>
      <MenuItem href="/cupcakes">Cupcakes</MenuItem>
      <MenuItem href="/#">Decorated Cookies</MenuItem>
      <MenuItem href="#">About</MenuItem>
      <MenuItem href="/login">Login</MenuItem>
      <MenuItem href="/test_folder/testfile">Test</MenuItem>
      <MenuItem href="/#" variant="text">
        <ShoppingCart fontSize="large"></ShoppingCart>
      </MenuItem>
    </Box>
  );
};

export default Menu;
