import { Session } from "@/types/session";
import { UseState } from "@/types/use-state";
import { useRouter } from "next/router";
import { createContext, FC, useEffect, useRef, useState } from "react";

import { getCookie } from "cookies-next";
import { GET_USER_URL } from "../../util/urls";
import { User } from "@/types/user";

import { jwtVerify } from "jose";


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
      const userId = router.query.userId;
      const accessToken = getCookie("accessToken") as string | null | undefined;


      if (userId && accessToken && !session && !loaded.current) {

        loaded.current = true;

        await fetch(GET_USER_URL(userId as string), {
          method: "GET",
          headers: {
            authorization: `Bearer ${accessToken}`,
          },
        })
          .then(async (res) => {

            const resJson = await res.json();

            setSession({
              accessToken,
              currentUser: resJson.user as User,
              expiration: new Date(resJson.expiration * 1000)
            })

          })
          .catch((e) => {
            console.log(e);
          });
      }
    })();
  }, [router, session, setSession]);

  useEffect(() => {
    if (!session) {
      loaded.current = false;
    }
  }, [session])

  return (
    <SessionContext.Provider
      value={sessionState}
      {...props}
    ></SessionContext.Provider>
  );
};
