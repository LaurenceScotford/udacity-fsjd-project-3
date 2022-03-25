import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [] 

  constructor() { }

  addItem(item: CartItem) {
    const arrayPos = this.items.findIndex(element => element.product === item.product);

    if (arrayPos !== -1) {
      this.items[arrayPos].quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  getNumberOfItems(id: number) {
    const arrayPos = this.items.findIndex(element => element.product.id === id);
    return arrayPos === -1 ? 0: this.items[arrayPos].quantity; 
  }
}
