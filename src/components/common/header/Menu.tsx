import { FC } from "react";

import { Person, ShoppingCart } from "@mui/icons-material";
import { Box } from "@mui/system";

import MenuItem from "./MenuItem";
import { AccountDialogMenuItem } from "./AccountDialogMenuItem";
import { ShoppingCartDialogMenuItem } from "./ShoppingCartMenuItem";
import { Badge } from "@mui/material";

function parseStorage() {
  if (typeof window !== 'undefined')
    return String(sessionStorage.getItem('items')).replace(/["]+/g, '')?.split('-').length;
  return 0;
}

const Menu: FC = () => {
  return (
    <Box>
      <MenuItem href="/cakes">Cakes</MenuItem>
      <MenuItem href="/cupcakes">Cupcakes</MenuItem>
      <MenuItem href="/decorated-cookies">Decorated Cookies</MenuItem>
      <MenuItem href="/about">About</MenuItem>
      <AccountDialogMenuItem></AccountDialogMenuItem>
      <Badge
        badgeContent={
          (typeof window !== "undefined" && sessionStorage.length) ? parseStorage()
            : null
        }
        color="error"
      >
        <ShoppingCartDialogMenuItem></ShoppingCartDialogMenuItem>
      </Badge>
    </Box>
  );
};

export default Menu;
