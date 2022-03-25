import { Product } from "./product";

export class CartItem {
    product: Product;
    quantity: number;

    constructor() {
        this.product = {
            id: 0,
            name: '',
            price: 0.00,
            url: '',
            description: ''
        }
        this.quantity = 0;
    }
}