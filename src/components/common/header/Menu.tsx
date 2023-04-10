import { FC } from "react";

import { Person, ShoppingCart } from "@mui/icons-material";
import { Box } from "@mui/system";

import MenuItem from "./MenuItem";
import { AccountDialogMenuItem } from "./AccountDialogMenuItem";
import { ShoppingCartDialogMenuItem } from "./ShoppingCartMenuItem";
import { Badge } from "@mui/material";

const Menu: FC = () => {
  return (
    <Box>
      <MenuItem href="/cakes">Cakes</MenuItem>
      <MenuItem href="/cupcakes">Cupcakes</MenuItem>
      <MenuItem href="/decorated-cookies">Decorated Cookies</MenuItem>
      <MenuItem href="/about">About</MenuItem>
      <AccountDialogMenuItem></AccountDialogMenuItem>
      <ShoppingCartDialogMenuItem></ShoppingCartDialogMenuItem>
    </Box>
  );
};

export default Menu;
