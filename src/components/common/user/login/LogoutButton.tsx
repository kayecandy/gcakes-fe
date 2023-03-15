import { FC } from 'react';

import { useRouter } from 'next/router';

import {
  Button,
  ButtonProps,
} from '@mui/material';

import { useSetSession } from '../../hooks/useSession';
import { deleteSessionCookie } from '../../util/session-cookie';

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
    deleteSessionCookie();
    
  }


  return <Button onClick={(e) => {
    if (onClick) {
      onClick(e);
    }

    handleLogout();
    
  }} {...props}>{children}</Button>;
};
