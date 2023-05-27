import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.models';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersUrl = `${environment.apiURL}orders`;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  getOrder(id: string): Observable<Order> {
    const url = `${this.ordersUrl}/${id}`;
    return this.http.get<Order>(url);
  }

  createOrder(order: Order): Observable<Order> {
    const auth_token = this.localStorageService.get('auth', 'token').idToken;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.post<Order>(this.ordersUrl, order, { headers: headers });
  }
}
