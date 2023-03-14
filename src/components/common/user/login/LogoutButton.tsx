import { Button, ButtonProps } from "@mui/material";
import { FC, useEffect } from "react";
import { useSession, useSetSession } from "../../hooks/useSession";

import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";

export const LogoutButton: FC<ButtonProps> = ({
  onClick,
  children = "Logout",
  ...props
}) => {

  const setSession = useSetSession();

  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
    setSession(undefined);
    deleteCookie("accessToken")
    
  }


  return <Button onClick={(e) => {
    if (onClick) {
      onClick(e);
    }

    handleLogout();
    
  }} {...props}>{children}</Button>;
};
