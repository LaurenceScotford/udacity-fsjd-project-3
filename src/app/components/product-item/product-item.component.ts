import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity: string;

  constructor(private cartService: CartService, private messageService: MessageService) { 
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

  addToCart(): void  {
    let item = {
      product: this.product,
      quantity: parseInt(this.quantity)
    }
    this.cartService.addItem(item);
    this.messageService.setMessage(`${item.quantity} x ${item.product.name} added to cart`, 'confirm');
  }
}
