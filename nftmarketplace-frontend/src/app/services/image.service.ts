import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = "http://localhost:9191/api/image";

  constructor(private httpClient: HttpClient) { }

  uploadImage(data: any) {
    console.log("service : ")
    console.log(data.get("imageFile"));
    return this.httpClient.post(`${this.apiUrl}`, data);
  }

  getImage(imageName: any) {
    return this.httpClient.get(`${this.apiUrl}/${imageName}`);
  }

  deleteImage(imageName: any) {
    return this.httpClient.delete(`${this.apiUrl}/${imageName}`);
  }
}
