import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NFT } from '../models/nft';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  apiUrl = "http://localhost:9191/api/nfts";

  constructor(private httpClient: HttpClient) { }

  getNfts() {
    return this.httpClient.get<NFT[]>(`${this.apiUrl}`);
  }

  getNftByName(name: any) {
    return this.httpClient.get<NFT>(`${this.apiUrl}/${name}`);
  }

  getNftsByCollectionName(collectionName: any) {
    return this.httpClient.get<NFT[]>(`${this.apiUrl}/collection/${collectionName}`);
  }

  deleteNft(id: any) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  persistNft(data: any) {
    return this.httpClient.post(`${this.apiUrl}`, data);
  }

  updateNft(NFT: any) {
    return this.httpClient.put<NFT>(`${this.apiUrl}/${NFT.id}`, NFT);
  }
}
