import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';

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
      product: {
      id: 0,
      name: '',
      price: 0.00,
      url: '',
      description: ''
      },
      quantity: 1
    }
  }

  ngOnInit(): void {
  }

  onQuantityChange(item: CartItem) {
    this.quantityChangeEvent.emit(item);
  }
}
