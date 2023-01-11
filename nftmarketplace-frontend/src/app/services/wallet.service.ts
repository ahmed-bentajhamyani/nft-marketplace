import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Wallet } from '../models/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  apiUrl = "http://localhost:9191/api/wallets";

  constructor(private httpClient: HttpClient) { }

  getWallets() {
    return this.httpClient.get<Wallet[]>(`${this.apiUrl}`);
  }

  getWalletByHash(hash: any) {
    return this.httpClient.get<Wallet>(`${this.apiUrl}/${hash}`);
  }

  deleteWallet(id: any) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  persistWallet(data: any) {
    return this.httpClient.post(`${this.apiUrl}`, data);
  }

  updateWallet(wallet: any) {
    return this.httpClient.put<Wallet>(`${this.apiUrl}/${wallet.id}`, wallet);
  }
}
