import { Session } from "@/types/session";
import { UseState } from "@/types/use-state";
import { useContext } from "react"
import { SessionContext } from "../user/session/SessionContext"

export const useSession = (): Session|undefined => {
  const sessionContext = useContext(SessionContext);

  if (!sessionContext) {
    throw new Error("SessionContext not initialized")
  }

  const [session] = sessionContext;


  return session;
}

export const useSetSession = (): UseState<Session | undefined>["1"] => {
  const sessionContext = useContext(SessionContext);

  if (!sessionContext) {
    throw new Error("SessionContext not initialized")
  }

  const [,setSession] = sessionContext;

  if (!setSession) {
    throw new Error("Session state not initialized");
  }

  return setSession;
}