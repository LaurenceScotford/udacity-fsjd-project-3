import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.productListService.getProducts().subscribe(res => {
      this.products = res;
    });
  }

}
