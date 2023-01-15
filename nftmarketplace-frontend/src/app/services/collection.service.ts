import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collection } from '../models/collection';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  apiUrl = "http://localhost:9191/api/collections";

  constructor(private httpClient: HttpClient) { }

  getCollections() {
    return this.httpClient.get<Collection[]>(`${this.apiUrl}`);
  }

  getCollectionByName(name: any) {
    return this.httpClient.get<Collection>(`${this.apiUrl}/${name}`);
  }

  getCollectionsByWalletAddress(walletAddress: any) {
    return this.httpClient.get<Collection[]>(`${this.apiUrl}/user/${walletAddress}`);
  }

  deleteCollection(id: any) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  persistCollection(data: any) {
    return this.httpClient.post(`${this.apiUrl}`, data);
  }

  updateCollection(Collection: any) {
    return this.httpClient.put<Collection>(`${this.apiUrl}/${Collection.id}`, Collection);
  }
}
