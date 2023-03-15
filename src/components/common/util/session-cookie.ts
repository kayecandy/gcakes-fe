import { getCookie, deleteCookie, setCookie, getCookies, hasCookie } from "cookies-next";

type SessionCookie = {
  userId: string,
  accessToken: string,
  expires?: Date
}


export const getSessionCookie = () => {
  const accessToken = getCookie("accessToken", {path: '/'}) as string | null | undefined;
  const userId = getCookie('userId', { path: '/' }) as string | null | undefined;

  
  return {
    accessToken,
    userId
  }
}

export const deleteSessionCookie = () => {
  deleteCookie("accessToken", {
    path: '/'
  })

  deleteCookie("userId", {
    path: '/'
  })
}

export const setSessionCookie = ({ accessToken, userId, expires }: SessionCookie) => {
  setCookie('accessToken', accessToken, {
    path: '/',
    expires
  })

  setCookie('userId', userId, {
    path: '/',
    expires
  })
}