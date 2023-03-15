/* eslint-disable react-hooks/exhaustive-deps */
import {
  FC,
  useEffect,
  useState,
} from 'react';

import Page404 from '@/pages/404';

import { getSessionCookie } from '../../util/session-cookie';
import { useSession } from '../../hooks/useSession';
import { useRouter } from 'next/router';

export const withSessionPage = (Component: FC) => {

  const ComponentWithSession: FC = (props) => {



    const [component, setComponent] = useState<JSX.Element>();

    const session = useSession();
    const router = useRouter();


    useEffect(() => {
      const {accessToken, userId} = getSessionCookie()


      if (!accessToken || !userId || accessToken == '0' || userId == '0') {
        setComponent(
          <Page404></Page404>
        )
      } else if (session) {
        setComponent(
          <Component {...props}></Component>
        )
      }

    }, [session, router])


    return component ?? <></>;

  } 

  return ComponentWithSession;
}