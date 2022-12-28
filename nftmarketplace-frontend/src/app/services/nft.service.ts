import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NFT } from '../models/nft';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  apiUrl = "http://localhost:8000/api/nfts";

  constructor(private httpClient:HttpClient) { }

  getNFTs(){
    return this.httpClient.get<NFT[]>(`${this.apiUrl}`);
  }
  getOneNFT( id:any ){
    return this.httpClient.get<NFT>(`${this.apiUrl}/${id}`);
  }
  deleteNFT( id:any ){
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }
  persistNFT( data:any ){
    return this.httpClient.post(`${this.apiUrl}`, data);
  }
  updateNFT( NFT:any ){
    return this.httpClient.put<NFT>(`${this.apiUrl}/${NFT.id}`, NFT);
  }
}
