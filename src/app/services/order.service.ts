import { environment } from '../../environments/environment'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Order } from '../models/order';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class OrderService  {
  private ordersUrl = `${environment.apiURL}orders`;
  
  constructor(private http: HttpClient, private messageService: MessageService) { 
  }

  getOrder(id: string): Observable<Order> {
    const url = `${this.ordersUrl}/${id}`;
    return this.http.get<Order>(url);
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.ordersUrl, order).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        this.messageService.setMessage(`Sorry! Something went wrong while we tried to place your order. Please try again later.`, 'warn');
        throw new Error(error.message);
      })
    );
  }
}
