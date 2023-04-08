import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../cart.models';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  @Input() item: CartItem;
  @Output() quantityChangeEvent = new EventEmitter<CartItem>();

  constructor() {
    this.item = {
      productId: '',
      quantity: 1
    }
  }

  ngOnInit(): void {
  }

  onQuantityChange() {
    this.quantityChangeEvent.emit(this.item);
  }
}
