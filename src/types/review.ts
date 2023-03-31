import { User } from "./user";

export type ReviewUser = Pick<User, "sys" | "userid" | "email">;

export type Review = {
    sys: {
        id: string,
    }
    title: string,
    rating: number,
    comment: string,
    user: ReviewUser,
};