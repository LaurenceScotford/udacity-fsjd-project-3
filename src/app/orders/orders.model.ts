import { CartItem } from "../cart/cart.models";

export interface Order {
    id: string | null;
    customerName: string;
    deliveryAddress: string;
    datetime: number;
    items: CartItem[];
    status: 'active' | 'complete';
}

export interface OrdersState {
    orders: Order[]
}

