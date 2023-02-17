/*
https://fusionauth.io/docs/v1/tech/apis/registrations#retrieve-a-user-registration
*/

import { fetchGQL } from '@/components/api/contentful';
import { User } from '@/types/user';
import { StatusCodes } from 'http-status-codes';
import {
    NextApiRequest,
    NextApiResponse,
} from 'next';

export default async function usersHandler(
    req: NextApiRequest,
    res: NextApiResponse<User | Error>
) {
    try {
        const result = await (
            await fetchGQL(
                JSON.stringify({
                    query: `
                        query ($userId: String) {
                            userCollection(where: { admin: false }) {
                                items {
                                    userid
                                    password
                                    firstname
                                    lastname
                                    email
                                    address
                                }
                            }
                        }
                    `,
                    variables: {
                        userId: req.query.userId,
                    },
                })
            )
        ).json()

        return res.status(StatusCodes.OK).json(result.data.userCollection);
    } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e as Error);
    }
}
