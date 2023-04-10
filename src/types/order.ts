import { Product } from "./product"
import { User } from "./user"

/* For the Add-To-Cart Transactions */
export type Order = {
    sys: {
        id: string
    };
    status: OrderStatus;
    date: Date;                     // Date the order was made
    customer: User;                 // User who made the order
    products: Product[];            // List of Products added to cart
    quantity: number[];             // Number of items for each product in the list (must match index with product)
    deliveryAddress: string;
    paymentMethod: string;          // Tentative
}

export type OrderStatus = "Pending" | "Confirmed" | "Done" | "Cancelled";