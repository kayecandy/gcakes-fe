import { GetServerSideProps, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

import { getCookie } from "cookies-next";

import { jwtVerify } from "jose";



/**
 * Vercel currently have problems with serverSideRendering
 * 
 * These functions are unable to be used
 */

export const verifyAccessToken: GetServerSideProps<{}> = async (context) => {
  try {
    const { req, res, query } = context;

    const accessToken = getCookie("accessToken", {
      req,
      res,
    });

    if (accessToken) {
      const decodedToken = await jwtVerify(
        accessToken as string,
        new TextEncoder().encode(process.env.TOKEN_SECRET)
      );

      if (decodedToken.payload.userid === query.userId) {
        return {
          props: {},
        };
      }
    }
  } catch (e) {
    console.log("Error", e);
  }

  return {
    notFound: true,
  };
};

export const withVerifyAccessToken = <
  P extends { [key: string]: any } = { [key: string]: any },
  Q extends ParsedUrlQuery = ParsedUrlQuery,
  D extends PreviewData = PreviewData
  >(serverSideProps?:GetServerSideProps<P,Q,D>) => {
  
  const mainServerSideProps: GetServerSideProps<P | {},Q,D> = async (context) => {
    const accessTokenProps = await verifyAccessToken(context);

    if ('props' in accessTokenProps) {
      if (serverSideProps) {
        return serverSideProps(context);
      }
      return {
        props: {}
      }
    }

    return {
      notFound: true
    };
  }

  return mainServerSideProps;
  
};
