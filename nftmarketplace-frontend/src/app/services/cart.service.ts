import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl = "http://localhost:9191/api/cart";

  constructor(private httpClient: HttpClient) { }

  getCarts() {
    return this.httpClient.get<Cart[]>(`${this.apiUrl}`);
  }

  getCartByName(name: any) {
    return this.httpClient.get<Cart>(`${this.apiUrl}/${name}`);
  }

  deleteCart(id: any) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  persistCart(data: any) {
    return this.httpClient.post(`${this.apiUrl}`, data);
  }

  updateCart(Cart: any) {
    return this.httpClient.put<Cart>(`${this.apiUrl}/${Cart.id}`, Cart);
  }
  
}
