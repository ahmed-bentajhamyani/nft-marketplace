import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  apiUrl = "http://localhost:8090/api/image";

  constructor(private httpClient: HttpClient) { }

  uploadImage(data: any) {
    console.log("service : ")
    console.log(data.get("imageFile"));
    return this.httpClient.post(`${this.apiUrl}`, data).subscribe(() =>  {
      console.log("inside");
    })
  }

  getImage(imageName: any) {
    return this.httpClient.get(`${this.apiUrl}/${imageName}`);
  }
}
