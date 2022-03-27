import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductListService } from 'src/app/services/product-list.service';
import { MessageService } from 'src/app/services/message.service';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productListService: ProductListService, private cartService: CartService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.productListService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

  addToCart(cartItem: CartItem): void  {
    this.cartService.addItem(cartItem);
    this.messageService.setMessage(`${cartItem.quantity} x ${cartItem.product.name} added to cart`, 'confirm');
  }
}
