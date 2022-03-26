import { CartItem } from "./cartItem";

export class Order {
    id: string | null;
    customerName: string;
    deliveryAddress: string;
    datetime: number;
    items: CartItem[];
    status: 'active' | 'complete';

    constructor() {
        this.id = null;
        this.customerName = '';
        this.deliveryAddress = '';
        this.datetime = 0;
        this.items = [];
        this.status = 'active';
    }
}