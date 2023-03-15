import { FC } from "react";

import Link from "next/link";

import { Button, ButtonProps, Typography } from "@mui/material";

import { COLOR_PALLETE } from "../ThemeProvider";
import style from "./MenuItem.module.css";

export type MenuItemProps = {
  children: string | JSX.Element;
  href: string;
};

const MenuItem: FC<ButtonProps & MenuItemProps> = ({
  children,
  href,
  // variant = "contained",
  ...buttonProps
}) => {
  return (
    <Link href={href} className={style.Link}>
      <Button
        sx={{
          borderRadius: 50,
          mx: 1,
        }}
        color="secondary"
        {...buttonProps}
      >
        {typeof children === "string" ? (
          <Typography
            sx={{
              textTransform: "capitalize",
              fontWeight: "700",
            }}
            // fontFamily={cursiveFont.fontFamily}
            variant="h5"
            color={COLOR_PALLETE[3]}
          >
            {children}
          </Typography>
        ) : (
          children
        )}
      </Button>
    </Link>
  );
};

export default MenuItem;
