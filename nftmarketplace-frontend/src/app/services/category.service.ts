import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "http://localhost:9191/api/categories";

  constructor(private httpClient:HttpClient) { }

  getCategories(){
    return this.httpClient.get<Category[]>(`${this.apiUrl}`);
  }
  getOneCategory( id:any ){
    return this.httpClient.get<Category>(`${this.apiUrl}/${id}`);
  }
  deleteCategory( id:any ){
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
  persistCategory( data:any ){
    return this.httpClient.post(`${this.apiUrl}`, data);
  }
  updateCategory( Category:any ){
    return this.httpClient.put<Category>(`${this.apiUrl}/${Category.id}`, Category);
  }
}
