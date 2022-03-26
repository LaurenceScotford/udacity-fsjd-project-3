import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { MessageService } from 'src/app/services/message.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: CartItem[] = [];
  fullname: string = '';
  addr: string = '';
  cardnum: string = '';

  constructor(private cartService: CartService, private messageService: MessageService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  getTotal(): string {
    let total = 0;
    for(let i = 0; i < this.items.length; i++) {
      total += this.items[i].product.price * this.items[i].quantity;
    }
    return total.toFixed(2);
  }

  onQuantityChange(item: CartItem): void {
    this.cartService.setItemQuantity(item);
    this.messageService.setMessage(`Number of ${item.product.name}${(item.product.name.slice(-1).toLowerCase() !== 's' ? 's' : '')} in cart set to ${item.quantity} item${(item.quantity === 1 ? '.': 's.')}`, "confirm");
  }

  onSubmitOrder(): void {
    this.orderService.createOrder({
      id: null,
      customerName: this.fullname,
      deliveryAddress: this.addr,
      datetime: Date.now(),
      items: this.items,
      status: 'active'
    }).subscribe(order => {
      this.messageService.setMessage(`Ordered products to a total of £${this.getTotal()}`, 'confirm');
      this.cartService.clearCart();
      this.router.navigate([`/confirm-order/${order.id}`]);
    });
  } 
}
