import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';


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
      id: 0,
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
      product: this.product,
      quantity: parseInt(this.quantity)
    });
  }
}
