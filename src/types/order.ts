import { Product } from "./product"
import { User } from "./user"

/* For the Add-To-Cart Transactions */
export type Order = {
    sys: {
        id: string
    };
    status: string;                 // ['Pending', 'Confirmed', 'Done', 'Cancelled']
    date: Date;                     // Date the order was made
    customer: User;                 // User who made the order
    products: Product[];            // List of Products added to cart
    quantity: number[];             // Number of items for each product in the list (must match index)x
    deliveryAddress: string;
    paymentMethod: string;          // Tentative
}