import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductListService } from 'src/app/services/product-list.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;

  constructor(private productListService: ProductListService, private route: ActivatedRoute, private location: Location) {
    this.product = {
      id: 0,
      name: '',
      price: 0.00,
      url: '',
      description: ''
    }
   }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productListService.getProduct(id).subscribe(product => this.product = product);
  }
}
