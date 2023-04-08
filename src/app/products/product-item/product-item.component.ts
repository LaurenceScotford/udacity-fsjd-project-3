import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../cart/cart.models';
import { Product } from '../products.models';
import { CartService } from '../../cart/cart.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity: string;
  @Output() addToCartEvent = new EventEmitter<CartItem>();

  constructor(public cartService: CartService) {
    this.product = {
      id: '0',
      name: '',
      price: 0.00,
      url: '',
      description: ''
    };
    this.quantity = '1';
  }

  ngOnInit(): void {
  }

  addToCart() {
    this.addToCartEvent.emit({
      productId: this.product.id,
      quantity: parseInt(this.quantity)
    });
  }
}
