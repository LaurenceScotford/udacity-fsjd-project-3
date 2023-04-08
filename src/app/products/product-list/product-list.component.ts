import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Product } from '../products.models';
// import { ProductListService } from '../../products/product-list.service';
import { CartItem } from '../../cart/cart.models';
import * as fromProducts from '../products.actions';
import { selectProductsList } from '../products.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // products: Product[] = [];
  products$: Observable<Product[]> = this.store.select(selectProductsList);

  constructor(
    // private productListService: ProductListService,
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(fromProducts.loadProducts());
    // this.productListService.getProducts().subscribe(res => {
    //   this.products = res;
    // });
  }

  addToCart(cartItem: CartItem): void {
    this.store.dispatch(fromProducts.addProductToCart({ cartItem: cartItem }));
    //this.cartService.addItem(cartItem);
    // TO DO - Fix with new model structure
    // this.messageService.setMessage(`${cartItem.quantity} x ${cartItem.product.name} added to cart`, 'confirm');
  }
}
