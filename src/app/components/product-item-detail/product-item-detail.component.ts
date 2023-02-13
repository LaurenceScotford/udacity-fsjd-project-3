import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { ProductListService } from 'src/app/services/product-list.service';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;
  quantity: string;

  constructor(private productListService: ProductListService, private route: ActivatedRoute, public cartService: CartService, private messageService: MessageService) {
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
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productListService.getProduct(id).subscribe(product => this.product = product);
  }

  addToCart(): void {
    let item = {
      product: this.product,
      quantity: parseInt(this.quantity)
    }
    this.cartService.addItem(item);
    this.messageService.setMessage(`${item.quantity} x ${item.product.name} added to cart`, 'confirm');
  }
}
