import { Product } from "./product";
import { User } from "./user";

export type Review = {
    sys: {
        id: string,
    }
    title: string,
    rating: number,
    comment: string,
    product: Product,
    user: User,
};