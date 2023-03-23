/* eslint-disable react-hooks/exhaustive-deps */

import {
  createContext,
  FC,
  useEffect,
  useRef,
  useState,
} from 'react';

import { useRouter } from 'next/router';

import { Session } from '@/types/session';
import { UseState } from '@/types/use-state';
import { User } from '@/types/user';

import { deleteSessionCookie, getSessionCookie, setSessionCookie } from '../../util/session-cookie';
import { GET_USER_URL } from '../../util/urls';

export const SessionContext = createContext<
  UseState<Session | undefined> | undefined
>(undefined);

export const SessionProvider: FC<object> = (props) => {
  const sessionState = useState<Session | undefined>(undefined);

  const [session, setSession] = sessionState;
  const loaded = useRef(false);

  const router = useRouter();

  /**
   * Load session if accessToken cookie exists
   */
  useEffect(() => {
    (async () => {
      const { accessToken, userId } = getSessionCookie();

      if (
        userId &&
        accessToken &&
        !session &&
        !loaded.current &&
        router.asPath !== "/404"
      ) {
        loaded.current = true;

        await fetch(GET_USER_URL(userId as string), {
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
          .then(async (res) => {
            if (!res.ok) {
              throw await res.json();
            }

            const resJson = await res.json();

            setSession({
              accessToken,
              currentUser: resJson.user as User,
              expiration: new Date(resJson.expiration * 1000),
            });

            loaded.current = false;
          })
          .catch((e) => {
            deleteSessionCookie()

            setSession(undefined);

            const newCookies = getSessionCookie();

            /**
             * Prevent from infinite router reloading
             */
            if (newCookies.accessToken || newCookies.userId) {
              setSessionCookie({
                accessToken: '0',
                userId: '0',
              })
            } else {
              router.replace(window.location.pathname)
            }




            loaded.current = false;

          });
      }
    })();
  }, [router]);

  return (
    <SessionContext.Provider
      value={sessionState}
      {...props}
    ></SessionContext.Provider>
  );
};
