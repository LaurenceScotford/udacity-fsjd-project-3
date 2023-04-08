import { Injectable } from '@angular/core';
import { CartItem } from './cart.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: CartItem[] = []

  constructor() { }

  addItem(item: CartItem) {
    const arrayPos = this.items.findIndex(element => element.productId === item.productId);

    if (arrayPos !== -1) {
      this.items[arrayPos].quantity += item.quantity;
    } else {
      this.items.push(item);
    }
  }

  setItemQuantity(item: CartItem) {
    const arrayPos = this.items.findIndex(element => element.productId === item.productId);

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

  getItems(): CartItem[] {
    return this.items;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getNumberOfItems(id: string): number {
    const arrayPos = this.items.findIndex(element => element.productId === id);
    return arrayPos === -1 ? 0 : this.items[arrayPos].quantity;
  }

  clearCart() {
    this.items = [];
  }
}
