import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/order';
import { MessageService } from 'src/app/message.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  order: Order = {
    id: '',
    customerName: '',
    deliveryAddress: '',
    datetime: 0,
    items: [],
    status: 'active'
  };

  constructor(private route: ActivatedRoute, private orderService: OrderService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.orderService.getOrder(id).subscribe(order => this.order = order);
    } else {
      this.messageService.setMessage('Sorry! There was an error when we tried to obtain your order. Please contact our helpdesk.', 'warn');
    }
  }

  getTotal(): string {
    let total = 0;
    for (let i = 0; i < this.order.items.length; i++) {
      total += this.order.items[i].product.price * this.order.items[i].quantity;
    }
    return total.toFixed(2);
  }
}
