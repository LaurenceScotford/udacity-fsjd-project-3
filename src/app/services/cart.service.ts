import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = [] 

  constructor() { }

  addItem(item: CartItem) {
    const arrayPos = this.items.findIndex(element => JSON.stringify(element.product) === JSON.stringify(item.product));

    if (arrayPos !== -1) {
      this.items[arrayPos].quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  setItemQuantity(item: CartItem) {
    const arrayPos = this.items.findIndex(element => JSON.stringify(element.product) === JSON.stringify(item.product));

    if (arrayPos !== -1) {
      if (item.quantity) {
        this.items[arrayPos].quantity = item.quantity;
      } else {
        this.items.splice(arrayPos, 1);
      }
    } else if (item.quantity) {
      this.items.push(item);
    }
  }

  getItems() : CartItem[] {
    return this.items;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getNumberOfItems(id: number): number {
    const arrayPos = this.items.findIndex(element => element.product.id === id);
    return arrayPos === -1 ? 0: this.items[arrayPos].quantity; 
  }
}
