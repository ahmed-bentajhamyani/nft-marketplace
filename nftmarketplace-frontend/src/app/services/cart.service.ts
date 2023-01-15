import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl = "http://localhost:9191/api/cart";

  constructor(private httpClient: HttpClient) { }

  getUserCarts(walletAdress: any) {
    return this.httpClient.get<Cart[]>(`${this.apiUrl}/${walletAdress}`);
  }

  getCartByName(name: any) {
    return this.httpClient.get<Cart>(`${this.apiUrl}/${name}`);
  }

  removeItemFromCart(id: any) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  clearCart(walletAdress: any) {
    return this.httpClient.delete(`${this.apiUrl}/clear/${walletAdress}`);
  }

  persistCart(data: any) {
    console.log(data);
    return this.httpClient.post(`${this.apiUrl}`, data);
  }

  updateCart(Cart: any) {
    return this.httpClient.put<Cart>(`${this.apiUrl}/${Cart.id}`, Cart);
  }
  
}
