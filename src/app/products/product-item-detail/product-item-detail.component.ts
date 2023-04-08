import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '../../cart/cart.models';
import { CartService } from '../../cart/cart.service';
import { ProductListService } from '../../products/product-list.service';
import { Product } from '../products.models';
import { MessageService } from '../../message/message.service';

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
      id: '0',
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
      productId: this.product.id,
      quantity: parseInt(this.quantity)
    }
    this.cartService.addItem(item);
    // TO FIX - Get working with updated model structure
    // this.messageService.setMessage(`${item.quantity} x ${item.product.name} added to cart`, 'confirm');
  }
}
