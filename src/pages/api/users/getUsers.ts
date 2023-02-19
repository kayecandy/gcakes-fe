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
                        query {
                            userCollection {
                                items {
                                    userid
                                    password
                                    firstName
                                    lastName
                                    email
                                    address
                                }
                            }
                        }
                    `,
                })
            )
        ).json()

        return res.status(StatusCodes.OK).json(result.data.userCollection.items);
    } catch (e) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(e as Error);
    }
}
