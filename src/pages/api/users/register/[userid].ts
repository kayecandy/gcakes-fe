/*
https://fusionauth.io/docs/v1/tech/apis/registrations#retrieve-a-user-registration
*/

import { fetchGQL } from "@/components/api/contentful";
import { User } from "@/types/user";
import { NextApiRequest, NextApiResponse } from "next";

export default async function registerHandler(
    req: NextApiRequest,
    res: NextApiResponse<User | Error>
) {
    try {
        const result = await (
            await fetchGQL(
                JSON.stringify({

                })
            )
        ).json()
    }
}