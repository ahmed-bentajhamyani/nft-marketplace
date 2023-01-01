import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  apiUrl = "http://localhost:8084/api/cart";

  constructor(private httpClient:HttpClient) { }
  
}
