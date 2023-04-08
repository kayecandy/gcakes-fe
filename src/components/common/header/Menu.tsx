import { FC } from "react";

import { Person, ShoppingCart } from "@mui/icons-material";
import { Box } from "@mui/system";

import MenuItem from "./MenuItem";
import { AccountDialogMenuItem } from "./AccountDialogMenuItem";

const Menu: FC = () => {
  return (
    <Box>
      <MenuItem href="/cakes">Cakes</MenuItem>
      <MenuItem href="/cupcakes">Cupcakes</MenuItem>
      <MenuItem href="/decorated-cookies">Decorated Cookies</MenuItem>
      <MenuItem href="/about">About</MenuItem>
      <AccountDialogMenuItem></AccountDialogMenuItem>
      <MenuItem sx={{
        mx: 0,
        px: 0,
        borderRadius: 50
      }} href="/#" variant="text">
        <ShoppingCart fontSize="large"></ShoppingCart>
      </MenuItem>
    </Box>
  );
};

export default Menu;
